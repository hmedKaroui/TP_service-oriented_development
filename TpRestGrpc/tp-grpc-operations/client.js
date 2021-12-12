const grpc =require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("operation.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const operationPackage = grpcObject.operationPackage;


const client = new operationPackage.Operation('localhost:9000',grpc.credentials.createInsecure());

client.addition({
    'a': 5,
    'b':6
}, (err, response) => {
    console.log('5 + 6 received from Server ' + JSON.stringify(response));
})

client.soustraction({
    'a': 10,
    'b':3
}, (err, response) => {
    console.log('10 - 3 received from Server ' + JSON.stringify(response));
})

client.multiplication({
    'a': 2,
    'b':5
}, (err, response) => {
    console.log('5 * 2 from Server' + JSON.stringify(response));
})

client.division({
    'a': 25,
    'b':5
}, (err, response) => {
    console.log('25 / 5 received from Server' + JSON.stringify(response));
})