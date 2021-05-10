import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import LoginScreen from '../screenobjects/LoginScreen/login.screen';
import DashboardScreen from '../screenobjects/DashboardScreen/Dashboard.screen';


Given(/^Usuario entra al home Bienestar$/, () => {
    console.log("Dentro del given");
    browser.pause(2000)
    LoginScreen.waitForIsShown(true);
 });

Then(/^Muestra mensaje de errorLogin '(.+)'$/, (error) => {
    console.log("Error al ingresar");
    browser.pause(5000)
    expect(LoginScreen.loginError.isDisplayed()).to.equal(true);
    expect(LoginScreen.loginError.getText()).to.equal(error);
});


When(/^Ingresar correo electronico '(.+)' del usuario$/, (email) => {
    console.log("ingresa usuario");
    LoginScreen.inputEmail.setValue(email)
    driver.hideKeyboard();
    
});

When(/^Ingresar password '(.+)' del usuario$/, (password) => {
    LoginScreen.inputPassword.click();
    LoginScreen.inputPassword.setValue(password);
    driver.hideKeyboard();
});

When(/^Dar clic boton iniciar sesion$/, () => {
    console.log("Boton inicio sesion")
    LoginScreen.ingresarButton.click();
    browser.pause(5000)
});


Then(/^Inicio Dashboard Bienestar$/, () => {
    console.log("entra a Dashboard")
    DashboardScreen.waitForIsShown(true)
    expect(DashboardScreen.isDisplayed()).to.equal(true)
});
