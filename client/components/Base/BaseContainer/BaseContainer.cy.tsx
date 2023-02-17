import { BaseContainer } from "./index";

const TEXT = 'text';

describe("<BaseButton />", () => {
  it("should render and display expected content", () => {
    cy.mount(<BaseContainer>{TEXT}</BaseContainer>);

    cy.get("div").contains(TEXT);
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
