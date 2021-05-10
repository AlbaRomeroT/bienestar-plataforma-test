import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import IndicatorSaludCeroScreen from '../screenobjects/IndicatorScreen/indicatorSaludCero.screen';
import InfoMinimaSaludScreen from '../screenobjects/InfoMinimaSaludScreen/infoMinimaSalud.screen';
import Gestures from '../helpers/gestures'

When(/^Ver opcion indicador salud cero$/, () => {
    console.log("Indicador Cero");
    IndicatorSaludCeroScreen.waitForIsShown(true);
    
});

Then(/^Ver opcion completar informacion$/, () => {
    console.log("Ver Completar");
    expect(IndicatorSaludCeroScreen.complete.isDisplayed()).to.equal(true);

});

When(/^Dar clic en completar informacion$/, () => {
    IndicatorSaludCeroScreen.complete.click();
    browser.pause(2000)
});
  

Then(/^Ver formulario para completar informacion$/, () => {
    InfoMinimaSaludScreen.waitForIsShown(true);
    
});

When(/^Dar clic en genero$/, () => {
    expect(InfoMinimaSaludScreen.genero.isDisplayed()).to.equal(true);
    InfoMinimaSaludScreen.genero.click();
    browser.pause(2000)
});

When(/^Selecciona el '(.+)' del usuario$/, (sexo) => {
    console.log("Seleccion del genero")
    InfoMinimaSaludScreen.waitForIsShown(true);

    //SELECCIONA EL VALOR INGRESADO
    if(sexo === 'Masculino')
    {
        InfoMinimaSaludScreen.mascuLino.click();
    }else if(sexo === 'Femenino')
    {
        InfoMinimaSaludScreen.femenino.click();
    }else{
        console.log("No escojio nada")
    }
    
});

When(/^Clic en la fecha de nacimiento del usuario$/, () => {
    console.log("Fecha de nacimiento")
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.fecha_nacimiento.isDisplayed(true))
    InfoMinimaSaludScreen.fecha_nacimiento.click();
});

When(/^Selecciona la fecha de nacimiento del usuario$/, () => {
    console.log("Fecha de nacimiento")
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.fecha_nacimiento.isDisplayed(true))
    InfoMinimaSaludScreen.fecha_nacimiento.click();
    /* 
    browser.pause(3000)
    expect(InfoMinimaSaludScreen.diaNacimiento.isDisplayed(true))
    
    if(InfoMinimaSaludScreen.diaNacimiento.isDisplayed()){
    console.log("Dentro del dia")
    if (InfoMinimaSaludScreen.diaNueve.isClickable()) {
    console.log("El elemento es clickable")
    InfoMinimaSaludScreen.diaNueve.click();
    }
    }else{
    console.log("No existe lista de dias")
    }
    
    if(InfoMinimaSaludScreen.listaMeses.isDisplayed()){
    console.log("Dentro de meses")
    if (InfoMinimaSaludScreen.mesMayo.isClickable()) {
    console.log("El elemento es clickable")
    InfoMinimaSaludScreen.mesMayo.click();
    }
    }else{
    console.log("No existe lista de meses")
    }
    */

   let reconoce = true;
   let cont = 0;

    if(InfoMinimaSaludScreen.listaAniios.isDisplayed()){
        console.log("Dentro de años")
        while(reconoce){
            cont = cont+1;
            if (InfoMinimaSaludScreen.getAnnio(cont).getText() == "1995") {
                InfoMinimaSaludScreen.getAnnio(cont+1).click();
                reconoce = false;
            }else{
                InfoMinimaSaludScreen.getAnnio(cont).click(); 
            }                               
        }
        
    }else{
        console.log("No existe lista de años")
    }
});
    
Then(/^Clic en aceptar fecha$/, () => {
    InfoMinimaSaludScreen.waitForIsShown(true);
    console.log("A dar clic en aceptar")
    expect(InfoMinimaSaludScreen.btnAceptarFecha.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.btnAceptarFecha.isClickable()){
        InfoMinimaSaludScreen.btnAceptarFecha.click();
    } else {
        console.log("El elmento no es clickable")
    }
    
});

Then(/^Clic en cancelar fecha$/, () => {
    InfoMinimaSaludScreen.waitForIsShown(true);
    console.log("A dar clic en cancelar")
    expect(InfoMinimaSaludScreen.btnCancelarFecha.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.btnCancelarFecha.isClickable()){
        InfoMinimaSaludScreen.btnCancelarFecha.click();
        browser.pause(1000)
    } else {
        console.log("El elmento no es clickable")
    }
    
});

When(/^Clic en la estatura del usuario$/, () => {
    console.log("En estatura")
    browser.pause(3000)
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.estatura.isDisplayed()).to.equal(true);
    browser.pause(1000)
    if (InfoMinimaSaludScreen.estatura.isClickable()) {
        InfoMinimaSaludScreen.estatura.click();
    } 
});


When(/^Ingresa la estatura '(.+)' del usuario$/, (estatura) => {
    console.log("En estatura")
    //InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.estatura.isDisplayed()).to.equal(true);
    browser.pause(1000)
    if (InfoMinimaSaludScreen.estatura.isClickable()) {
        InfoMinimaSaludScreen.estatura.click();
        browser.pause(1000)   
        //SELECCIONA EL VALOR INGRESADO
        expect(InfoMinimaSaludScreen.isDisplayed()).to.equal(true)
        if(InfoMinimaSaludScreen.listaEstatura.isDisplayed()){
            if (estatura === '155') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-4-95', 13, 0) 
                if (InfoMinimaSaludScreen.estatura155.isClickable()) {
                    InfoMinimaSaludScreen.estatura155.click();
                }
            } else if (estatura === '160') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-4-100', 13, 0) 
                if (InfoMinimaSaludScreen.estatura160.isClickable()) {
                    InfoMinimaSaludScreen.estatura160.click();
                }
            } else if (estatura === '175') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-4-115', 13, 0) 
                if (InfoMinimaSaludScreen.estatura175.isClickable()) {
                    InfoMinimaSaludScreen.estatura175.click();
                }
            } else {
                console.log("El elemento no esta disponible")
            }
        }
        else{
            console.log("La lista no se encuentra")
        }
    
    } else {
        console.log("No es cliclable")
    }
    
});

Then(/^Clic en aceptar estatura$/, () => {
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.btnAceptarEstatura.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.btnAceptarEstatura.isClickable()){
        InfoMinimaSaludScreen.btnAceptarEstatura.click();
    } else {
        console.log("Elemento no clickable")
    }
    
});

Then(/^Clic en cancelar estatura$/, () => {
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.btnCancelarEstatura.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.btnCancelarEstatura.isClickable()){
        InfoMinimaSaludScreen.btnCancelarEstatura.click();
    } else {
        console.log("Elemento no clickable")
    }
    
});

When(/^Clic en el peso del usuario$/, () => {
    console.log("En peso")
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.peso.isDisplayed()).to.equal(true);
    browser.pause(1000)
    if (InfoMinimaSaludScreen.peso.isClickable()) {
        InfoMinimaSaludScreen.peso.click();
         
    }
    
});


When(/^Ingresa el peso '(.+)' del usuario$/, (peso) => {
    console.log("En peso")
    InfoMinimaSaludScreen.waitForIsShown(true);
    expect(InfoMinimaSaludScreen.peso.isDisplayed()).to.equal(true);
    browser.pause(1000)
    if (InfoMinimaSaludScreen.peso.isClickable()) {
        InfoMinimaSaludScreen.peso.click();
        browser.pause(1000)   
        //SELECCIONA EL VALOR INGRESADO
        expect(InfoMinimaSaludScreen.isDisplayed()).to.equal(true)
        if(InfoMinimaSaludScreen.listaPeso.isDisplayed()){
            browser.pause(1000)   
            if (peso === '50') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-5-22', 13, 0) 
                if (InfoMinimaSaludScreen.peso50.isClickable()) {
                    InfoMinimaSaludScreen.peso50.click();
                }
            } else if (peso === '58') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-5-30', 13, 0) 
                if (InfoMinimaSaludScreen.peso58.isClickable()) {
                    InfoMinimaSaludScreen.peso58.click();
                }
            } else if (peso === '60') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-5-32', 13, 0) 
                if (InfoMinimaSaludScreen.peso60.isClickable()) {
                    InfoMinimaSaludScreen.peso60.click();
                }
            } else if (peso === '65') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-5-37', 13, 0) 
                if (InfoMinimaSaludScreen.peso65.isClickable()) {
                    InfoMinimaSaludScreen.peso65.click();
                }
            } else if (peso === '70') {
                Gestures.checkIfDisplayedWithScrollDown('#alert-input-5-42', 13, 0) 
                if (InfoMinimaSaludScreen.peso70.isClickable()) {
                    InfoMinimaSaludScreen.peso70.click();
                }
            } else {
                console.log("El elemento no esta disponible")
            }
    
        }
        else{
            console.log("La lista no se encuentra")
        }
    
    } else {
        console.log("No es cliclable")
    }

});

Then(/^Clic en aceptar peso$/, () => {
    console.log("A dar clic en aceptar")
    expect(InfoMinimaSaludScreen.aceptarPesoButton.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.aceptarPesoButton.isClickable()){
        InfoMinimaSaludScreen.aceptarPesoButton.click();
    } else {
        console.log("por el else")
    }
    
});

Then(/^Clic en cancelar peso$/, () => {
    console.log("A dar clic en cancelar")
    expect(InfoMinimaSaludScreen.cancelarPesoButton.isDisplayed()).to.equal(true);
    if(InfoMinimaSaludScreen.cancelarPesoButton.isClickable()){
        InfoMinimaSaludScreen.cancelarPesoButton.click();
    } else {
        console.log("por el else")
    }
    
});

Then(/^Clic Ver indice de salud$/, () => {
    console.log(("Clic en ver indice de salud"))
    InfoMinimaSaludScreen.waitForIsShown(true);
    InfoMinimaSaludScreen.botonVerIndiceSalud.click();
    browser.pause(3000)
    
});


Then(/^Dar clic Ver indice de salud$/, () => {
    console.log(("Clic en ver indice de salud"))
    InfoMinimaSaludScreen.waitForIsShown(true);
    InfoMinimaSaludScreen.botonVerIndiceSalud.click();
    browser.pause(20000)
    
});
