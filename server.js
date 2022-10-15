const Hapi = require('@hapi/hapi');
const {postUser,getAlluser,getUserById,deleteUserById,updateUserById} = require("./services/userDetails")

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


// Post api for creating users
server.route({
    method: 'POST',
    path: '/create/users',
    handler: postUser
});

// Get all data 
server.route({
    method: 'GET',
    path: '/get/all/data',
    handler: getAlluser
})

// Get user by id
server.route({
    method: 'GET',
    path: '/get/user/{id}',
    handler: getUserById
})

// Update user by Id
server.route({
    method: 'PUT',
    path: '/update/user/{id}',
    handler: updateUserById
})

// Delete user by Id
server.route({
    method: 'DELETE',
    path: '/delete/user/{id}',
    handler: deleteUserById
})

const start = async() => {
    await server.start();
    console.log('Server running on %s', server.info.uri);

}
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

start();
    



