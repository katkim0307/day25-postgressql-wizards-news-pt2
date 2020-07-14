// SET UP THE NODE-POSTGRES DRIVER
const pg = require ('pg');
const postgresURL = 'postgres://localhost/__wnews__';
const client = new pg.Client(postgresURL);

// CONNECT TO THE 'postgres' SERVER
client.connect();

// MAKE THE CLIENT AVAILABLE AS A NODE MODULE
module.exports = client;