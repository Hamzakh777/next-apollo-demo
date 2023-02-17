import { ReactNode } from "react";
import { StyledButton } from "./BaseButton.styles";

interface BaseButtonProps {
  children: ReactNode;
}

export const BaseButton = ({ children }: BaseButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};
