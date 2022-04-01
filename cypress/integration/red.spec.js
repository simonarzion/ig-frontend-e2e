// /// <reference types="cypress" />

// // https://on.cypress.io/introduction-to-cypress

describe("red tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login?lang=en");
  });

  it("should show login errors", () => {
    cy.get("#login_button").click();
  });
});
