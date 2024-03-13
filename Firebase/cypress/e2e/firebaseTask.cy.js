/* eslint-disable no-undef */
describe('Renderizado de la pagina', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173')
  })
  it('rendirizado correcto', () => {
    cy.contains('FireApp')
  })
  it('renderizado del login', () => {
    cy.contains('Login').click()
    cy.contains('Bienvenidos a mi Login')
  })
  /*it('Registro  de usuario', () => {
    const user ={
      email:"cuenta@nueva.com",
      password:"1234cuenta"
    }
    cy.contains('Registrarse').click()
    cy.get('input[placeholder="Email"]').type(user.email)
    cy.get('input[placeholder="Password"]').type(user.password)
    cy.contains('Registrarte').click()
  });*/
  /*it('No puedeRegistra notas', () => {
    cy.get('div.list-route').click()
    cy.get('input[placeholder="Titulo"]').should(be.disable)
    cy.get('input[placeholder="Descripción"]').should(be.disable)
  });*/
})