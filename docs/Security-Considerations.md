# Security Considerations

Threat model
- Active on-path attackers: protect with TLS and message-level integrity
- Replay attacks: use sequence numbers and per-session keys
- Compromised clients: limit token lifetimes and implement revocation

Recommendations
- Always use TLS in production
- Rotate HMAC keys regularly and use per-session secrets
- Limit privileges on tokens and require scopes for sensitive actions
- Sanitize and validate all incoming message bodies
