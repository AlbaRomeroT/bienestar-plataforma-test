import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import BotonVerdeScreen from '../screenobjects/BotonVerdeScreen/botonVerde.screen';
import InfoBotonVerdeScreen from '../screenobjects/BotonVerdeScreen/infoBotonVerde.screen';


Then(/^Clic en boton verde$/, () => {
    BotonVerdeScreen.waitForIsShown(true)
    expect(BotonVerdeScreen.botonIngresoBotonVerde.isDisplayed()).to.equal(true)
    console.log("Clic en ingreso Boton Verde");
    BotonVerdeScreen.botonIngresoBotonVerde.click();
    browser.pause(4000)
    
})


Then(/^Clic en boton guardar sin datos$/, () => {
    InfoBotonVerdeScreen.waitForIsShown(true)
    expect(InfoBotonVerdeScreen.botonGuardar.isDisplayed()).to.equal(true)
    console.log("Guardar");
    InfoBotonVerdeScreen.botonGuardar.click();
    browser.pause(5000)
    
})


When(/^Ingresar numero '(.+)' del Telefono$/, (telefono) => {
    console.log("ingresa telefono");
    InfoBotonVerdeScreen.inputNumeroTelefonico.setValue(telefono)
    driver.hideKeyboard();
});

Then(/^Clic en boton guardar$/, () => {
    InfoBotonVerdeScreen.waitForIsShown(true)
    expect(InfoBotonVerdeScreen.botonGuardar.isDisplayed()).to.equal(true)
    console.log("Guardar");
    InfoBotonVerdeScreen.botonGuardar.click();
    browser.pause(3000)
})

When(/^Muestra mensaje de errorLongitud '(.+)'$/, (error) => {
    console.log("Error al ingresar campo telefono");
    browser.pause(5000)
    
});        

Then(/^Clic en boton salir$/, () => {
    InfoBotonVerdeScreen.waitForIsShown(true)
    expect(InfoBotonVerdeScreen.botonCerrar.isDisplayed()).to.equal(true)
    console.log("Salir");
    InfoBotonVerdeScreen.botonCerrar.click();
})