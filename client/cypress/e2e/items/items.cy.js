/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays a list of items', () => {
    cy.get('.card').should('have.length', 20);
  })

  it('Should fetch new items on click', () => {
    cy.get('button').click();
    cy.get('.card').should('have.length', 40);
  })
})
