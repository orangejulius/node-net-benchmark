#!/bin/bash -ex

# launch servers
echo "launching express..."
node express_server &
express_server_pid=$!

echo "launching fastify..."
node fastify_server &
fastify_server_pid=$!

echo "launching grpc..."
node grpc_server &
grpc_server_pid=$!

echo "running benchmark..."
node test.js

kill $express_server_pid $fastify_server_pid $grpc_server_pid
