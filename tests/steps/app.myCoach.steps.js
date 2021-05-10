import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import MyCoachScreen from '../screenobjects/MyCoachScreen/myCoach.screen';
import InfoCoachScreen from '../screenobjects/MyCoachScreen/infoCoach.screen';


Then(/^Ver opcion Mi Coach$/, () => {
    console.log("Opcion my coach");
    //Primer Swipe
    let yTo = 300
    let yFrom = 1400
    MyCoachScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)
    MyCoachScreen.waitForIsShown(true);
    expect(MyCoachScreen.tituloMyCoach.isDisplayed()).to.equal(true)
 
})

When(/^Dar clic en Mi Coach$/, () => {
    browser.pause(2000)
    expect(MyCoachScreen.botonIngresoCoach.isDisplayed()).to.equal(true)
    console.log("Clic en ingreso coach");
    MyCoachScreen.botonIngresoCoach.click();
    
})

Then(/^Ver pantalla interactuar coach$/, () => {
    console.log("Ver pantalla interactuar coach");
    InfoCoachScreen.waitForIsShown(true)
    expect(InfoCoachScreen.tituloMyCoach.isDisplayed()).to.equal(true)
    browser.pause(8000)
    
})
 
When(/^Inicio cuestionario Suena Bien$/, () => {    
    browser.pause(3000)
    console.log("Clic en suena bien");
    InfoCoachScreen.suenaBien.click();
    
})

Then(/^Guardar cuestionario Suena Bien$/, () => {
    console.log("Guardar cuestionario suena bien");
    InfoCoachScreen.waitForIsShown(true)
    expect(InfoCoachScreen.botonGuardar.isDisplayed()).to.equal(true)
    InfoCoachScreen.botonGuardar.click();
    browser.pause(10000)
    
})

When(/^Inicio cuestionario coach$/, () => {    
    browser.pause(2000)
    expect(InfoCoachScreen.cuestionario.isDisplayed()).to.equal(true)
    
})

When(/^Seleccionar '(.+)' respuesta$/, (opcion) => {
    browser.pause(2000)
    //console.log(opcion)
    InfoCoachScreen.seleccionSiempre.click()
    /*let tamannio = InfoCoachScreen.seleccionSiempreFruta.length
    console.log(tamannio)
    for (let i = 0; i < tamannio; i++) {
        console.log("dentro del for "+ i)
        console.log("dentro del for "+ InfoCoachScreen.seleccionSiempreFruta[i].getvalue())
        const element = InfoCoachScreen.seleccionSiempreFruta[i].getText();
        console.log(element)
        
    }*/
    
   /* if (opcion == 'Siempre') {
        InfoCoachScreen.seleccionSiempreFruta.click();       
    } else if (opcion == 'A menudo') {
        InfoCoachScreen.seleccionAmenudoFruta.click();
    } else if (opcion == 'A veces') {
        InfoCoachScreen.seleccionAvecesFruta.click();
    } else if (opcion == 'Casi nunca') {
        InfoCoachScreen.seleccionCasiNuncaFruta.click();
    } else if (opcion == 'Nunca') {
        InfoCoachScreen.seleccionNuncaFruta.click();
    }else {
        console.log("Opcion no existe")
    }*/
});


Then(/^Guardar cuestionario coach$/, () => {
    console.log("Guardar cuestionario Coach");
    InfoCoachScreen.waitForIsShown(true)
    expect(InfoCoachScreen.botonGuardar.isDisplayed()).to.equal(true)
    InfoCoachScreen.botonGuardar.click();
    browser.pause(10000)
    
})

Then(/^Omitir cuestionario coach$/, () => {
    console.log("Omitir cuestionario Coach");
    InfoCoachScreen.waitForIsShown(true)
    expect(InfoCoachScreen.botonOmitir.isDisplayed()).to.equal(true)
    InfoCoachScreen.botonOmitir.click();
    browser.pause(10000)
    
})
