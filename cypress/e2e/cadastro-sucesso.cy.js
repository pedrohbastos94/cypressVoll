import { fakerPT_BR as faker } from "@faker-js/faker"
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
     const senha = faker.internet.password({lenght: 8, memorable:true})
    it('Digite dados da clínica e exibe a área para inserção de dados técnicos',()=>{
        cy.contains('a', 'Cadastre-se').click()
        cy.get('[data-test="inputNome"]').type(faker.internet.username())
        cy.get('[data-test="inputCNPJ"]').type(faker.string.numeric(14))
        cy.get('[data-test="inputEmail"]').type(faker.internet.email())
        cy.get('[data-test="inputSenha"]').type(senha)
        cy.get('[data-test="inputSenhaVerificada"]').type(senha)
        cy.contains('button', 'Avançar').click()
        cy.contains('Agora, os dados técnicos:').should('be.visible')
        cy.get('.iCNXLk').should('exist').should('be.visible')        

    })
})

context('Sessão de cadastro completa', ()=>{
    const senha = faker.internet.password({lenght: 8, memorable:true})
 it('Cadastrar uma clínica', ()=>{
         cy.contains('a', 'Cadastre-se').click()
        cy.get('[data-test="inputNome"]').type(faker.internet.username())
        cy.get('[data-test="inputCNPJ"]').type(faker.string.numeric(14))
        cy.get('[data-test="inputEmail"]').type(faker.internet.email())
        cy.get('[data-test="inputSenha"]').type(senha)
        cy.get('[data-test="inputSenhaVerificada"]').type(senha)
        cy.contains('button', 'Avançar').click()
        cy.contains('Agora, os dados técnicos:').should('be.visible')

        cy.get('.iCNXLk').should('exist').should('be.visible')

        cy.get('[data-test="inputTelefone"]').type(faker.phone.number())
        cy.get('[data-test="inputCEP"]').type(faker.location.zipCode())
        cy.get('[data-test="inputRua"]').type(faker.location.street())
        cy.get('[data-test="inputNumero"]').type(faker.location.buildingNumber())
        cy.get('[data-test="inputEstado"]').type(faker.location.state({abbreviated:true}))
        cy.get('[data-test="inputComplemento"]').type(faker.location.secondaryAddress())

        cy.contains('button', 'Cadastrar').click()

         cy.location('pathname').should('equal', '/login')
})   
    })
})