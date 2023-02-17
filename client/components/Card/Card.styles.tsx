import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30%;
  flex-grow: 1;
  flex-shrink: 0;
  height: 254px;
  background: #3405a3;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
  color: #ffffff;
  text-align: center;

  span {
    font-weight: 600;
    color: white;
    display: block;
    padding-top: 10px;
    font-size: 16px;
  }

  @media (max-width: 756px) {
    width: 100%;
  }

  @media (max-width: 968px) {
    width: 48%;
  }
`;

export const StyledCardBorderTop = styled.div`
  width: 60%;
  height: 3%;
  background: #6b64f3;
  margin: auto;
  border-radius: 0px 0px 15px 15px;
`;

export const StyledCardImage = styled.div`
  width: 70px;
  height: 80px;
  background: #6b64f3;
  border-radius: 15px;
  margin: auto;
  margin-top: 25px;
`;
