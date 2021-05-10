import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import DashboardScreen from '../screenobjects/DashboardScreen/Dashboard.screen';
import IndicatorSaludScreen from '../screenobjects/IndicatorScreen/indicatorSalud.screen';

Then(/^Ver opcion Bienestar$/, () => {
    console.log("Ver opción Bienestar");
    browser.pause(1000)
    expect(DashboardScreen.opcionBienestar.isDisplayed()).to.equal(true);
 
});

When(/^Dar clic en Bienestar$/, () => {
    DashboardScreen.opcionBienestar.click();
    browser.pause(5000)
});

When(/^Ver puntos indicador salud$/, () => {
    if (DashboardScreen.verPuntosSalud.isDisplayed()){
        console.log("El objeto esta");
        expect(DashboardScreen.verPuntosSalud.isDisplayed()).to.equal(true)
    }else{
        console.log("El objeto no esta");
    }

});

When(/^Ver puntos indicador salud$/, () => {
    if (DashboardScreen.verPuntosSalud.isDisplayed()){
        console.log("El objeto esta");
        expect(DashboardScreen.verPuntosSalud.isDisplayed()).to.equal(true)
        browser.pause(1000)
    }else{
        console.log("El objeto no esta");
    }

});

Then(/^Dar clic en link Mente$/, () => {
    console.log("Ver Link mente");
    IndicatorSaludScreen.waitForIsShown(true)
    if (IndicatorSaludScreen.verMente.isDisplayed()){
        console.log("El objeto esta");
        browser.pause(3000)
        expect(IndicatorSaludScreen.verMente.isDisplayed()).to.equal(true)
        IndicatorSaludScreen.verMente.click();
        
    }else{
        console.log("El objeto no esta");
    }

});

When(/^Ver estado de animo$/, () => {
    browser.pause(5000)
    expect(IndicatorSaludScreen.verHomeMente.isDisplayed()).to.equal(true)        
    let yTo = 500
    let yFrom = 1400
    console.log("Desplazando el cursor ... ");
    IndicatorSaludScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)

});

Then(/^Devolver inicio '(.+)' Bienestar$/, (devolver) => {
    browser.pause(5000)
    console.log("Devolviendose ..."+devolver)
    if (devolver === 'Cuerpo') {
        expect(IndicatorSaludScreen.botonDevolverDeCuerpo.isDisplayed()).to.equal(true)        
        IndicatorSaludScreen.botonDevolverDeCuerpo.click();
        browser.pause(3000)
    } else if (devolver === 'Mente') {
        expect(IndicatorSaludScreen.botonAtras.isDisplayed()).to.equal(true)        
        IndicatorSaludScreen.botonAtras.click();
        browser.pause(3000)
    } else if (devolver === 'Estilo') {
        expect(IndicatorSaludScreen.botonDevolverDeHabitos.isDisplayed()).to.equal(true)        
        IndicatorSaludScreen.botonDevolverDeHabitos.click();
        browser.pause(3000)
    } else {
        console.log("Opción no valida")
    }
    
    
});

Then(/^Dar clic en link Cuerpo$/, () => {
    console.log("Ver Link cuerpo");
    IndicatorSaludScreen.waitForIsShown(true)
    if (IndicatorSaludScreen.verCuerpo.isDisplayed()){
        console.log("El objeto esta");
        browser.pause(3000)
        expect(IndicatorSaludScreen.verCuerpo.isDisplayed()).to.equal(true)
        IndicatorSaludScreen.verCuerpo.click();
        
    }else{
        console.log("El objeto no esta");
    }

});

When(/^Ver informacion de cuerpo$/, () => {
    browser.pause(5000)
    expect(IndicatorSaludScreen.verHomeCuerpo.isDisplayed()).to.equal(true)        
    let yTo = 500
    let yFrom = 1400
    console.log("Desplazando el cursor ... ");
    IndicatorSaludScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)

});

 Then(/^Dar clic en link Habitos$/, () => {
    console.log("Ver Link Habitos");
    IndicatorSaludScreen.waitForIsShown(true)
    if (IndicatorSaludScreen.verHabitos.isDisplayed()){
        console.log("El objeto esta");
        browser.pause(3000)
        expect(IndicatorSaludScreen.verHabitos.isDisplayed()).to.equal(true)
        IndicatorSaludScreen.verHabitos.click();
        
    }else{
        console.log("El objeto no esta");
    }

});

When(/^Ver informacion de estilo de vida$/, () => {
    browser.pause(5000)
    expect(IndicatorSaludScreen.verHomeEstiloVida.isDisplayed()).to.equal(true)        
    let yTo = 500
    let yFrom = 1400
    console.log("Desplazando el cursor ... ");
    IndicatorSaludScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)

});
        