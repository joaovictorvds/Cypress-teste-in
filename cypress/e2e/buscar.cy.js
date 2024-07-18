
describe('Dado que acesso o portal e selecione o campo de pesquisa', () => {
  beforeEach(function() {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.wait(30000)

  })

  it('Quando preencher o campo com o produto desejado e precionar o botao search', () => {
    cy.get('#mobileSearch > .roboto-medium').click()
    cy.get('#mobileSearch > .roboto-medium').type ('mouse')
    cy.wait(2000)
    cy.get('#mobileSearch > #menuSearch').click()
    cy.get('.titleItemsCount').should('be.visible')
  })

  it('E clicar no botao de adicionar o produto ao carrinho', () => {

    cy.get('#mobileSearch > .roboto-medium').type ('mouse')
    cy.wait(2000)
    cy.get('#mobileSearch > #menuSearch').click()
    cy.get(':nth-child(1) > .AddToCard').click()
    cy.get('.BLUE').click()
    cy.get('.fixedBtn > .roboto-medium').click()

  })

  it('Então validar que o produto esta no carrinho', () => {

    cy.get('#mobileSearch > .roboto-medium').click()
    cy.get('#mobileSearch > .roboto-medium').type ('mouse')
    cy.wait(2000)
    cy.get('#mobileSearch > #menuSearch').click()
    cy.get(':nth-child(1) > .AddToCard').click()
    cy.get('.BLUE').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('#shoppingCartLink').click()
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('be.visible')
  })

})