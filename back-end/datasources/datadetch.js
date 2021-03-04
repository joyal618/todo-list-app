const { RESTDataSource } = require('apollo-datasource-rest');

class TaskAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'localhost:4000/';
  }
  async getAllQuakes() {

      
    const query = ""
    const response = await this.get(query);
    return Array.isArray(response)
        ? response.map(task => this.taskReducer(task))
        : [];
}
taskReducer(task){
    return {
        
        id: task.id,
        title: task.title,
        description: task.description
        // time: `${timestamp}`,
        // id: quake.id
    };
}
}