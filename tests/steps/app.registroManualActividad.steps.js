import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import RegistroManualActividadScreen from '../screenobjects/RegistroActividadScreen/registroManualActividad.screen';
import InfoActividadManualScreen from '../screenobjects/RegistroActividadScreen/infoActividadManual.screen';
    
Then(/^Ver opcion Registro manual actividad$/, () => {
    console.log("Opcion manual actividad");
    //Primer Swipe
    let yTo = 300
    let yFrom = 1000
    RegistroManualActividadScreen.swipeUp(yFrom, yTo)
    expect(RegistroManualActividadScreen.tituloRegistroManualActividad.isDisplayed()).to.equal(true) 

})

Then(/^Dar clic en Registro manual actividad$/, () => {
    console.log("Clic para registro manual actividad");
    RegistroManualActividadScreen.waitForIsShown(true)
    expect(RegistroManualActividadScreen.tituloRegistroManualActividad.isDisplayed()).to.equal(true)

    if(RegistroManualActividadScreen.botonRegistroActividadManual.isClickable()){
        RegistroManualActividadScreen.botonRegistroActividadManual.click();
    }else{
        console.log("No se puede dar clic")
    } 
})


Then(/^Ver formulario para registro de actividad$/, () => {
    console.log("Formulario ingreso manual actividad");
    InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.tituloActividadManual.isDisplayed()).to.equal(true) 
})

When(/^Ingresar la actividad '(.+)' a registrar$/, (actividad) => {
    console.log("Ingresando la actividad")
    expect(InfoActividadManualScreen.inputActividad.isDisplayed()).to.equal(true)
    InfoActividadManualScreen.inputActividad.setValue(actividad);
    InfoActividadManualScreen.inputActividad.addValue("Enter");
    driver.hideKeyboard();
 })

 When(/^Registrar la actividad '(.+)' a registrar$/, (actividad) => {
    console.log("Registrando la actividad")
    expect(InfoActividadManualScreen.inputActividad.isDisplayed()).to.equal(true)
    InfoActividadManualScreen.inputActividad.setValue(actividad);
    InfoActividadManualScreen.inputActividad.addValue("Enter");
    driver.hideKeyboard();
    //Primer Swipe
    console.log("Swipe")
    let yTo = 300
    let yFrom = 700
    RegistroManualActividadScreen.swipeUp(yFrom, yTo)
    
 })


When(/^Clic en seleccionar la '(.+)' fecha y hora$/, (hora) => {
    console.log("Seleccionando la fecha")
    expect(InfoActividadManualScreen.fechaHoraActividad.isDisplayed()).to.equal(true);
    if(InfoActividadManualScreen.fechaHoraActividad.isClickable()){
        //console.log("Dentro del if")
        InfoActividadManualScreen.fechaHoraActividad.click();
    
    }else{
        console.log("No se puede dar clic")
    }
    let f = new Date();
    let fechaActual = f.getDate();
    let horaActual = f.getHours();
    let minutoActual = f.getMinutes();

    let inputHora = new Date(hora);
    let newHora = inputHora.getHours();
    let newMinuto = inputHora.getMinutes();
    
    //Recorrer hora
    let reconoce = true;
    let cont = 0;

    if(InfoActividadManualScreen.listaHoraActividad.isDisplayed()){
        console.log("Dentro de hora")
        cont = horaActual;
        if(horaActual > newHora){
            while (reconoce){ 
                if (InfoActividadManualScreen.getHours(cont).getText() != newHora) {
                    InfoActividadManualScreen.getHours(cont-1).click();
                }else{
                    InfoActividadManualScreen.getHours(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (InfoActividadManualScreen.getHours(cont).getText() == newHora) {
                    InfoActividadManualScreen.getHours(cont).click();
                    reconoce = false;
                }else{
                    InfoActividadManualScreen.getHours(cont+1).click(); 
                }
                cont = cont+1;                    
            }
            
        }
    }else{
        console.log("No existe lista de hora")
    }

/*
    //Recorrer Minutos
    reconoce = true;
    cont = 0;

    if(InfoActividadManualScreen.listaMinutoActividad.isDisplayed()){
        console.log("Dentro de minutos")
        cont = minutoActual;
        if(minutoActual > newMinuto){
            while (reconoce){ 
                if (InfoActividadManualScreen.getMinutes(cont).getText() != newMinuto) {
                    InfoActividadManualScreen.getMinutes(cont-1).click();
                }else{
                    InfoActividadManualScreen.getMinutes(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (InfoActividadManualScreen.getMinutes(cont).getText() == newMinuto) {
                    InfoActividadManualScreen.getMinutes(cont).click();
                    reconoce = false;
                }else{
                    InfoActividadManualScreen.getMinutes(cont+1).click(); 
                }
                cont = cont+1;                    
            }
            
        }
    }else{
        console.log("No existe lista de minutos")
    }*/
})

When(/^Dar clic en guardar la fecha$/, () => {
    console.log("Guardar fecha")
//    InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.botonGuardarFecha.isDisplayed()).to.equal(true);
    InfoActividadManualScreen.botonGuardarFecha.click();
})

When(/^Clic en seleccionar el '(.+)' de duracion$/, (duracion) => {
//    InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.tiempoDuracion.isDisplayed()).to.equal(true);
    if(InfoActividadManualScreen.tiempoDuracion.isClickable()){
        InfoActividadManualScreen.tiempoDuracion.click();
        
    }else{
        console.log("No se puede dar clic")
    }
    
    let inputHora = duracion.substring(0,2);
    let inputMinuto = duracion.substring(3);
    //Recorrer Minutos
    let reconoce = true;
    let cont = 0;
 
    if(InfoActividadManualScreen.listaHoraDuracion.isDisplayed()){
         console.log("Dentro de hora")
         while(reconoce){
             cont = cont+1;
             if (InfoActividadManualScreen.getHoursTime(cont).getText() == inputHora) {
                InfoActividadManualScreen.getHoursTime(cont+1).click();
                 reconoce = false;
             }else{
                InfoActividadManualScreen.getHoursTime(cont).click(); 
             }                               
         }
         
    }else{
         console.log("No existe lista de hora")
    }
    /*
    //Recorrer Minutos
    reconoce = true;
    cont = 0;

    if(InfoActividadManualScreen.listaHoraDuracion.isDisplayed()){
        console.log("Dentro de minutos")
        while(reconoce){
            cont = cont+1;
            if (InfoActividadManualScreen.getMinutesTime(cont).getText() == inputMinuto) {
               InfoActividadManualScreen.getMinutesTime(cont+1).click();
                reconoce = false;
            }else{
               InfoActividadManualScreen.getMinutesTime(cont).click(); 
            }                               
        }
        
   }else{
        console.log("No existe lista de minutos")
    }
*/
})

When(/^Dar clic en guardar la duracion$/, () => {
    console.log("Guardar tiempo duracion")
//    InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.botonGuardarDuracion.isDisplayed()).to.equal(true);
    InfoActividadManualScreen.botonGuardarDuracion.click();
})


When(/^Ingresar la distancia '(.+)' recorrida$/, (distancia) => {
    console.log("Distancia recorrida")
//    InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.distanciaRecorrida.isDisplayed()).to.equal(true)
    InfoActividadManualScreen.distanciaRecorrida.click();
    InfoActividadManualScreen.distanciaRecorrida.setValue(distancia);
    driver.hideKeyboard();
    browser.pause(1000)
 })


When(/^Ingresar la frecuencia '(.+)' cardiaca$/, (frecuencia) => {   
    console.log("Frecuencia cardiaca")
  //  InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.frecuenciaCardiaca.isDisplayed()).to.equal(true)
    InfoActividadManualScreen.frecuenciaCardiaca.click();
    InfoActividadManualScreen.frecuenciaCardiaca.setValue(frecuencia);
    driver.hideKeyboard();
    console.log("Espacio de espera")
    expect(InfoActividadManualScreen.espacioParaValidacion.isDisplayed()).to.equal(true);
    browser.pause(1000)

})

Then(/^Clic en guardar actividad manual$/, () => {
    console.log("Guardar informacion")
    browser.pause(2000)
    if (InfoActividadManualScreen.botonGuardar.isDisplayed()) {
        InfoActividadManualScreen.botonGuardar.click();
        browser.pause(1000)
    } else {
       console.log("Objeto no disponible") 
    }
    
})

Then(/^Clic en confirmar la accion$/, () => {
    console.log("Confirmar guardar registro")
    //InfoActividadManualScreen.waitForIsShown(true);
    expect(InfoActividadManualScreen.modalConfirmar.isDisplayed()).to.equal(true);
    expect(InfoActividadManualScreen.botonConfirmar.isDisplayed()).to.equal(true);
    InfoActividadManualScreen.botonConfirmar.click();
    browser.pause(2000)
})
