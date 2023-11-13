require("cypress-xpath")

import landingPage from "../e2e/pages/landing";
import celular from "./pages/celular";

describe("Prueba Tecnica", function(){
  beforeEach(function(){
    cy.visit("https://tiendaonline.movistar.com.ar/");
    cy.url().should('include', "https://tiendaonline.movistar.com.ar/")     
    cy.viewport(1280,800)
  })
  
  it ("CP001", function(){
      landingPage.clickEnA14();
      celular.clickEnCalcularCuotas();
      celular.seleccionarBanco("American Express");
      celular.seleccionarCard("American Express");
      celular.clickEnCantidadCuotas();
      celular.verificarCuotasSinInteres();
      cy.screenshot()
  })

  it ("CP002", function(){
    landingPage.clickEnFilters();
    landingPage.clickEnMemoria128();
    landingPage.clickEnFilters();
    landingPage.clickEnPrecio2003000();
    landingPage.mostrarEquiposEncontrados();
    cy.screenshot()
  })

  it ("CP003", function(){
    // Se seleccionó American Express en vez de Credicoop porque no se sabia como hacer el Scroll ya que no esta con un Select y esta hecho con un InPut
  landingPage.clickEnTercerEquipo();
  celular.clickEnCalcularCuotas();
  celular.seleccionarBanco("American Express");
  celular.seleccionarCard("American Express");
  celular.clickEnCantidadCuotas();
  celular.verificarTabla();
  cy.screenshot()
  })

  it ("CP004", function(){
    landingPage.clickEnCelularesUsados();
    landingPage.clickEnSegundoEquipo();
    celular.verificarCondicionEquipo();
    cy.screenshot()
  })



})



