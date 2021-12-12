const grpc =require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("user.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject.userPackage;


const client = new userPackage.User('localhost:9000',grpc.credentials.createInsecure());

client.deleteUser({
    'id' : '2',
}, (err, response) => {
    console.log('Liste des users retournées aprés delete ' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})

client.updateUser({
    'desiredId' : '2',
    'modifiedNom' : 'Hsairi',
    'modifiedPrenom' : 'Wael',
    'modifiedPassword' : '12569jk'
}, (err, response) => {
    console.log('Liste des users retournées aprés modification ' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})

client.readUser({
    'id' : '2' ,
}, (err, response) => {
    console.log('Reading user id =2 ' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})

client.createUser({
    'id' : '3',
    'nom': 'Guezmir',
    'prenom': 'Majd',
    'password': '1288ehtl'
}, (err, response) => {
    console.log('Creation du troisiéme user, puis liste des users retournées ' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})

client.createUser({
    'id' : '2',
    'nom': 'Guezmir',
    'prenom': 'Mohamed Omar',
    'password': '12548ehtl'
}, (err, response) => {
    console.log('Creation du deuxiéme user, puis liste des users retournées ' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})

client.createUser({
    'id' : '1',
    'nom': 'Karoui',
    'prenom': 'Ahmed',
    'password': 'balblabla125'
}, (err, response) => {
    console.log('Creation du premier user, puis liste des users retournées' + JSON.stringify(response));
    console.log('--------------------------------------------------------------------------------------------');
})



