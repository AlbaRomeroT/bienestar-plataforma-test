import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import PropositosHomePrincipalScreen from '../screenobjects/PropositosScreen/propositosHomePrincipal.screen';

Then(/^Ver opcion Propositos$/, () => {
    console.log("Opcion mis propositos");
    PropositosHomePrincipalScreen.waitForIsShown(true);
    expect(PropositosHomePrincipalScreen.isDisplayed()).to.equal(true)
 
})

When(/^Dar clic en Propositos$/, () => {
    expect(PropositosHomePrincipalScreen.botonIngresarOpcion.isDisplayed()).to.equal(true)
    console.log("Clic en Mis propositos");
    PropositosHomePrincipalScreen.botonIngresarOpcion.click();
    
})
