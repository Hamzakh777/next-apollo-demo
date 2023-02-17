import { BaseButton } from "./index";

const BUTTON_TEXT = 'button_text';

describe("<BaseButton />", () => {
  it("should render and display expected content", () => {
    cy.mount(<BaseButton onClick={() => {}}>{BUTTON_TEXT}</BaseButton>);

    cy.get("button").contains(BUTTON_TEXT);
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
