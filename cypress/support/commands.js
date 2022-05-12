Cypress.Commands.add("modalSelectOption", (province_id, search) => {
  cy.get("[data-modal='modal-one']").should("be.visible").click();
  cy.get("#modal-select-states").select(1).should("have.value", province_id);
  cy.get("#autoComplete").type(search);
  cy.get("#autoComplete_list_1").should("be.visible");
  cy.get("#autoComplete_result_0").click();
  cy.get(".modal-change-button").click();
  cy.get("#home-hero-search-input").should("be.visible").type("pizza");
  cy.get("#home-hero-search-button").click();
});
