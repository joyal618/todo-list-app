const { gql } = require('apollo-server');


module.exports = gql`
    scalar Date

    type Task {
        id : ID!
        title : String!
        description : String!
        createdDate : Date
        completedDate : Date

    }  

    type Query {
        getTasks : [Task]!,

        getTaskById(
            id: ID!
        ): [Task]!
    }

    type Mutation {
        addTask(
            title:String! 
            description:String!
        ): Task! 

        updateTask(
            id : ID!
            title:String    
            description:String
            
        ): String

        markAsCompleted(
            id: ID!
        ): String

        removeTask(
            id:ID! 
        ): String

    }
`;