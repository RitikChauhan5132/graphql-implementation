import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export { ADD_TODO };
