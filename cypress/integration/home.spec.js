

describe('home page', () => {
    it('pagina deve estar online', function() {
        cy.visit('/')
        cy.get('.normal')  
 
    })


})
