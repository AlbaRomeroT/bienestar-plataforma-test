import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import RegisterUserScreen from '../screenobjects/RegisterUser/registerUser.screen';
import InfoAdicionalUserScreen from '../screenobjects/InfoAdicionalUserScreen/infoAdicionalUser.screen'
import Gestures from '../helpers/gestures';


When(/^Dar clic opcion crear cuenta$/, () => {
    console.log("Opcion crear cuenta");
    
    RegisterUserScreen.btn_crear_cuenta.click();
    browser.pause(1000)
    
})

When(/^Ingresa nombre '(.+)' del usuario$/, (nombre) => {
    browser.pause(1000)
    RegisterUserScreen.nombre_usuario.setValue(nombre)
    driver.hideKeyboard();    
})

When(/^Ingresa apellido '(.+)' del usuario$/, (apellido) => {
    browser.pause(1000)
    RegisterUserScreen.apellido_usuario.setValue(apellido)
    driver.hideKeyboard();
    RegisterUserScreen.email.click();
});

When(/^Ingresa correo '(.+)' del usuario$/, (email) => {
    RegisterUserScreen.email.setValue(email);
    driver.hideKeyboard();
    RegisterUserScreen.password.click();
});

When(/^Ingresa password '(.+)' del usuario$/, (password) => {
    RegisterUserScreen.password.setValue(password);
    browser.pause(1000)
    driver.hideKeyboard();
    RegisterUserScreen.conf_password.click();
});

When(/^Confirma password '(.+)' del usuario$/, (confpassword) => {
    RegisterUserScreen.conf_password.setValue(confpassword);
    driver.hideKeyboard();
    browser.pause(1000)
})

When(/^Acepta terminos '(.+)' y condiciones$/, (terminos) => {
    browser.pause(1000)
    expect(RegisterUserScreen.check_terminos.isDisplayed()).to.equal(true)
    if(terminos === 'True')
    {
        RegisterUserScreen.check_terminos.click();
    }
})

When(/^Da clic en el boton siguiente$/, () => {
    expect(RegisterUserScreen.boton_siguiente.isDisplayed()).to.equal(true)
    RegisterUserScreen.boton_siguiente.click();
    browser.pause(3000)
})

When(/^validar mensaje usuario existente$/, () => {
    browser.pause(1000)
    expect(RegisterUserScreen.errorEmailExiste.isDisplayed()).to.equal(true)
    if (RegisterUserScreen.errorEmailExiste.isDisplayed()) {
        console.log("Email existente")
    } else if (RegisterUserScreen.errorValidarDatos.isDisplayed()) {
        console.log("Validar datos")
    } else {
        console.log("No hay error") 
    }
    browser.pause(2000)
})

When(/^Ver informacion adicional$/, () => {
    console.log("Informacion Adicional");
    browser.pause(1000)
    InfoAdicionalUserScreen.waitForIsShown(true);
 
})

When(/^Seleccionar tipo documento '(.+)' del usuario$/, (tipoDocumento) => {
    console.log("Tipo Documento");
    expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
    InfoAdicionalUserScreen.typeDoc.click();
    //Validar Popup Tipos de documentos
    expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
    expect(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed()).to.equal(true)
    
    if(tipoDocumento === 'Cedula')
    {   
        if(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed())
        {
            expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
            expect(InfoAdicionalUserScreen.tipoCedula.isDisplayed()).to.equal(true)
            if(InfoAdicionalUserScreen.tipoCedula.isClickable()){
                InfoAdicionalUserScreen.tipoCedula.click();
            }else{
                console.log("No se puede dar clic")
            }
        }
        else{
            console.log("No esta el objeto");
        }
    }else if(tipoDocumento === 'RIF'){
        if(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed())
        {
            expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
            expect(InfoAdicionalUserScreen.tipoRIF.isDisplayed()).to.equal(true)
            if(InfoAdicionalUserScreen.tipoRIF.isClickable()){
                InfoAdicionalUserScreen.tipoRIF.click();
            }else{
                console.log("No se puede dar clic")
            }
        }
        else{
            console.log("No esta el objeto");
        }
    }else if(tipoDocumento === 'PEP'){
        if(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed())
        {
            expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
            expect(InfoAdicionalUserScreen.tipoPEP.isDisplayed()).to.equal(true)
            if(InfoAdicionalUserScreen.tipoPEP.isClickable()){
                InfoAdicionalUserScreen.tipoPEP.click();
            }else{
                console.log("No se puede dar clic")
            }
        }
        else{
            console.log("No esta el objeto");
        }
    }else if(tipoDocumento === 'Extranjeria'){
        if(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed())
        {
            expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
            expect(InfoAdicionalUserScreen.tipoCedulaExtranjero.isDisplayed()).to.equal(true)
            if(InfoAdicionalUserScreen.tipoCedulaExtranjero.isClickable()){
                InfoAdicionalUserScreen.tipoCedulaExtranjero.click();
            }else{
                console.log("No se puede dar clic")
            }
        }
        else{
            console.log("No esta el objeto");
        }
    }else if(tipoDocumento === 'Pasaporte'){
        if(InfoAdicionalUserScreen.tiposDocumentos.isDisplayed())
        {
            expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
            expect(InfoAdicionalUserScreen.tipoPasaporte.isDisplayed()).to.equal(true)
            if(InfoAdicionalUserScreen.tipoPasaporte.isClickable()){
                InfoAdicionalUserScreen.tipoPasaporte.click();
            }else{
                console.log("No se puede dar clic")
            }
        }
        else{
            console.log("Documento de identificacion invalido");
        }
    }else{
        console.log("Tipo de documento No Existe");
    }

})

When(/^Ingresar numero documento '(.+)' del usuario$/, (numeroDeDocumento) => {
    InfoAdicionalUserScreen.waitForIsShown(true);
    expect(InfoAdicionalUserScreen.isDisplayed()).to.equal(true)
    InfoAdicionalUserScreen.numeroDocumento.click();
    //browser.pause(10000)
    expect(InfoAdicionalUserScreen.numeroDocumento.isDisplayed()).to.equal(true)
    InfoAdicionalUserScreen.numeroDocumento.setValue(numeroDeDocumento);
    driver.hideKeyboard();
    browser.pause(1000)
    
})

When(/^Aceptar envio informacion '(.+)' comercial$/, (infoComercial) => {
    if(infoComercial === 'True')
    {
        InfoAdicionalUserScreen.checkInfoComercial.click();
    }else{
        console.log("No se selecciona esta opción");
    }
    browser.pause(1000)
})

Then(/^Dar clic en Crear Cuenta$/, () => {
    console.log("boton crear");
    //Primer Swipe
    let yTo = 300
    let yFrom = 700
    InfoAdicionalUserScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)
    expect(InfoAdicionalUserScreen.botonCrear.isDisplayed()).to.equal(true)
    InfoAdicionalUserScreen.botonCrear.click();
    browser.pause(3000)

})
