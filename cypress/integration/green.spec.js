// /// <reference types="cypress" />

// // https://on.cypress.io/introduction-to-cypress

describe('green tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login?lang=en');
    });

    it('should registrate a user', () => {
        // cy get to get a dom element, the query works as js querySelector & click() for click event
        cy.get('#link_to_register').click();
        // check if url is user registration
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/auth/signup');
        });

        // type on inputs
        cy.register();

        // submit form
        cy.get('#signup_button').click();

        // validate code
    });

    it('should login a user', () => {
        // type on inputs
        cy.get('#email')
            .type('simon.villaverde@arzion.com')
            .should('have.value', 'simon.villaverde@arzion.com');
        cy.get('#password').type('test').should('have.value', 'test');

        cy.get('#login_button').click();

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business');
        });

        cy.get('#business_add').click();

        cy.registerBusiness();

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business/plans');
        });

        cy.get('#plan_button-2').click();

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business/payment');
        });
    });
});
