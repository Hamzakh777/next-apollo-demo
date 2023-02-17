import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 5rem 0;

  @media (max-width: 756px) {
    padding: 3rem 0;
  }

  @media (max-width: 968px) {
    padding: 2rem 0;
  }
`;
