import EfetuarLogin from "../pages/EfetuarLogin"

describe('Efetuar Login',()=>{

    it('Validar e-mail inválido',function(){
        EfetuarLogin.go()
        EfetuarLogin.preencherFormularioInvalido()

    })

    it('Login com sucesso',function(){
        EfetuarLogin.go()
        EfetuarLogin.preencherFormulario()
        EfetuarLogin.submit()
    })


})