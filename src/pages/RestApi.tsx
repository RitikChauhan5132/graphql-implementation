import React, { useState } from "react";
import { client } from "../graphql/client";
import { query } from "../graphql/queries";

const RestApi = () => {
  const [responseData, setResponseData] = useState<any>("");
  const resp = client.query({ query }).then((response: any) => {
    return setResponseData(response.data.person.name);
  });
  console.log("responseData", responseData);

  return (
    <div>
      <h1>{responseData}</h1>
    </div>
  );
};

export default RestApi;
