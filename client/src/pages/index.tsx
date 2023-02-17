import Image from "next/image";
import { client } from "../../lib/apollo-client";
import { useEffect } from "react";
import { StyledComponentsRegistry } from "../../lib/registry";
import { Container } from "components";
import { createGlobalStyle } from "styled-components";
import { useQuery, ApolloProvider, gql } from "@apollo/client";
import { List } from "components/List";

export default function Home() {
  

  return (
    <main>
      <ApolloProvider client={client}>
        <StyledComponentsRegistry>
          <Container>
            <List />
          </Container>
        </StyledComponentsRegistry>
      </ApolloProvider>
    </main>
  );
}
