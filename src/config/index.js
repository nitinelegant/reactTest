import { ApolloClient, InMemoryCache } from "@apollo/client";
import { baseUrl } from "../api/index";

const defaultOptions: DefaultOptions = {
  watchQuery: { fetchPolicy: "no-cache", errorPolicy: "ignore" },
  query: { fetchPolicy: "no-cache", errorPolicy: "all" },
};

export const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
