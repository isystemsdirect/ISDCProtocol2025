# Implementation Guide

This guide gives implementation hints and language-specific notes.

Reference implementations
- Reference server: /server in repository (look for README there)
- Client libraries: see /clients directory (community maintained)

Core responsibilities
- Framing/parsing: read 4-byte length, parse header JSON, validate header fields, then parse body according to declared type
- Authentication: validate token or client cert, populate session keys
- Ordering &amp; replay: verify seq monotonicity and windowed anti-replay checks
- Error handling: return ERROR messages with codes from Error Codes section

Language-specific notes
- Node.js: use Buffer and streams; prefer async iterators for socket read loops
- Python: use struct.unpack for length frame; use HMAC from hashlib
- Go: use encoding/json for header; io.ReadFull for exact frame reads

Testing
- Unit tests for each message type
- Fuzz body parsing for robustness against malicious input
- Integration tests with TLS and auth mocked
