import React, {  useState, useTransition } from "react";
import { useSuspenseQuery } from "@apollo/client";
import { GET_DOGS, GET_DOG_PHOTO } from "../graphql/queries";

//no loading prop as the component calling useSuspenseQuery always suspends when fetching data.
const SuspenseDogs = () => {
  const [isPending, startTransition] = useTransition(); //works as loading parameter
  const [selectedDog, setSelectedDog] = useState(null);

  const { data: allDogs } = useSuspenseQuery<any>(GET_DOGS);
  const { data,refetch } = useSuspenseQuery<any>(GET_DOG_PHOTO, {
    variables: { breed: selectedDog ?? "bulldog" },
    returnPartialData: true,
  });

  const onDogSelected = (e: any) => {
    setSelectedDog(e.target.value);
  };

  console.log("isPending", isPending);

  function handleRefetch() {
    startTransition(() => {
      refetch();
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Bulldog</h1>
      <img height="300" width="450" src={data.dog.displayImage} alt="data" />
      {isPending && <p>Pending...</p>}
      <select
        name="dog"
        onChange={(e: any) => startTransition(() => onDogSelected(e))} //Updating state without suspending
      >
        {allDogs?.dogs.map((dog: any) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      <button onClick={handleRefetch}>Refetch!</button>
    </div>
  );
};

export default SuspenseDogs;
