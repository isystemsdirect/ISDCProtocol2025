# Getting Started — ISDCProtocol2025

This page helps you get up and running quickly with the reference implementation.

Prerequisites
- Supported transports: TCP (recommended), WebSocket (recommended for browsers), UDP + reliability layer (experimental)
- TLS 1.2+ for production deployments
- Language bindings: see Implementation Guide

Quick start (reference server)
1. Clone the repo: git clone https://github.com/isystemsdirect/ISDCProtocol2025.git
2. Build/run the reference server (example): follow README in /server
3. Connect a client using the CONNECT message (see Message Types &amp; Examples)

Quick start (reference client)
- Use the provided client library for your language (see Implementation Guide). Example connection sequence:
  1. Establish TLS / transport connection
  2. Send CONNECT with client_id and auth token
  3. Wait for ACK and session parameters
  4. Send COMMAND or subscribe to EVENT streams

Debug tips
- Enable verbose logging on both sides for handshakes
- Use the example payloads in Message Types &amp; Examples
