interface Env {
  ASSETS: Fetcher;
  GHOST_URL: string;
  TURNSTILE_SECRET_KEY?: string;
  CF_ACCESS_CLIENT_ID?: string;
  CF_ACCESS_CLIENT_SECRET?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleSubscribe(request: Request, env: Env): Promise<Response> {
  let email: string;
  let turnstileToken: string | undefined;

  try {
    const body = (await request.json()) as { email?: string; turnstileToken?: string };
    email = (body.email ?? '').trim().toLowerCase();
    turnstileToken = body.turnstileToken;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!isValidEmailFormat(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const domain = email.slice(email.lastIndexOf('@') + 1);
  if (!(await hasMxRecords(domain))) {
    return Response.json({ error: 'Email domain cannot receive mail' }, { status: 400 });
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const ip = request.headers.get('CF-Connecting-IP') ?? '';
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken ?? '',
        remoteip: ip,
      }),
    });
    const verification = (await verifyRes.json()) as { success: boolean };
    if (!verification.success) {
      return Response.json({ error: 'Bot check failed' }, { status: 400 });
    }
  }

  const ghostUrl = env.GHOST_URL.replace(/\/$/, '');
  const ghostHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
  if (env.CF_ACCESS_CLIENT_ID && env.CF_ACCESS_CLIENT_SECRET) {
    ghostHeaders['CF-Access-Client-Id'] = env.CF_ACCESS_CLIENT_ID;
    ghostHeaders['CF-Access-Client-Secret'] = env.CF_ACCESS_CLIENT_SECRET;
  }

  const ghostRes = await fetch(`${ghostUrl}/members/api/send-magic-link/`, {
    method: 'POST',
    headers: ghostHeaders,
    body: JSON.stringify({ email, emailType: 'subscribe' }),
    signal: AbortSignal.timeout(15000),
  });

  if (!ghostRes.ok && ghostRes.status !== 201) {
    return Response.json({ error: 'Subscription failed. Please try again.' }, { status: 500 });
  }

  return Response.json({ success: true });
}

function isValidEmailFormat(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  const atIndex = email.lastIndexOf('@');
  if (atIndex < 1) return false;
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (local.length > 64 || domain.length < 4) return false;
  if (!domain.includes('.')) return false;
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) return false;
  if (
    !/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/.test(
      domain,
    )
  )
    return false;
  return true;
}

async function hasMxRecords(domain: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`,
      { headers: { Accept: 'application/dns-json' } },
    );
    const data = (await res.json()) as { Answer?: { type: number }[] };
    return (data.Answer ?? []).some((r) => r.type === 15);
  } catch {
    return true;
  }
}
