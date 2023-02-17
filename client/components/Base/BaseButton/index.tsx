import { ReactNode } from "react";
import { StyledButton } from "./BaseButton.styles";

interface BaseButtonProps {
  children: ReactNode;
  onClick: () => void
  disabled?: boolean
}

export const BaseButton = ({ children, onClick, disabled = false }: BaseButtonProps) => {
  return <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>;
};
