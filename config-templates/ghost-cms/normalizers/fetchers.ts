import type { GhostConnection, GhostPost } from './types';

function buildCfAccessHeaders(): Record<string, string> {
  const id = process.env.CF_ACCESS_CLIENT_ID;
  const secret = process.env.CF_ACCESS_CLIENT_SECRET;
  if (id && secret) {
    return {
      'CF-Access-Client-Id': id,
      'CF-Access-Client-Secret': secret,
    };
  }
  return {};
}

export async function fetchGhostPosts(connection: GhostConnection): Promise<GhostPost[]> {
  const url = process.env[connection.urlEnvVar];
  const adminKey = connection.adminApiKeyEnvVar
    ? process.env[connection.adminApiKeyEnvVar]
    : undefined;

  if (!url) {
    console.warn(`[${connection.id}] Missing env var: ${connection.urlEnvVar}. Skipping.`);
    return [];
  }

  if (adminKey) return fetchWithAdminApi(connection.id, url, adminKey);

  const contentKey = process.env[connection.apiKeyEnvVar];
  if (!contentKey) {
    console.warn(`[${connection.id}] Missing env vars. Skipping.`);
    return [];
  }

  return fetchWithContentApi(connection.id, url, contentKey);
}

async function fetchWithContentApi(id: string, url: string, key: string): Promise<GhostPost[]> {
  const endpoint = `${url.replace(/\/$/, '')}/ghost/api/content/posts/?key=${key}&include=tags,authors&limit=all`;
  const response = await fetch(endpoint, { headers: buildCfAccessHeaders() });
  if (!response.ok) {
    console.error(`[${id}] Ghost API error: ${response.status} ${response.statusText}`);
    return [];
  }
  const data = (await response.json()) as { posts: GhostPost[] };
  return data.posts;
}

async function fetchWithAdminApi(id: string, url: string, adminKey: string): Promise<GhostPost[]> {
  const token = await createAdminJwt(adminKey);
  const endpoint = `${url.replace(/\/$/, '')}/ghost/api/admin/posts/?filter=status:[published,draft]&include=tags,authors&formats=html&limit=all`;
  const response = await fetch(endpoint, {
    headers: { Authorization: `Ghost ${token}`, ...buildCfAccessHeaders() },
  });
  if (!response.ok) {
    console.error(`[${id}] Ghost Admin API error: ${response.status} ${response.statusText}`);
    return [];
  }
  const data = (await response.json()) as { posts: GhostPost[] };
  return data.posts;
}

async function createAdminJwt(adminApiKey: string): Promise<string> {
  const { createHmac } = await import('node:crypto');
  const [id, secret] = adminApiKey.split(':');
  const now = Math.floor(Date.now() / 1000);
  const exp = now + 5 * 60;

  const header = Buffer.from(JSON.stringify({ alg: 'HS256', kid: id, typ: 'JWT' })).toString(
    'base64url',
  );
  const payload = Buffer.from(JSON.stringify({ iat: now, exp, aud: '/admin/' })).toString(
    'base64url',
  );
  const signingInput = `${header}.${payload}`;
  const sig = createHmac('sha256', Buffer.from(secret, 'hex'))
    .update(signingInput)
    .digest('base64url');

  return `${signingInput}.${sig}`;
}
