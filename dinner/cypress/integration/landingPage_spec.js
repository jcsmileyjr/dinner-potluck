describe('Landing Page Works', () => {
    it("should allow users to see all intended elements on the landing page and go to planning page", () => {
        cy.visit('http://localhost:3000/dinner-potluck');
        cy.contains("An app to crowdsource planning large multifamily meals.");
        cy.contains("The family that stress less");
        cy.contains("Menu");
        cy.contains('Start').click();
        cy.contains("Upcoming Events");
    })
})