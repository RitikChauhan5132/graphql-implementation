import { gql } from "@apollo/client";

// operationName: "AddTodo"
//$ is used to specify type

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const ADD_CHARACTER = gql`
  mutation AddCharacter($name: String!, $status: String!, $species: String!) {
    createCharacter(
      input: { name: $name, status: $status, species: $species }
    ) {
      character {
        id
        name
        status
        species
      }
    }
  }
`;

export { ADD_TODO, ADD_CHARACTER };
