import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client: any = new ApolloClient({
  // uri: "https://flyby-router-demo.herokuapp.com/",           //locations (Home.tsx)
  //   uri: "https://71z1g.sse.codesandbox.io/", //dogs (Dogs.tsx)
  uri: "https://sxewr.sse.codesandbox.io/", //dogs (Dogs.tsx)
  cache: new InMemoryCache(),
  //   defaultOptions: {
  //     watchQuery: {
  //       nextFetchPolicy: 'cache-only',
  //     },
  //   },
});
