const { ApolloServer } = require('apollo-server');
require('./db');
const typeDefs = require('./schema');


// const Sequelize = require('sequelize')
// const { createTasks } = require('./models/tasks') 

const server = new ApolloServer({ typeDefs });
// The `listen` method launches a web server.


server.listen().then(() => {
  console.log(`🚀  Server ready `);

});