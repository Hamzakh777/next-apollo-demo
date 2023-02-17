import { ReactNode } from "react";
import { StyledContainer } from "./BaseContainer.styles";

interface ContainerProps {
  children: ReactNode;
}

export const BaseContainer = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
