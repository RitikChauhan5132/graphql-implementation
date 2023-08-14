import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHARACTER, ADD_TODO } from "../graphql/mutations";
import { GET_DOGS } from "../graphql/queries";

const AddCharacter = () => {
  const [inputValue, setInputValue] = useState<any>("");

  const [addToDo, { data: mutationData }] = useMutation(ADD_TODO);
  const [addCharacter, { loading, error }] = useMutation(ADD_CHARACTER, {
    refetchQueries: [
      GET_DOGS, // DocumentNode object parsed with gql
      // "GetComments", // Query name
    ],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToDo({ variables: { type: "inputValue@gmail.com" } });
    addCharacter({
      variables: { name: "Ritik", status: "Active", species: "Humans" },
    });
  };
  return (
    <div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
      >
        <input
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
        />
        <button onClick={(e: any) => handleSubmit(e)} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddCharacter;
