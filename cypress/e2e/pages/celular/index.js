class index {


    //Locators
    calcularCuotas = "//*[text() = 'Calculá tus cuotas']"
    banco = "//*[@id = 'inputbank']"
    card = "//*[@id = 'inputCard']"
    cantidadCuotas = "//*[@id='calculate_btn']/button"
    verificarCuotas = "// *[text() = 'Ahora 3 cuotas sin interés de ']"
    verificarCantidadCuotas = "// tbody [@id = 'bodyTable'] / tr / td / span [@class = 'blue'] "
    verificarCondicion = "// div [@aria-label = 'Excelente']"

    //Funciones
    clickEnCalcularCuotas = () => {
        cy.xpath(this.calcularCuotas).click();
    }

    seleccionarBanco = (banco) => {
        cy.xpath(this.banco).click().then(() => {
            cy.xpath(`//*[@id = "selectBank"] / ul / li / div [text () = "${banco}" ]`).should("be.visible").click({force: true})   
     });
    }

    seleccionarCard = (card) => {
        cy.xpath(this.card).click().then(() => {
        cy.xpath(`//*[@id = "selectCardByBank"] / ul / li / span [text () = "${card}" ]`).should("be.visible").click()   
        });
    }

    clickEnCantidadCuotas = () => {
        cy.xpath(this.cantidadCuotas).click();
    }

    verificarCuotasSinInteres = () => {
        cy.xpath(this.verificarCuotas).should("be.visible");
    }

    verificarTabla = () => {
        let cuotas60 = false
        cy.xpath(this.verificarCantidadCuotas).each((cuotas, interes, contratacion) => {   
            cy.log (cuotas.text())              
            if(cuotas.text() == '60'){                     
                cuotas60 = true;                 
            }      
        }).then(() => {             
            expect(cuotas60).to.be.false;             
            cy.log('Banco American Express y Tarjeta American Express no poseen 60 cuotas')        
         });;

    }

    verificarCondicionEquipo = () => {
        cy.xpath(this.verificarCondicion).should("have.text", "ExcelenteExcelenteExcelente")
    }

} export default new index();
