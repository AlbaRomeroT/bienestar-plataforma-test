import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import PropositosHomePrincipalScreen from '../screenobjects/PropositosScreen/propositosHomePrincipal.screen';
import HomePropositosScreen from '../screenobjects/PropositosScreen/homePropositos.screen';
import PropositosAnadirScreen from '../screenobjects/PropositosScreen/propositosAnadir.screen';
import PropositosHomeBienestarScreen from '../screenobjects/PropositosScreen/propositosHomeBienestar.screen';
import PropositosEliminarScreen from '../screenobjects/PropositosScreen/propositosEliminar.screen';
import PropositosDetalleScreen from '../screenobjects/PropositosScreen/propositosDetalle.screen';


Then(/^Ver opcion Propositos$/, () => {
    console.log("Opcion mis propositos");
    PropositosHomePrincipalScreen.waitForIsShown(true);
    expect(PropositosHomePrincipalScreen.isDisplayed()).to.equal(true)
 
})

When(/^Dar clic en Propositos$/, () => {
    expect(PropositosHomePrincipalScreen.botonIngresarOpcion.isDisplayed()).to.equal(true)
    console.log("Clic en Mis propositos");
    PropositosHomePrincipalScreen.botonIngresarOpcion.click();
    browser.pause(8000)
})

When(/^Dar clic en anadir propositos$/, () => {
    HomePropositosScreen.waitForIsShown(true)
    console.log("Añadir proposito");
    let yTo = 300
    let yFrom = 1000
    HomePropositosScreen.swipeUp(yFrom, yTo)
    expect(HomePropositosScreen.botonAnadirProposito.isDisplayed()).to.equal(true)
    HomePropositosScreen.botonAnadirProposito.click();
    browser.pause(8000)

})

When(/^Ver el proposito a seleccionar$/, () => {
    console.log("ver propositos");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    
})
        
When(/^Clic en el proposito seleccionado$/, () => {
    expect(PropositosAnadirScreen.botonAnadirPropositoSeleccionado.isDisplayed()).to.equal(true)
    console.log("Añadir proposito seleccionado");
    PropositosAnadirScreen.botonAnadirPropositoSeleccionado.click();
    browser.pause(3000)

})


When(/^Clic en confirmar ingreso proposito$/, () => {
    expect(PropositosAnadirScreen.botonConfirmarInsertarProposito.isDisplayed()).to.equal(true)
    console.log("Confirmar proposito añadido");
    PropositosAnadirScreen.botonConfirmarInsertarProposito.click();
    browser.pause(3000)

})

Then(/^Ver opcion Propositos Bienestar$/, () => {
    console.log("Ver opcion proposito home Bienestar");
    PropositosHomeBienestarScreen.waitForIsShown(true);
    expect(PropositosHomeBienestarScreen.tituloPropositoHomeBienestar.isDisplayed()).to.equal(true)
    
})


When(/^Dar clic en Propositos Bienestar$/, () => {
    //Primer Swipe
    let yTo = 300
    let yFrom = 1400
    PropositosHomeBienestarScreen.swipeUp(yFrom, yTo)
    
    expect(PropositosHomeBienestarScreen.botonIngresarOpcion.isDisplayed()).to.equal(true)
    console.log("Ingresar opcion propositos");
    PropositosHomeBienestarScreen.botonIngresarOpcion.click();
    browser.pause(3000)

})
        
        
When(/^Dar clic en editar proposito$/, () => {
    //Primer Swipe
    let yTo = 300
    let yFrom = 1200
    HomePropositosScreen.swipeUp(yFrom, yTo)
    
    expect(HomePropositosScreen.botonEditarProposito.isDisplayed()).to.equal(true)
    console.log("Editar proposito");
    HomePropositosScreen.botonEditarProposito.click();
 
})

When(/^Dar clic en eliminar proposito$/, () => {
    expect(HomePropositosScreen.botonEliminarProposito.isDisplayed()).to.equal(true)
    console.log("Eliminar proposito");
    HomePropositosScreen.botonEliminarProposito.click();
    browser.pause(3000)
 
})

Then(/^Confirmar eliminacion de registro$/, () => {
    console.log("Confirmar eliminacion registro");
    PropositosEliminarScreen.waitForIsShown(true);
    expect(PropositosEliminarScreen.botonConfirmarElimnarProposito.isDisplayed()).to.equal(true)
    PropositosEliminarScreen.botonConfirmarElimnarProposito.click();
    browser.pause(5000)

})

Then(/^Dar clic en volver atras$/, () => {
    console.log("Regresar a Home Bienestar");
    expect(HomePropositosScreen.botonVolverAtras.isDisplayed()).to.equal(true)
    HomePropositosScreen.botonVolverAtras.click();
    browser.pause(3000)

})

When(/^Clic en Detalle de proposito activo$/, () => {
    console.log("Clic en detalle activo");
    HomePropositosScreen.waitForIsShown(true);
    expect(HomePropositosScreen.botonDetalleProposito.isDisplayed()).to.equal(true)
    HomePropositosScreen.botonDetalleProposito.click();
    browser.pause(3000)

})

When(/^Ver detalle proposito activo$/, () => {
    console.log("Ver detalle proposito activo");
    expect(HomePropositosScreen.tituloDetalleProposito.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 700
    HomePropositosScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    HomePropositosScreen.swipeUp(yTo, yFrom)

})

Then(/^Dar clic en regresar pantalla anterior$/, () => {
    console.log("Regresar a Home Propositos");
    expect(PropositosDetalleScreen.tituloDetalleProposito.isDisplayed()).to.equal(true)
    expect(PropositosDetalleScreen.botonVolverAtras.isDisplayed()).to.equal(true)
    PropositosDetalleScreen.botonVolverAtras.click();
    browser.pause(3000)

})

When(/^Dar clic en Propositos Finalizados$/, () => {
    console.log("Clic proposito finalizado");
    HomePropositosScreen.waitForIsShown(true);
    expect(HomePropositosScreen.botonPropositoFinalizado.isDisplayed()).to.equal(true)
    HomePropositosScreen.botonPropositoFinalizado.click();
    browser.pause(3000)

})

When(/^Clic en Detalle de proposito finalizado$/, () => {
    console.log("Clic en detalle finalizado");
    HomePropositosScreen.waitForIsShown(true);
    expect(HomePropositosScreen.botonDetalleProposito.isDisplayed()).to.equal(true)
    HomePropositosScreen.botonDetalleProposito.click();
    browser.pause(3000)

})

When(/^Ver detalle proposito finalizado$/, () => {
    console.log("Ver detalle proposito finalizado");
    expect(HomePropositosScreen.tituloDetalleProposito.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 700
    HomePropositosScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    HomePropositosScreen.swipeUp(yTo, yFrom)

})

Then(/^Dar clic en devolver a pantalla anterior$/, () => {
    console.log("Regresar a Home Propositos");
    expect(PropositosDetalleScreen.tituloDetalleProposito.isDisplayed()).to.equal(true)
    expect(PropositosDetalleScreen.botonVolverAtras.isDisplayed()).to.equal(true)
    PropositosDetalleScreen.botonVolverAtras.click();
    browser.pause(3000)

})

When(/^Clic en actividad fisica$/, () => {
    console.log("Clic en boton actividad fisica");
    expect(PropositosAnadirScreen.botonActividadFisica.isDisplayed()).to.equal(true)
    PropositosAnadirScreen.botonActividadFisica.click();
    browser.pause(3000)

}) 

Then(/^Ver propositos actividad fisica$/, () => {
    console.log("Ver propositos actividad fisica");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 1000
    PropositosAnadirScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    PropositosAnadirScreen.swipeUp(yTo, yFrom)
    browser.pause(1000)

})  

When(/^Clic en nutricion$/, () => {
    console.log("Clic en boton nutricion");
    PropositosAnadirScreen.waitForIsShown(true);
    expect(PropositosAnadirScreen.botonNutricion.isDisplayed()).to.equal(true)
    PropositosAnadirScreen.botonNutricion.click();
    browser.pause(3000)

}) 

Then(/^Ver propositos nutricion$/, () => {
    console.log("Ver propositos nutricion");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 1000
    PropositosAnadirScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    PropositosAnadirScreen.swipeUp(yTo, yFrom)
    browser.pause(1000)

})  

When(/^Clic en habitos$/, () => {
    console.log("Clic en boton habitos");
    PropositosAnadirScreen.waitForIsShown(true);
    expect(PropositosAnadirScreen.botonHabitos.isDisplayed()).to.equal(true)
    PropositosAnadirScreen.botonHabitos.click();
    browser.pause(3000)

}) 

Then(/^Ver propositos habitos$/, () => {
    console.log("Ver propositos habitos");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 1000
    PropositosAnadirScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    PropositosAnadirScreen.swipeUp(yTo, yFrom)
    browser.pause(1000)

})  

When(/^Clic en mente$/, () => {
    console.log("Clic en boton mente");
    expect(PropositosAnadirScreen.botonMente.isDisplayed()).to.equal(true)
    PropositosAnadirScreen.botonMente.click();
    browser.pause(3000)

}) 

Then(/^Ver propositos mente$/, () => {
    console.log("Ver propositos mente");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 700
    PropositosAnadirScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    PropositosAnadirScreen.swipeUp(yTo, yFrom)
    browser.pause(1000)

})  

When(/^Clic en sueno$/, () => {
    console.log("Clic en boton sueno");
    PropositosAnadirScreen.waitForIsShown(true);
    expect(PropositosAnadirScreen.botonSuenio.isDisplayed()).to.equal(true)
    PropositosAnadirScreen.botonSuenio.click();
    browser.pause(3000)

}) 

Then(/^Ver propositos sueno$/, () => {
    console.log("Ver propositos sueno");
    PropositosAnadirScreen.waitForIsShown(true)
    expect(PropositosAnadirScreen.homeDetallePropositoASeleccionar.isDisplayed()).to.equal(true)
    let yTo = 300
    let yFrom = 1000
    PropositosAnadirScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)
    PropositosAnadirScreen.swipeUp(yTo, yFrom)
    browser.pause(1000)

})  

