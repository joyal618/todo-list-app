// import { useQuery } from '@apollo/client';
// import { GET_TODOS } from '../../graphQL/queries'
import { ADD_TODO } from '../../graphQL/mutations'
import { GET_TODO_DATA, GET_TODO_DATA_SUCCESS, GET_TODO_DATA_FAILURE } from './todoTypes'
import { ADD_TODO_DATA, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from './todoTypes'
import { client } from '../../client'
import { gql } from '@apollo/client';
import { title } from 'process';

export const addTodo = (title:any, description:any) =>{
  console.log("addTodo")
  return (dispatch : any) => {
    client
    .mutate({
      mutation: ADD_TODO,
      variables: { 
        title: title,
        description: description
      },
    })
    .then((data) => {
      console.log(data)
      dispatch(addTaskRequest)

      client
        .query({
          query: gql`
            query {
              getTasks {
                id
                title
                description
              }
            }
        `
      })
      .then(result => {
        // response.data is the users
        const todos = result;
        console.log("todos")
        console.log(todos.data.getTasks)
        dispatch(addTaskSuccess(todos.data.getTasks))
      })
      .catch(error => {
        console.debug("catch ERROR");
        // error.message is the error message
        dispatch(addTaskFailure(error.message))
      })
    })

    .catch((error) => {
      console.log(error)
    })
      
    // const { loading, error, data } = useQuery(GET_TODOS) as any;
    }
}


export const fetchData = () => {
  console.log("Action done")
  return (dispatch: any) => {
    dispatch(fetchTasksRequest)
    // const { loading, error, data } = useQuery(GET_TODOS) as any;
    client
      .query({
        query: gql`
          query {
            getTasks {
              id
              title
              description
              createdDate
              completedDate
            }
          }
      `
    })
    .then(result => {
      // response.data is the users
      const todos = result;
      console.log("todos")
      console.log({todos})
      console.log(todos.data.getTasks)
      dispatch(fetchTasksSuccess(todos.data.getTasks))
    })
    .catch(error => {
      // error.message is the error message
      dispatch(fetchTasksFailure(error.message))
    })
  }
}


export const fetchTasksRequest = () => {
  console.log("called fetchTasksRequest")
  return {
    type: GET_TODO_DATA
  }
}

export const fetchTasksSuccess = (todos:any) => {
  console.log("called fetchTasksSuccess")
  return {
    type: GET_TODO_DATA_SUCCESS,
    payload: todos
  }
}

export const fetchTasksFailure = (error:any) => {
  console.log("called fetchTasksFailure")
  return {
    type: GET_TODO_DATA_FAILURE,
    payload: error
  }
}


export const addTaskRequest = () => {
  console.log("called addTaskRequest")
  return {
    type: ADD_TODO_DATA,
  }
}

export const addTaskSuccess = (todos:any) => {
  console.log("called addTaskSuccess")
  return {
    type: ADD_TODO_SUCCESS,
    payload: todos
  }
}

export const addTaskFailure = (error:any) => {
  console.log("called addTaskFailure")
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  }
}





