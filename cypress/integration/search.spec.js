Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("initial tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/");
  });

  it("should type and search 'pizza' in 'Alabama' with default region 'US'", () => {
    cy.modalSelectOption(3611, "re", "home-hero");

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/united-states/find/");
      expect(location.search).to.eq("?city_id=2255111&terms=pizza");
    });
  });

  it("should change the region to 'Argentina' and search for 'pizza'", () => {
    cy.get(".custom-select-trigger").click();

    cy.get("#argentina").click();

    cy.location().should((location) => {
      expect(location.search).to.eq("?country_iso=AR");
    });

    cy.modalSelectOption(103, "la pla", "home-hero");

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/argentina/find/");
      expect(location.search).to.eq("?city_id=1492012&terms=pizza");
    });
  });

  it("should use the search from search page", () => {
    cy.get(".custom-select-trigger").click();

    cy.visit(
      "http://localhost:5000/argentina/find/?city_id=1492012&terms=pizza"
    );

    cy.modalSelectOption(103, "la pla", "top-bar");

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/argentina/find/");
      expect(location.search).to.eq("?city_id=1492012&terms=pizza");
    });
  });
});
