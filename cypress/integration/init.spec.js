// Load and instantiate Chance
var chance = require('chance').Chance();

describe('generate fake data', () => {
    it('should generate fake user data', () => {
        const user = {
            username: chance.name(),
            email: chance.email(),
            password: chance.string(),
            phone: chance.phone(),
        };
        cy.writeFile('cypress/fixtures/user.json', user);
    });
});
