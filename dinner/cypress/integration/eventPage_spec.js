describe('Users can see the intended elements on the event page', () => {
    it('displays all sections', () => {
        cy.visit('http://localhost:3000/dinner-potluck');
        cy.contains('Start').click();
        cy.contains("Upcoming Events");
        cy.contains("Enter the Event Code");
        cy.contains("Create an Event");
        cy.contains("How to Create an Event");
    });
})