describe("login errors", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login?lang=en");
  });

  it("should throw email or password incorrect error", () => {
    cy.loginFakeCredentials();

    cy.get("#InvalidCredentialsError").should("be.visible");
  });

  it("should throw inactive account error", () => {
    cy.loginInactiveAccount();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/auth/validator");
    });
  });
});
