# Migration Guide

When upgrading from earlier implementations (pre-2025) follow these steps:
1. Review breaking changes: header version moved from numeric to string "2025"; HMAC requirement introduced
2. Update clients to include seq and ts header fields
3. Add HMAC validation logic; provide fallback period configurable by server
4. Run compatibility mode: server can accept old frames when compatibility mode is enabled for a migration window
