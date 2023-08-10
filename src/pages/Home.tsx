import React from "react";
import { GET_LOCATIONS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log("data", data);

  return (
    <>
      <div>
        {error ? (
          <p>Error in fetching</p>
        ) : loading ? (
          <p>loading...</p>
        ) : (
          <div>
            {data.locations.map((item: any) => (
              <div style={{ borderBottom: "1px solid black" }} key={item.id}>
                <h5>{item.name}</h5>
                <img
                  width="400"
                  height="250"
                  src={item.photo}
                  alt="location images"
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
