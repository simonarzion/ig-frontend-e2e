Cypress.Commands.add('register', () => {
    cy.get('#name').type('iglobal').should('have.value', 'iglobal');
    cy.get('#email').type('iglobal111@iglobal.com').should('have.value', 'iglobal111@iglobal.com');
    cy.get('#password').type('iglobal123').should('have.value', 'iglobal123');
    cy.get('#password2').type('iglobal123').should('have.value', 'iglobal123');
    cy.get('#phone').type('123456789').should('have.value', '+54 (12) 3456789');
});

Cypress.Commands.add('login', () => {
    cy.get('#email')
        .type('simon.villaverde@arzion.com')
        .should('have.value', 'simon.villaverde@arzion.com');
    cy.get('#password').type('test').should('have.value', 'test');
});

Cypress.Commands.add('registerBusiness', () => {
    cy.get('#name').type('Arzion');
    cy.get('#country_iso').select('Argentina');
    cy.get('#state').select('Buenos Aires');

    cy.get('#city').type('La plata');
    cy.get('#suggestion-0').click();

    cy.get('#address1').type('calle 57 632');
    cy.get('#zip_code').type('1900');
    cy.get('#phone').type('123456789');
    cy.get('#email').type('iglobal@iglobal.com');
    cy.get('#website').type('iglobal.co');

    cy.get('#category').type('restaurantes');
    cy.get('#suggestion-0').click();

    cy.get('#business_registration_continue_button').click();
});
