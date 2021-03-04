const {Task} = require('../models');
const { GraphQLScalarType, Kind } = require('graphql');
const dayjs = require("dayjs");

module.exports = {
    
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        serialize(value) {   
            //console.log(dayjs(value))
            return dayjs(value).format(); // Convert outgoing Date to integer for JSON
        },
        parseValue(value) {
            //console.log("parseValue"+new Date(value));
            return new Date(value); // Convert incoming integer to Date
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // Convert hard-coded AST string to type expected by parseValue
            }
            return null; // Invalid hard-coded value (not an integer)
        },
        }),

    Query: {
        getTasks: async () => {
          try {
              const tasks = await Task.findAll()
              //console.log(tasks)
              return tasks;            
          }
          
          catch (err) {
              console.log(err);
          }

        },
        getTaskById : async (_, args) => {
            try{
                const {id} = args;
                const task = await Task.findAll({
                    where: {
                        id:id
                    }
                })
                console.log(task)
                console.log(typeof task)
                return task;
            }
            catch (err) {
                console.log(err);
            }
        }

    },

    Mutation : {
        addTask: async (_, args) =>{
            const {title, description} = args;
            try {
                const currentTime = new Date();
                const currentOffset = currentTime.getTimezoneOffset();
                const ISTOffset = 330;   // IST offset UTC +5:30 
                const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
                console.log("time:"+ISTTime)
                console.log("String time: "+ISTTime.toString())
                const created = ISTTime
                const task = await Task.create({
                    title: title, 
                    description: description, 
                    createdDate: created, 
                    
                })
                //console.log(task)
                //console.log(task)
                return task;
            }
            catch (err) {
                console.log(err);
            }
        },

        removeTask: async (_, args) =>{
            const {id} = args;
            try {
                const deleted = await Task.destroy({
                    where: {
                      id: id
                    }
                  });
                console.log(deleted)
                if(deleted===1){
                    //console.log("Deleted")
                    return "deleted"
                }
                else{
                    //console.log("No such id exists")
                    return "No such id exists"
                }
            }
            catch (err) {
                console.log(err)
            }
            
        },

        updateTask: async (_, args) =>{
            const {id, title, description} = args;
            try{
                const updated = await Task.update({ 
                    title: title,
                    description:description
                }, 
                {
                where: {id: id}
                });

                //console.log(updated)
                //console.log(typeof updated)
                if(JSON.stringify(updated) === JSON.stringify([1])){
                    return "Updated"
                }
                else{
                    return "Id does not exists"
                }
            }
            catch (err) {
                console.log(err)
            }
        },

        markAsCompleted: async (_, args) =>{
            try{
                const {id} = args;
                const date = new Date()
                const completed = await Task.update({
                    completedDate: date
                },
                {
                    where: {id: id}
                })
                // return completed;
                console.log(completed)
                console.log(typeof completed)
                console.log(typeof [1])
                if( JSON.stringify(completed) === JSON.stringify([1]) ){
                    return "Marked as completed"
                }
                else{
                    //console.log("No such id exists")
                    return "No such id exists"
                }
            }
            catch (err){
                console.log("No such id exists")
            }
        }

    }
  };