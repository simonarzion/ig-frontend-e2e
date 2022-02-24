Cypress.Commands.add('register', () => {
    cy.fixture('user').then((user) => {
        console.log('user', user);
        cy.get('#name').type(user.username).should('have.value', user.username);
        cy.get('#email').type(user.email).should('have.value', user.email);
        cy.get('#password').type(user.password).should('have.value', user.password);
        cy.get('#password2').type(user.password).should('have.value', user.password);
        cy.get('#phone').type(user.phone);
    });
});

Cypress.Commands.add('login', () => {
    cy.get('#email')
        .type('simon.villaverde@arzion.com')
        .should('have.value', 'simon.villaverde@arzion.com');
    cy.get('#password').type('test').should('have.value', 'test');
    cy.get('#login_button').click();
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
