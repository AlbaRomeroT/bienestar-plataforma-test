import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import RegistroActividadScreen from '../screenobjects/RegistroActividadScreen/registroActividad.screen';
import InfoActividadScreen from '../screenobjects/RegistroActividadScreen/infoActividad.screen';
import RegistroManualActividadScreen from '../screenobjects/RegistroActividadScreen/registroManualActividad.screen';
import IndicatorSaludScreen from '../screenobjects/IndicatorScreen/indicatorSalud.screen';


Then(/^Ver opcion Registrar Acitividad$/, () => {
    console.log("Opcion registrar actividad");
    RegistroActividadScreen.waitForIsShown(true);
    expect(RegistroActividadScreen.tituloRegistroActividad.isDisplayed()).to.equal(true)
 
})

When(/^Dar clic en registrar actividad$/, () => {
    //Primer Swipe
    let yTo = 300
    let yFrom = 1400
    RegistroActividadScreen.swipeUp(yFrom, yTo)
    
    browser.pause(2000)
    expect(RegistroActividadScreen.botonRegistroActividad.isDisplayed()).to.equal(true)
    console.log("Clic en registrar actividad");
    RegistroActividadScreen.botonRegistroActividad.click();
    
})

Then(/^Ver pantalla para registrar actividad$/, () => {
    console.log("Ver pantalla registro");
    InfoActividadScreen.waitForIsShown(true)
    //Swipe
    let yTo = 500
    let yFrom = 1000
    InfoActividadScreen.swipeUp(yFrom, yTo)  
    browser.pause(1000)
    InfoActividadScreen.swipeUp(yTo, yFrom)    
})

Then(/^Ver pantalla para registrar una actividad$/, () => {
    InfoActividadScreen.waitForIsShown(true)
    expect(InfoActividadScreen.inputBuscarActividad.isDisplayed()).to.equal(true)
    
})
        
Then(/^Dar clic sobre la barra buscar$/, () => {
    console.log("Clic sobre la barra buscar");
    InfoActividadScreen.waitForIsShown(true)
    expect(InfoActividadScreen.inputBuscarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.inputBuscarActividad.click()
    browser.pause(1000)
   
})

Then(/^Buscar actividad '(.+)' a registrar$/, (actividad) => {
    console.log("Buscar actividad");
    InfoActividadScreen.waitForIsShown(true)
    InfoActividadScreen.inputBuscarActividad.click()
    InfoActividadScreen.inputBuscarActividad.setValue(actividad)
   
})

When(/^Seleccionar actividad '(.+)' a registrar$/, (actividad) => {
    console.log("Seleccionar la Actividad :"+actividad);
    InfoActividadScreen.inputBuscarActividad.click()
    InfoActividadScreen.inputBuscarActividad.setValue(actividad);
    driver.hideKeyboard();
    InfoActividadScreen.listaActividad.click();
                  
})

When(/^Dar clic para iniciar la actividad$/, () => {
    console.log("A iniciar la actividad");
    expect(InfoActividadScreen.homeActividadCronometro.isDisplayed()).to.equal(true)
    expect(InfoActividadScreen.inicioActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.inicioActividad.click();
    //Esperar 50 segundos
    browser.pause(45000)
    
})

When(/^Dar clic para pausar la actividad$/, () => {
    console.log("A pausar la actividad");
    expect(InfoActividadScreen.pausaActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.pausaActividad.click();
    browser.pause(1000)
    
})

When(/^Dar clic para guardar la actividad$/, () => {
    console.log("A guardar la actividad");
    expect(InfoActividadScreen.guardarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.guardarActividad.click();
    browser.pause(1000)
    
})

Then(/^Dar clic en agregar actividad$/, () => {
    console.log("Agregar la actividad");
    expect(InfoActividadScreen.homeAgregarActividad.isDisplayed()).to.equal(true)
    expect(InfoActividadScreen.botonAgregarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.botonAgregarActividad.click();
    browser.pause(8000)
    
})

When(/^Dar clic para cancelar la actividad$/, () => {
    console.log("A cancelar la actividad");
    expect(InfoActividadScreen.eliminarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.eliminarActividad.click();
    browser.pause(1000)
    
})

Then(/^Dar clic en eliminar actividad$/, () => {
    console.log("Eliminar la actividad");
    expect(InfoActividadScreen.homeEliminarActividad.isDisplayed()).to.equal(true)
    expect(InfoActividadScreen.botonBorrarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.botonBorrarActividad.click();
    browser.pause(8000)
    
})

When(/^Ver pantalla para iniciar actividad$/, () => {
    console.log("Ver pantalla para iniciar la actividad");
    expect(InfoActividadScreen.homeActividadCronometro.isDisplayed()).to.equal(true)
    
})

Then(/^Dar clic en regresar a la lista de actividades$/, () => {
    console.log("Clic regresar ");
    expect(InfoActividadScreen.regresarListadoActividades.isDisplayed()).to.equal(true)
    InfoActividadScreen.regresarListadoActividades.click();
    browser.pause(2000)
    
})
When(/^Dar clic para renudar la actividad$/, () => {
    console.log("A reanudar la actividad");
    expect(InfoActividadScreen.reanudarActividad.isDisplayed()).to.equal(true)
    InfoActividadScreen.reanudarActividad.click();
    browser.pause(1000)
    
})

When(/^Dar clic opcion Historial de actividades$/, () => {
    console.log("Opcion historial de actividad");
    expect(InfoActividadScreen.historialActividades.isDisplayed()).to.equal(true)
    InfoActividadScreen.historialActividades.click();
    
})

Then(/^Ver pantalla historial de actividades$/, () => {
    console.log("Historial de actividad");
    expect(InfoActividadScreen.homeHistorialActividades.isDisplayed()).to.equal(true)
    let yTo = 200
    let yFrom = 1200
    for (let index = 0; index < 5; index++) {
        InfoActividadScreen.swipeUp(yFrom, yTo)
        browser.pause(1000)
    }
    
})

Then(/^Dar clic en Registro datos cuerpo$/, () => {
    console.log("Clic registro datos cuerpo");
    //Primer Swipe
    let yTo = 300
    let yFrom = 1000
    RegistroManualActividadScreen.swipeUp(yFrom, yTo)
    RegistroManualActividadScreen.waitForIsShown(true)
    expect(RegistroManualActividadScreen.grillaNuevaFuncionalidad.isDisplayed()).to.equal(true)

    if(RegistroManualActividadScreen.botonRegistroCorporal.isClickable()){
        RegistroManualActividadScreen.botonRegistroCorporal.click();
    }else{
        console.log("No se puede dar clic")
        RegistroManualActividadScreen.botonRegistroCorporal.click()
    } 
})

Then(/^Ver formulario para registrar informacion de cuerpo$/, () => {
    console.log("Formulario ingreso informacion corporal");
    expect(IndicatorSaludScreen.verHomeCuerpo.isDisplayed()).to.equal(true)        
    let yTo = 500
    let yFrom = 1400
    IndicatorSaludScreen.swipeUp(yFrom, yTo)
    browser.pause(1000)

})
