import {
  StyledCard,
  StyledCardBorderTop,
  StyledCardImage,
} from "./Card.styles";
import { User } from "../../../core/src/__generated__/client/graphql";

interface CardProps {
  user: User;
}

export const Card = ({ user }: CardProps) => {
  return (
    <StyledCard>
      <StyledCardBorderTop />
      <StyledCardImage />
      <span>{user.fullName}</span>
      <p>
        {user.emailAddress}
      </p>
    </StyledCard>
  );
};
