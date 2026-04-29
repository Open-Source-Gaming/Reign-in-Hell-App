# Security Engineer Lens

**Role:** Evaluates code for security vulnerabilities, threat exposure, authentication/authorization correctness, and secure coding practices.
**Prefix:** SEC

## Focus Areas

- OWASP Top 10 vulnerabilities (injection, broken auth, sensitive data exposure, XXE, broken access control, security misconfiguration, XSS, insecure deserialization, vulnerable components, insufficient logging)
- Authentication and session management
- Authorization and access control (horizontal and vertical)
- Input validation and output encoding
- Cryptography usage (algorithms, key management, randomness)
- Secret and credential handling
- Third-party dependency vulnerabilities
- CORS, CSP, and other browser security headers
- File upload and download security
- Server-side request forgery (SSRF) risks
- Supply chain and dependency integrity

## Out of Scope

- Performance optimization (see Performance lens)
- UI aesthetics
- Code style
- Business logic correctness (unless security-relevant)

## Severity Calibration

| Severity | Criteria                                                                                                                                                         |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Exploitable vulnerability (RCE, SQL injection, auth bypass), secret in code/history, broken access control on sensitive data, use of known-vulnerable dependency |
| High     | Missing input validation on untrusted source, weak cryptography (MD5, SHA1 for passwords), missing CSRF protection, information disclosure in error              |
| Medium   | Missing security header, overly permissive CORS, verbose error messages leaking implementation, missing rate limiting on sensitive endpoint                      |
| Low      | Security header could be stricter, dependency version could be updated proactively                                                                               |
| Info     | Defense-in-depth suggestion, security best practice observation                                                                                                  |

## Checklist

- [ ] No secrets, API keys, or credentials in code or config files
- [ ] All user input is validated and sanitized before use
- [ ] SQL queries use parameterized statements (no string concatenation)
- [ ] Authentication checks are present on all protected routes
- [ ] Authorization checks verify resource ownership (no IDOR)
- [ ] Passwords are hashed with bcrypt/argon2/scrypt (not MD5/SHA1)
- [ ] Cryptographic operations use well-vetted libraries, not hand-rolled code
- [ ] Output is properly encoded to prevent XSS (HTML, JS, URL contexts)
- [ ] File uploads validate type, size, and content
- [ ] Errors do not leak implementation details or stack traces to users
- [ ] Dependencies are scanned for known vulnerabilities
- [ ] Rate limiting protects authentication and expensive operations
