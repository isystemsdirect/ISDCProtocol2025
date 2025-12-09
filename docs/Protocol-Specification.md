# Protocol Specification — ISDCProtocol2025

This page contains definitive, field-level definitions for the protocol.

Overview
- Framing: 4-byte big-endian length prefix followed by a single message frame
- Envelope encoding: Header is JSON (UTF-8) followed by binary or JSON body depending on message type
- Integrity: HMAC-SHA256 over header+body by default; optional asymmetric signatures for cross-domain messages
- Replay protection: 64-bit monotonic sequence ID included in header

Header fields (JSON)
- version (string): protocol version, e.g. "2025"
- type (string): message type (CONNECT, ACK, COMMAND, EVENT, ERROR, PING, PONG)
- seq (integer): sender sequence number (monotonic)
- ts (integer): unix epoch ms timestamp when message created
- flags (integer): bit flags (reserved)
- auth (object|null): authentication metadata (token ID, thumbprint)

Message body formats
- CONNECT: { client_id: string, auth_token: string, capabilities: [string] }
- ACK: { status: "ok" | "error", server_time: integer }
- COMMAND: { id: string, target: string, action: string, params: object }
- EVENT: { source: string, event_type: string, data: object }
- ERROR: { code: integer, message: string, details?: object }

Wire examples
- Each frame: [4-byte length][UTF-8 header JSON][body bytes]
- Example: length = len(header)+len(body)

Security and recommended algorithms
- Transport: TLS 1.2 or TLS 1.3
- HMAC: HMAC-SHA256 with per-session key
- Auth: Prefer mutual TLS or token-based OIDC tokens with short TTL
