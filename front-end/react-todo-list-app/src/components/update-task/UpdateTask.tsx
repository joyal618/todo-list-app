import { gql, useQuery,useMutation } from "@apollo/client";

export const ADD_TASK = gql`
  mutation register (
      $title:String!,
      $description:String!,
){
    register(title:$title,description:$description) {

      title
      description
    }
  }
`;


export const DELETE_TASK = gql`
  mutation delete (
      $id:ID!
    
){
    delete(id:$id)
  }
`;

export const COMPLETED_TASK = gql`

mutation completedTask(
    $id:ID!
    
){
    completedTask(id:$id)
}
`;
  export const UPDATED_TASK=gql`

  mutation updateTask(
    $id:ID!
    $title:String!
    $description:String!
  ){
    update(id:$id,title:$title,description:$description)
  }
`;