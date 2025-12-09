# FAQ / Troubleshooting

Q: What transport should I use?
A: TCP or WebSocket + TLS. Use UDP only if you implement a reliability layer.

Q: How do I debug handshake failures?
A: Enable verbose logs, verify TLS certificates, compare CONNECT/ACK headers, and confirm HMAC keys are configured.
