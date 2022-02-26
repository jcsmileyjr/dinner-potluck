describe("User can create a new event and see it in upcoming event", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/dinner-potluck');
        cy.contains('Start').click();
    })
    
    it('should allow user to create an event', ()=> {
        cy.get('button').contains('Create').click();
        cy.get('input').type("Family Brunch").should('have.value','Family Brunch');
        cy.contains('Confirm').click();
        cy.get('input').type('2022-02-22').should('have.value','2022-02-22');
        cy.contains('Confirm').click();
        cy.get('input').type("Hot Dogs").should('have.value','Hot Dogs');
        cy.contains('Confirm').click();
        cy.get('input').type("Buns").should('have.value','Buns');
        cy.contains('Done').click();
        cy.contains("Family Brunch");
        cy.contains("2-22-2022");
        cy.contains("Hot Dogs");
        cy.contains("Buns");
        cy.get('p.createPage__code--style').should('not.be.empty');
        cy.contains('Done').click();
        cy.contains('Done').click();

    }); 
    
    xit('should allow user to cancel event at any point', () => {

    });

})    