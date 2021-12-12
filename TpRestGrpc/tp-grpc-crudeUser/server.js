const grpc =require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("user.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject.userPackage;

const server = new grpc.Server();

server.bind('localhost:9000',grpc.ServerCredentials.createInsecure());
server.addService(userPackage.User.service, {
    'createUser' : createUser,
    'readUser': readUser,
    'updateUser' : updateUser ,
    'deleteUser': deleteUser
});

server.start();

const users = [];

function createUser(call,callback) {
    const user = {
        'id' : users.length +1,
        'nom': call.request.nom,
        'prenom': call.request.prenom,
        'password': call.request.password,
    }
    users.push(user);
    callback(null,{users:users});
}

function readUser(call,callback) {
    var user = null;
    for (var i=0;i<users.length;i++) {
        if (users[i].id == call.request.id) {
            user = {
            'id' : users[i].id,
            'nom': users[i].nom,
            'prenom': users[i].prenom,
        }
    }
    }
callback(null,user);
}

function updateUser(call,callback) {
    for (var i=0;i<users.length;i++) {
        if (users[i].id == call.request.desiredId) {
            users[i].nom=call.request.modifiedNom;
            users[i].prenom=call.request.modifiedPrenom;
            users[i].password=call.request.modifiedPassword;
        }
    }
    callback(null,{users:users});
}

function deleteUser (call, callback) {
    var removedUser = null;
    for (var i=0;i<users.length;i++) {
        if (users[i].id == call.request.id) {
            removedUser= users[i];
        }
    }
    users.splice(users.indexOf(removedUser), 1);
    callback(null,{users:users});
}