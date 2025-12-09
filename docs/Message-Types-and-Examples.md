# Message Types &amp; Examples

This page collects concrete examples you can copy into tests.

1) CONNECT example
Header: {"version":"2025","type":"CONNECT","seq":1,"ts":1700000000000}
Body (JSON): {"client_id":"client-123","auth_token":"TOKEN-...","capabilities":["events","commands"]}

2) ACK example
Header: {"version":"2025","type":"ACK","seq":2,"ts":1700000000500}
Body: {"status":"ok","server_time":1700000000500}

3) COMMAND example (binary payload allowed)
Header: {"version":"2025","type":"COMMAND","seq":10,"ts":1700000005000}
Body: {"id":"cmd-1","target":"device/led","action":"set","params":{"state":"on"}}

4) EVENT example
Header: {"version":"2025","type":"EVENT","seq":11,"ts":1700000006000}
Body: {"source":"device/thermostat","event_type":"temperature","data":{"value":22.5,"unit":"C"}}

5) ERROR example
Header: {"version":"2025","type":"ERROR","seq":12,"ts":1700000007000}
Body: {"code":4001,"message":"invalid_command","details":{"field":"action"}}
