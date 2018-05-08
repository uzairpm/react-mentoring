describe('NetflixRoulette Test', () => {
    it('Test 1', () => {
        cy.viewport(1200, 1000);
        cy.visit('http://localhost:3000/');
        cy.get('.searchInput')
            .type('harry')
            .should('have.value', 'harry');
        cy.get('.searchInput').type('{enter}');
        
        cy.get('.searchFilterBar').should('contain', 'movies found');
        cy.wait(3000);
        cy.screenshot('search-results-harry');
        cy.get('.searchFilterBar .btn:last').click();
        cy.get('.movieCard:first').click();
        cy.url().should('include', '/film/');
        cy.get('.card-body .movieTitle').should(($p) => {
            expect($p).to.contain('Harry');
        });
        cy.wait(3000);
        cy.screenshot('movie-details-harry');
        cy.get('.navbar .btn').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});
