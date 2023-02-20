import { gql, useQuery } from "@apollo/client";
import { BaseButton } from "components/Base";
import { Card } from "components/Card";
import { useCallback } from "react";
import { StyledButtonWrapper, StyledItems } from "./List.styles";
import { Query } from "../../../core/src/__generated__/client/graphql";

interface ListProps {}

const GET_USERS = gql(`
  query Query($first: Int, $after: String) {
    users(first: $first, after: $after) {
      edges {
        cursor
        node {
          fullName
          address
          emailAddress
          phoneNumber
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export const List = () => {
  const { loading, data, fetchMore } = useQuery<Query>(GET_USERS, {
    variables: { first: 20 },
    notifyOnNetworkStatusChange: true,
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        first: 20,
        after: data?.users?.pageInfo?.endCursor,
      },
    });
  };
  
  const isNextPageAvailable = data?.users?.pageInfo?.hasNextPage;

  return (
    <div>
      <StyledItems>
        {!!data &&
          !!data.users &&
          !!data.users.edges &&
          data?.users?.edges.map(
            (item, index) =>
              <Card user={item!.node as any} key={index} />
          )}
      </StyledItems>
      <StyledButtonWrapper>
        {isNextPageAvailable && (
          <BaseButton onClick={handleLoadMore} disabled={loading}>Load More</BaseButton>
        )}
      </StyledButtonWrapper>
    </div>
  );
};
