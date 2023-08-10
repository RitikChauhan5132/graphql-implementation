import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../graphql/mutations";

const AddCharacter = () => {
  const [inputValue, setInputValue] = useState<any>("");

  const [addToDo, { data: mutationData }] = useMutation(ADD_TODO);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToDo({ variables: { type: "inputValue@gmail.com" } });
  };
  return (
    <div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
        //   addToDo({ variables: { id: 322322, type: "inputValue" } });
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
