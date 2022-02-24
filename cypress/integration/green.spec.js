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

    it('should login a user and create a business', () => {
        // type on inputs
        cy.login();

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

        cy.visit('http://localhost:3000/business/update');

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business/update');
        });
    });

    it('should login a user and update a business', () => {
        // type on inputs
        cy.login();

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business');
        });

        cy.get('#update_button-0').click();

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/business/update');
        });

        cy.get('#business_update_button').click();
    });
});
