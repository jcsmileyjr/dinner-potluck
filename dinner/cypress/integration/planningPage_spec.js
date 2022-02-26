describe("User can update the 'Example' potluck via the 'Upcoming Events' section", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/dinner-potluck');
        cy.contains('Start').click();
        cy.contains('Example').click();
      })
    
    it('should show all intended sections', ()=> {
        cy.contains('Example Potluck');
        cy.contains('Event Code: 123');
        cy.contains('Menu');
    });
    
    it('should allow user to update the potluck with "I want this" button', ()=> {
        cy.contains('I want this').click();
        cy.get('input[name="personName"]')
            .type('JC')
            .should('have.value', 'JC');
        cy.contains('Confirm').click();
        cy.contains('JC');
        cy.contains('Done').click();
        cy.contains("An app to crowdsource planning large multifamily meals.");
    });

    it('should allow the user to update with the "Write in your meal" button', ()=> {
        cy.contains('Write in your meal').click();
        cy.get('input[name="personName"]')
            .type('Bobby')
            .should('have.value', 'Bobby');
        cy.get('input[name="foodName"]')
        .type('Popcorn Balls')
        .should('have.value', 'Popcorn Balls');
        cy.contains('Confirm').click();
        cy.contains('Bobby');
        cy.contains('Popcorn Balls');
        cy.contains('Done').click();
        cy.contains("An app to crowdsource planning large multifamily meals.");
    });
})