import { GET_TODO_DATA, GET_TODO_DATA_SUCCESS, GET_TODO_DATA_FAILURE } from './todoTypes'
import { ADD_TODO_DATA, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from './todoTypes'

interface TaskData{
  loading: boolean,
  todos: Array<String>,
  error: String,
};

const initialState: TaskData = {
    loading : false,
    todos : [],
    error : ''
  };
  
const rootReducer = (state = initialState, action:any) => {
  console.log(action.type)
  console.log(state)
  switch (action.type) {
    
    case GET_TODO_DATA:
      console.log("GET_TODO_DATA")
      return {
        ...state,
        loading: true
      }
      
    case GET_TODO_DATA_SUCCESS:
      console.log("GET_TODO_DATA_SUCCESS")
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: ''
      }
    case GET_TODO_DATA_FAILURE:
      console.log("GET_TODO_DATA_FAILURE")
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload
      }
    
      case ADD_TODO_DATA:
      console.log("ADD_TODO_DATA")
      return {
        ...state,
        loading: true
      }
      
    case ADD_TODO_SUCCESS:
      console.log("ADD_TODO_SUCCESS")
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: ''
      }
    case ADD_TODO_FAILURE:
      console.log("ADD_TODO_FAILURE")
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload
      }
    default: return state
  }
  
}

export default rootReducer;
  
