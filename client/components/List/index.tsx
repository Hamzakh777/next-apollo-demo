import { gql, useQuery } from "@apollo/client";
import { BaseButton } from "components/Base";
import { Card } from "components/Card";
import { useCallback } from "react";
import { StyledButtonWrapper, StyledItems } from "./List.styles";

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
  const { loading, data, fetchMore } = useQuery(
    GET_USERS as any,
    // variables are also typed!
    { 
        variables: { first: 20 },
        notifyOnNetworkStatusChange: true, 
    }
  );

  const handleLoadMore = useCallback(() => {
    fetchMore({
        variables: {
            first: 20,
            after: data.users.pageInfo.endCursor,
        },
    })
  }, [])

  return (
    <div>
      <StyledItems>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </StyledItems>
      <StyledButtonWrapper>
        <BaseButton>
            Load More
        </BaseButton>
      </StyledButtonWrapper>
    </div>
  );
};
