import "./ListTask.css"

import TodoItem from "../todo-items/TodoItem";

import React, { Fragment, useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';


import { ApolloClient, InMemoryCache } from '@apollo/client';





const GET_TODOS = gql`
  query {
    getTasks {
        id
        title
        description
        completedDate
    }
}`











function ListTask (){
  const [todos, setTodo] = useState<[]>()
  const { loading, error, data } = useQuery(GET_TODOS) as any;

  useEffect(() => {
    console.debug("USEEFFECT");
    console.log(data);
    if (data) {
      setTodo(data.getTasks)
    }

  }, [data])
  // const todos = [{title: 'new', id : 1}, {title: 'old', id: 2}]
  return (
    <div className="main-display">

      {todos && todos.map((task: any) => (
        <TodoItem key={task.id} todo={task} />


      ))}
    </div>)
}

export default ListTask;