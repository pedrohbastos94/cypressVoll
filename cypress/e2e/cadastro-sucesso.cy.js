describe ('Página de Cadastro', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        
    })

 context('Verificar redirecionamento de página', ()=>{
     it('Clicar no link "Cadastre-se" e rendireciona para a página de cadastro da clinica', () =>{
        cy.contains('a', 'Cadastre-se').click()
        cy.location('pathname').should('equal', '/cadastro') //VERIFICA SE REALMENTE ESTÁ NA PÁGINA DE CADASTRO
        
    })
 })
   

context('Primeira parte da sessão de cadastro', ()=>{
    it('Digite dados da clínica e exibe a área para inserção de dados técnicos',()=>{
        cy.contains('a', 'Cadastre-se').click()
        cy.get('[data-test="inputNome"]').type('Pedro Bastos')
        cy.get('[data-test="inputCNPJ"]').type('14.582.937/0001-85')
        cy.get('[data-test="inputEmail"]').type('pedroca@email.com')
        cy.get('[data-test="inputSenha"]').type('Senha.123')
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha.123')
        cy.contains('button', 'Avançar').click()
        cy.contains('Agora, os dados técnicos:').should('be.visible')
        cy.get('.iCNXLk').should('exist').should('be.visible')        

    })
})

context('Sessão de cadastro completa', ()=>{
 it('Cadastrar uma clínica', ()=>{
         cy.contains('a', 'Cadastre-se').click()
        cy.get('[data-test="inputNome"]').type('Pedro Bastos')
        cy.get('[data-test="inputCNPJ"]').type('14.582.937/0001-85')
        cy.get('[data-test="inputEmail"]').type('pedroca@email.com')
        cy.get('[data-test="inputSenha"]').type('Senha.123')
        cy.get('[data-test="inputSenhaVerificada"]').type('Senha.123')
        cy.contains('button', 'Avançar').click()
        cy.contains('Agora, os dados técnicos:').should('be.visible')

        cy.get('.iCNXLk').should('exist').should('be.visible')

        cy.get('[data-test="inputTelefone"]').type('24993245544')
        cy.get('[data-test="inputCEP"]').type('01310-100')
        cy.get('[data-test="inputRua"]').type('Avenida Paulista')
        cy.get('[data-test="inputNumero"]').type('242')
        cy.get('[data-test="inputEstado"]').type('RJ')
        cy.get('[data-test="inputComplemento"]').type('Casa1')

        cy.contains('button', 'Cadastrar').click()

         cy.location('pathname').should('equal', '/login')
})   
    })
})