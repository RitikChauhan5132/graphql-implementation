import { InMemoryCache, ApolloClient } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// const restLink = new RestLink({ uri: "https://swapi.dev/api/" });
const restLink = new RestLink({
  uri: "https://swapi.dev/api/",
  // endpoints: { v1: "api.com/v1", v2: "api.com/v2" },
});

export const client: any = new ApolloClient({
  // uri: "https://flyby-router-demo.herokuapp.com/",           //locations (Home.tsx)
  // uri: "https://71z1g.sse.codesandbox.io/", //dogs (Dogs.tsx)
  // uri: "https://sxewr.sse.codesandbox.io/",     //mutations (Dogs.tsx)
  link: restLink, //rest api
  cache: new InMemoryCache(),
  //   defaultOptions: {
  //     watchQuery: {
  //       nextFetchPolicy: 'cache-only',
  //     },
  //   },
});
