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

    cy.location().should((location) => {
      expect(location.toString()).to.eq("https://www.iglobal.co/auth/login");
    });
  });

  it("should go to manager signup", () => {
    cy.get("#signup").click();

    cy.location().should((location) => {
      expect(location.toString()).to.eq("https://www.iglobal.co/auth/signup");
    });
  });

  it("should type and search 'pizza'", () => {
    cy.get("#home-hero-search-input").should("be.visible").type("pizza");
    cy.get("#home-hero-search-button").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/united-states/search/pizza");
    });
  });

  it("should change the region to 'Argentina'", () => {
    cy.get(".custom-select-trigger").click();

    cy.get("#argentina").click();

    cy.location().should((location) => {
      expect(location.search).to.eq("?country_iso=AR");
    });
  });
});
