Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("initial tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/");
  });
  it("should visit home", () => {
    cy.get("#home-hero-tagline").should("be.visible");
  });

  it("should go to manager login", () => {
    cy.get("#login").click();

    cy.url().should("eq", "http://localhost:3000/auth/login");
  });

  it("should go to manager signup", () => {
    cy.get("#signup").click();

    cy.url().should("eq", "http://localhost:3000/auth/signup");
  });
});
