//import RealizarCadastroFactory from "./factories/RealizarCadastroFactory"
import EfetuarLogin from "../pages/EfetuarLogin"
import RealizarCadastro from "../pages/RealizarCadastro"

describe('Cadastrar Novo Usuário', () => {

    it('Validar email inválido', function () {

        EfetuarLogin.go()

        cy.get('#blip-register').contains('Register for free').click()

        cy.get('input[name="Email"').type('teste')

        RealizarCadastro.mensagemInvalida('Esse não parece ser um email válido. Por favor, tente de novo :)')
    })

    it('Validar Nome inválido', function () {
        EfetuarLogin.go()

        cy.get('#blip-register').contains('Register for free').click()

        cy.get('input[name="FullName"').type('Nom')

        RealizarCadastro.mensagemInvalida('Ops! Seu nome completo precisa ter pelo menos 6 caracteres')
    })

   
})

