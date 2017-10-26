const Benchmark = require('benchmark');
const request = require('request');

const suite = new Benchmark.Suite

var PROTO_PATH = __dirname + '/helloworld.proto';
var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;
var grpc_client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());

const requestOptions1 = {
  url: 'http://localhost:3000',
  forever: true
}

const requestOptions2 = {
  url: 'http://localhost:3000/json',
  forever: true,
  json: true
}

const requestOptions3 = {
  url: 'http://localhost:3000/bigjson',
  forever: true,
  json: true
}

const requestOptions4 = {
  url: 'http://localhost:3001',
  forever: true
}

const requestOptions5 = {
  url: 'http://localhost:3001/json',
  forever: true,
  json: true
}

const requestOptions6 = {
  url: 'http://localhost:3001/bigjson',
  forever: true,
  json: true
}
const requestOptions7 = {
  url: 'http://localhost:3102/-71.15525/42.34458',
  forever: true,
  json: true
}

//suite.add('null', {
  //'defer': true,
  //'fn': function(deferred) {
    //deferred.resolve();
  //}
//})
//suite.add('setImmediate', {
  //'defer': true,
  //'fn': function(deferred) {
    //setImmediate(deferred.resolve);
  //}
//})
suite.add('express hello world', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions1, (err, response, result) => {
      deferred.resolve();
    });
  }
})
suite.add('express json', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions2, (err, response, result) => {
      deferred.resolve();
    });
  }
})
suite.add('express big json', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions3, (err, response, result) => {
      deferred.resolve();
    });
  }
})
suite.add('fastify hello world', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions4, (err, response, result) => {
      deferred.resolve();
    });
  }
})
suite.add('fastify json', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions5, (err, response, result) => {
      deferred.resolve();
    });
  }
})
suite.add('fastify big json', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions6, (err, response, result) => {
      deferred.resolve();
    });
  }
})

suite.add('grpc hello world', {
  'defer': true,
  'fn': function(deferred) {
    grpc_client.sayHello({name: 'world'}, function(err, response) {
      deferred.resolve()
    });
  }
})

suite.add('actual local PIP', {
  'defer': true,
  'fn': function(deferred) {
    request(requestOptions7, (err, response, result) => {
      deferred.resolve();
    });
  }
})

.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
})
// run async
.run({ 'async': true });
