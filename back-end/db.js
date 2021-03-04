const Sequelize = require('sequelize')
const { createTasks } = require('./models/task') 

console.log("hai")
// exports.newConnection = () => {
    const connection = new Sequelize('graphQL_db', 'dxuser', 'Dexlock@123', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
      });
    
    createTasks(connection, Sequelize);
    
     connection.authenticate()
     .then(() => {
        
         console.log(' Database Connection has been established successfully.');
     })
     .catch(err => {
         console.error('Unable to connect to the database:', err);
     });

  var User = connection.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  connection.sync().then(function() {

    return User.create({
      username: 'Joyal',
      birthday: new Date(1998, 01, 06)
    });
  }).then(function(jane) {
    console.log(jane.get({
      plain: true
    }));
  });
      
    





// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('graphQL_db', 'root', 'Dexlock@2021',{
//     dialect:"mysql",
//     host: 'localhost',
//             port: 3306
// });

// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });

// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });
