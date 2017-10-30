# Node.js Network Bechmarks

This is a small test suite to benchmark various network protocols and servers.

Both Express and Fastify are tested over HTTP.

For each server, performance of sending a small text response, serializing a small JSON object, and serializing a large JSON object are tested.

Additionally, sending a small text response over gRPC is tested.

Run the tests with

```
bash test.sh
```
