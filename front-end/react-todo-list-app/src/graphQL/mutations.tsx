import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation addTask(
      $title: String!, 
      $description: String!,
      ){
        addTask(title: $title, description: $description) {
          id
          title
          description
        }
    }
`;

export const DELETE_TODO = gql`
  mutation removeTask(
      $id:ID!
      ){
        removeTask(id: $id,) 
    }
`;

export const UPDATE_TODO = gql`
  mutation updateTask(
      $id:ID!
      $title: String!, 
      $description: String!,
      ){
        updateTask(id: $id,title: $title,description: $description)
    }
`;

export const COMPLETED_TODO = gql`
  mutation markAsCompleted(
      $id:ID!
      ){
        markAsCompleted(id: $id,) 
    }
`;