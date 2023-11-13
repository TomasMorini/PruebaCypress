class index {


    //Locators
    A14 = "//div[@class='product-item-name']/*[text() = 'Galaxy A14 4G']"
    filters = "// div [@class = 'filters']"
    memoria128 = "// a [text() = '128GB']" 
    precio200300 = "// li [@data-value = '200000_300000']"
    equiposEncontrados = "// div [@class = 'total-products'] / p"
    equipos = "// li [@class = 'product-item']"
    celularesUsados = "// a [@data-path = 'celulares-usados']"
    equiposUsados = "// li [@class = 'item product product-item']"


    //Funciones
    clickEnA14 = () => {
        cy.xpath(this.A14).eq(1).click();
    }

    clickEnFilters = () => {
        cy.xpath(this.filters).click();
    }

    clickEnMemoria128 = () => {
        cy.xpath(this.memoria128).click();
    }

    clickEnPrecio2003000 = () => {
        cy.xpath(this.precio200300).click();
    }

    mostrarEquiposEncontrados = () => {
        cy.wait(4000);
        cy.xpath(this.equiposEncontrados).invoke("text").then(cy.log);
    }

    clickEnTercerEquipo = () => {
        cy.xpath(this.equipos).eq(2).click();
    }

    clickEnCelularesUsados = () => {
        cy.xpath(this.celularesUsados).eq(0).click();
    }

    clickEnSegundoEquipo = () => {
        cy.xpath(this.equiposUsados).eq(1).click();
    }


} export default new index();
