import { ApolloClient, InMemoryCache } from "@apollo/client";

// https://faker-graphql.now.sh/graphql

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;