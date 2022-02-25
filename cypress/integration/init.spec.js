describe('generate fake data', () => {
    it('should generate a user', () => {
        const user = {
            username: chance.name(),
            email: chance.email(),
            password: chance.string(),
            phone: chance.phone(),
        };
        cy.writeFile('cypress/fixtures/user.json', user);
    });

    it('should generate invalid credentials user', () => {
        const user = {
            email: chance.email(),
            password: chance.string(),
        };
        cy.writeFile('cypress/fixtures/userInvalidCredentials.json', user);
    });
});
