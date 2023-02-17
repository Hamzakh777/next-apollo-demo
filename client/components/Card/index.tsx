import { StyledCard, StyledCardBorderTop, StyledCardImage } from "./Card.styles"

interface CardProps {

}

export const Card = (props: CardProps) => {
    return <StyledCard>
        <StyledCardBorderTop />
        <StyledCardImage />
        <span>Meow</span>
    </StyledCard>
} 