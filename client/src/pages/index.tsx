import { client } from "../../lib/apollo-client";
import { StyledComponentsRegistry } from "../../lib/registry";
import { BaseContainer } from "components";
import { ApolloProvider } from "@apollo/client";
import { List } from "components/List";

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <StyledComponentsRegistry>
          <BaseContainer>
            <List />
          </BaseContainer>
        </StyledComponentsRegistry>
      </ApolloProvider>
    </main>
  );
}
