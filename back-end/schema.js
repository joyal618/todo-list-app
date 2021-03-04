
const { gql } = require('apollo-server');

const typeDefs = gql`

type Task {
    id: ID!
    title: String
    description : String
    createdDate : String
    completedDate: String
}


type Query {
  tasks: [Task]!

}

`;

module.exports = typeDefs;