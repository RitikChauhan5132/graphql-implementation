import React, { useState } from "react";
import { useQuery, NetworkStatus, useLazyQuery } from "@apollo/client";
import { GET_DOGS, GET_DOG_PHOTO } from "../graphql/queries";

const Dogs = () => {
  const [selectedDog, setSelectedDog] = useState(null);

  const { data: allDogs } = useQuery(GET_DOGS);
  const {
    data,
    previousData,
    refetch,
    networkStatus, //it gives diff net status like 1 for loading,8 for error
    loading,
    startPolling, //custom polling
    stopPolling,
  } = useQuery(GET_DOG_PHOTO, {
    variables: { breed: selectedDog }, //payload is send in variables with key value pair
    nextFetchPolicy: "cache-first",
    // pollInterval: 500, //calling api after every 0.5 s
  });
  const [getDog, { data: bullDogData, loading: bullDogLoading }] = useLazyQuery(
    GET_DOG_PHOTO,
    {
      //   fetchPolicy: "network-only", //it will don't allow cache
      //   nextFetchPolicy: "cache-first",    //to allow cache
    }
  );

  const onDogSelected = (e: any) => {
    setSelectedDog(e.target.value);
  };

  console.log("previousData", previousData); //undefined during first fetching

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
      <select name="dog" onChange={(e: any) => onDogSelected(e)}>
        {allDogs?.dogs.map((dog: any) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Get Bulldog
      </button>
      {bullDogLoading ? (
        <p>loading bulldog...</p>
      ) : (
        bullDogData?.dog && (
          <img
            height="300"
            width="450"
            src={bullDogData.dog.displayImage}
            alt="bullDogData"
          />
        )
      )}
      {networkStatus === NetworkStatus.refetch ? (
        <p>refetching...</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        data?.dog && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={data?.dog?.displayImage}
              height="300"
              width="450"
              alt="dog"
            />
            <button onClick={() => refetch()}>Refetch!</button>
            {/* <button
              onClick={() =>
                refetch({
                  breed: "germanshepherd", // Always refetches a dalmatian instead of original breed
                })
              }
            >
              Refetch!
            </button> */}
          </div>
        )
      )}

      <button onClick={() => startPolling(500)}>start Polling</button>
      <button onClick={() => stopPolling()}>Stop Polling</button>
    </div>
  );
};

export default Dogs;
