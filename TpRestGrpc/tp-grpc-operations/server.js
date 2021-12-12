const grpc =require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("operation.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const operationPackage = grpcObject.operationPackage;

const server = new grpc.Server();

server.bind('localhost:9000',grpc.ServerCredentials.createInsecure());
server.addService(operationPackage.Operation.service, {
    'addition' : addition,
    'soustraction': soustraction,
    'multiplication': multiplication,
    'division':division
});

server.start();

const results = [];

function addition(call,callback) {
    const result = {
        'result' : (call.request.a + call.request.b)
    }
    results.push(result);
    callback(null,result);
}

function soustraction(call,callback) {
    const result = {
        'result' : (call.request.a - call.request.b)
    }
    results.push(result);
    callback(null,result);
}

function multiplication(call,callback) {
    const result = {
        'result' : (call.request.a * call.request.b)
    }
    results.push(result);
    callback(null,result);
}

function division(call,callback) {
    const result = {
        'result' : (call.request.a / call.request.b)
    }
    results.push(result);
    callback(null,result);
}