
class EfetuarLogin {

    go() {

        cy.visit('/')
        cy.get('.normal').contains('To get started, login into your account').click()
    }

   submit() {
        cy.get('#blip-login').contains('Login').click()
    }

    preencherFormulario() {
        cy.get('input[name="Username"]').type('teste@teste.com.br')
        cy.get('input[name="Password"]').type('123Abc@@')
    }

    preencherFormularioInvalido() {
        cy.get('input[name="Username"]').type('teste')
        cy.get('input[name="Password"]').type('123Abc@@')
    }

}

export default new EfetuarLogin;