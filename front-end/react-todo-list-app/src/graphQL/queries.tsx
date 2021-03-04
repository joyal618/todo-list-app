import { gql } from '@apollo/client';

export const GET_TODOS = gql`
query{
  getTasks{
    id
    title
    description
    createdDate
    completedDate
  }
}
`;

