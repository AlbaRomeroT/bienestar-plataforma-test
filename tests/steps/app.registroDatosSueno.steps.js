import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import RegistroManualActividadScreen from '../screenobjects/RegistroActividadScreen/registroManualActividad.screen';
import RegistroDatosSuenoScreen from '../screenobjects/RegistroDatosSuenoScreen/registroDatosSueno.screen';
         

Then(/^Ver opcion Registro datos sueno$/, () => {
    console.log("Opcion datos sueño");
    //Primer Swipe
    let yTo = 300
    let yFrom = 1000
    RegistroManualActividadScreen.swipeUp(yFrom, yTo)
    expect(RegistroManualActividadScreen.tituloRegistroDatosSuenio.isDisplayed()).to.equal(true) 

})

Then(/^Clic en Registro datos sueno$/, () => {
    console.log("Clic para registro datos sueño");
    RegistroManualActividadScreen.waitForIsShown(true)
    expect(RegistroManualActividadScreen.tituloRegistroDatosSuenio.isDisplayed()).to.equal(true)

    if(RegistroManualActividadScreen.botonRegistroDatosSuenio.isClickable()){
        RegistroManualActividadScreen.botonRegistroDatosSuenio.click();
        browser.pause(2000)
    }else{
        console.log("No se puede dar clic")
    } 
})

Then(/^Dar clic en Registro datos sueno$/, () => {
    console.log("Clic para registro datos sueño");
    RegistroManualActividadScreen.waitForIsShown(true)
    expect(RegistroManualActividadScreen.tituloRegistroDatosSuenio.isDisplayed()).to.equal(true)

    if(RegistroManualActividadScreen.botonRegistroDatosSuenio.isClickable()){
        RegistroManualActividadScreen.botonRegistroDatosSuenio.click();
    }else{
        console.log("No se puede dar clic")
    } 
})



Then(/^Ver formulario para registro de sueno$/, () => {
    console.log("Formulario ingreso informacion sueño");
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.tituloDatosSueno.isDisplayed()).to.equal(true) 
})


When(/^Clic en seleccionar la '(.+)' de dormir$/, (hora) => {
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.fechaHoraDormir.isDisplayed()).to.equal(true);
    if(RegistroDatosSuenoScreen.fechaHoraDormir.isClickable()){
        console.log("Dentro del if")
        RegistroDatosSuenoScreen.fechaHoraDormir.click();
    }else{
        console.log("No se puede dar clic")
    }
    let f = new Date();
    let diaActual = f.getDate();
    let horaActual = f.getHours();
    let minutoActual = f.getMinutes();

    let inputHora = new Date(hora);
    let newDay = inputHora.getDate();
    let newHora = inputHora.getHours();
    let newMinuto = inputHora.getMinutes();
        
    //Recorrer dia
    let reconoce = true;
    let cont = 0;

    if(RegistroDatosSuenoScreen.listaDiaSueno.isDisplayed()){
        console.log("Dentro de dia")
        cont = diaActual;
        while (reconoce){ 
            if (RegistroDatosSuenoScreen.getDaySleep(cont).getText() != newDay) {
                RegistroDatosSuenoScreen.getDaySleep(cont-1).click();
                reconoce = false;
            }else{
                //console.log("En el else")
                RegistroDatosSuenoScreen.getDaySleep(cont).click(); 
                reconoce = false;
            }
            cont = cont-1;                         
        }
    }else{
        console.log("No existe lista de dia")
    }


    //Recorrer hora
    reconoce = true;
    cont = 0;

    if(RegistroDatosSuenoScreen.listaHoraDormir.isDisplayed()){
        console.log("Dentro de hora dormir")
        cont = horaActual;
        if(horaActual > newHora){
            while (reconoce){ 
                if (RegistroDatosSuenoScreen.getHoursSleep(cont).getText() != newHora) {
                    //console.log("Dentro del if")
                    RegistroDatosSuenoScreen.getHoursSleep(cont-1).click();
                }else{
                    //console.log("En el else")
                    RegistroDatosSuenoScreen.getHoursSleep(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (RegistroDatosSuenoScreen.getHoursSleep(cont).getText() == newHora) {
                    RegistroDatosSuenoScreen.getHoursSleep(cont).click();
                    reconoce = false;
                }else{
                    RegistroDatosSuenoScreen.getHoursSleep(cont+1).click(); 
                }
                cont = cont+1;                    
            }
            
        }
    }else{
        console.log("No existe lista de hora sueño")
    }

/*
    //Recorrer Minutos
    reconoce = true;
    cont = 0;

    if(RegistroDatosSuenoScreen.listaMinutoDormir.isDisplayed()){
        console.log("Dentro de minutos sueño")
        cont = minutoActual;
        if(minutoActual > newMinuto){
            while (reconoce){ 
                if (RegistroDatosSuenoScreen.getMinutesSleep(cont).getText() != newMinuto) {
                    RegistroDatosSuenoScreen.getMinutesSleep(cont-1).click();
                }else{
                    RegistroDatosSuenoScreen.getMinutesSleep(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (RegistroDatosSuenoScreen.getMinutesSleep(cont).getText() == newMinuto) {
                    RegistroDatosSuenoScreen.getMinutesSleep(cont).click();
                    reconoce = false;
                }else{
                    RegistroDatosSuenoScreen.getMinutesSleep(cont+1).click(); 
                }
                cont = cont+1;                    
            }
            
        }
    }else{
        console.log("No existe lista de minutos sueño")
    }*/
})

When(/^Dar clic en guardar la fecha de dormir$/, () => {
    console.log("Guardar fecha sueño")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.botonGuardarDormir.isDisplayed()).to.equal(true);
    RegistroDatosSuenoScreen.botonGuardarDormir.click();
})

When(/^Clic en seleccionar la '(.+)' de levantar$/, (hora) => {
    console.log("Seleccionar la fecha de levantar")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.fechaHoraLevantar.isDisplayed()).to.equal(true);
    if(RegistroDatosSuenoScreen.fechaHoraLevantar.isClickable()){
//        console.log("Dentro del if fecha levantar")
        RegistroDatosSuenoScreen.fechaHoraLevantar.click();   
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

    if(RegistroDatosSuenoScreen.listaHoraLevantar.isDisplayed()){
        console.log("Dentro de hora levantar")
        cont = horaActual;
        if(horaActual > newHora){
            while (reconoce){ 
                if (RegistroDatosSuenoScreen.getHoursUp(cont).getText() != newHora) {
                    //console.log("Dentro del if")
                    RegistroDatosSuenoScreen.getHoursUp(cont-1).click();
                }else{
                    //console.log("En el else")
                    RegistroDatosSuenoScreen.getHoursUp(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (RegistroDatosSuenoScreen.getHoursUp(cont).getText() == newHora) {
                    RegistroDatosSuenoScreen.getHoursUp(cont).click();
                    reconoce = false;
                }else{
                    RegistroDatosSuenoScreen.getHoursUp(cont+1).click(); 
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

    if(RegistroDatosSuenoScreen.listaMinutoLevantar.isDisplayed()){
        console.log("Dentro de minutos")
        cont = minutoActual;
        if(minutoActual > newMinuto){
            while (reconoce){ 
                if (RegistroDatosSuenoScreen.getMinutesUp(cont).getText() != newMinuto) {
                    RegistroDatosSuenoScreen.getMinutesUp(cont-1).click();
                }else{
                    RegistroDatosSuenoScreen.getMinutesUp(cont).click(); 
                    reconoce = false;
                }
                cont = cont-1;                         
            }
        }else{
            while(reconoce){
                if (RegistroDatosSuenoScreen.getMinutesUp(cont).getText() == newMinuto) {
                    RegistroDatosSuenoScreen.getMinutesUp(cont).click();
                    reconoce = false;
                }else{
                    RegistroDatosSuenoScreen.getMinutesUp(cont+1).click(); 
                }
                cont = cont+1;                    
            }
            
        }
    }else{
        console.log("No existe lista de minutos")
    }*/
})

When(/^Dar clic en guardar la fecha de levantar$/, () => {
    console.log("Guardar fecha")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.botonGuardarLevantar.isDisplayed()).to.equal(true);
    RegistroDatosSuenoScreen.botonGuardarLevantar.click();
})

When(/^Clic en seleccionar el '(.+)' de sueno$/, (duracion) => {
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.tiempoDuracionSueno.isDisplayed()).to.equal(true);
    if(RegistroDatosSuenoScreen.tiempoDuracionSueno.isClickable()){
        //console.log("Dentro del if")
        RegistroDatosSuenoScreen.tiempoDuracionSueno.click();
        
    }else{
        console.log("No se puede dar clic")
    }
    
    let inputHora = duracion.substring(0,2);
    let inputMinuto = duracion.substring(3);
    //Recorrer Minutos
    let reconoce = true;
    let cont = 0;
 
    if(RegistroDatosSuenoScreen.listaHoraDuracion.isDisplayed()){
         console.log("Dentro de hora")
         while(reconoce){
             cont = cont+1;
             if (RegistroDatosSuenoScreen.getHoursTime(cont).getText() == inputHora) {
                RegistroDatosSuenoScreen.getHoursTime(cont+1).click();
                 reconoce = false;
             }else{
                RegistroDatosSuenoScreen.getHoursTime(cont).click(); 
             }                               
         }
         
    }else{
         console.log("No existe lista de hora")
    }
    
    //Recorrer Minutos
    reconoce = true;
    cont = 0;

    if(RegistroDatosSuenoScreen.listaHoraDuracion.isDisplayed()){
        console.log("Dentro de minutos")
        while(reconoce){
            cont = cont+1;
            if (RegistroDatosSuenoScreen.getMinutesTime(cont).getText() == inputMinuto) {
               RegistroDatosSuenoScreen.getMinutesTime(cont+1).click();
                reconoce = false;
            }else{
               RegistroDatosSuenoScreen.getMinutesTime(cont).click(); 
            }                               
        }
        
   }else{
        console.log("No existe lista de minutos")
    }

})

When(/^Dar clic en guardar el tiempo sueno$/, () => {
    console.log("Guardar tiempo de sueño")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.botonGuardarDuracion.isDisplayed()).to.equal(true);
    RegistroDatosSuenoScreen.botonGuardarDuracion.click();
})


When(/^Ingresar el '(.+)' de veces desperto$/, (vecesDespierto) => {
    console.log("Numero de veces despierto")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    expect(RegistroDatosSuenoScreen.inputVecesDespierto.isDisplayed()).to.equal(true)
    RegistroDatosSuenoScreen.inputVecesDespierto.click();
    RegistroDatosSuenoScreen.inputVecesDespierto.setValue(vecesDespierto);
    console.log("Ingresó informacion veces despierto")
    //RegistroDatosSuenoScreen.inputVecesDespierto.addValue("Enter");
    browser.pause(2000)
    driver.hideKeyboard();
    browser.pause(3000)
        
 })

Then(/^Clic en guardar datos de sueno$/, () => {
    console.log("Guardar informacion")
    RegistroDatosSuenoScreen.waitForIsShown(true);
    if (RegistroDatosSuenoScreen.botonGuardar.isDisplayed()) {
        RegistroDatosSuenoScreen.botonGuardar.click();
        browser.pause(2000)
    } else {
        console.log("Objeto No disponible")
    }
    
})

Then(/^Clic en confirmar guardado datos sueno$/, () => {
    console.log("Confirmar guardar registro")
    expect(RegistroDatosSuenoScreen.modalConfirmar.isDisplayed()).to.equal(true);
    expect(RegistroDatosSuenoScreen.botonConfirmar.isDisplayed()).to.equal(true);
    RegistroDatosSuenoScreen.botonConfirmar.click();
    browser.pause(2000)
})
