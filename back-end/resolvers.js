module.exports = {
    Query: {
      tasks: (_, __, { dataSources }) =>
        dataSources.QuakeAPI.getAllTasks(),
      Task: (_, { id }, { dataSources }) =>
        dataSources.QuakeAPI.getQuakeById({ quakeId: id }),
        // user: (_, __, { dataSources }) => 
        // dataSources.UserAPI.getUsers(),
    //   me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
  };