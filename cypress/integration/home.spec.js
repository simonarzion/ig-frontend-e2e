Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Initial tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/");
  });
  it("Should visit home", () => {
    cy.get("#home-hero-search-input").should("be.visible");
  });

  it("Should go to manager login", () => {
    cy.get("#login").click();
    cy.url().should("include", "/auth/login");
  });

  it("Should go to manager signup", () => {
    cy.get("#signup").click();
    cy.url().should("include", "/auth/signup");
  });

  it("Input search redirect correctly", () => {
    cy.get("#home-hero-search-input")
      .type("Pizza")
      .should('have.value', 'Pizza');
  });
});
