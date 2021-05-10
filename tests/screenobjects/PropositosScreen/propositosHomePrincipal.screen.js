import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'strong.title-purpose',
    TITLE: 'strong.title-purpose',
    APELLIDO_USUARIO: '#lastNameRegister',
    EMAIL: '#mailRegister',
    PASWWORD: '#passRegister',
    CONF_PASSWORD: '#confirmPassRegister',
    CHECK_TERMINOS: '#terms',
    MSJ_ERROR_EMAIL_EXISTE: '#content-register > div.error.user-use-error',
    MSJ_ERROR_VALIDAR_DATOS: '#content-register > div.error-register > div',
    
    //BUTTONS
    BUTTON_INGRESAR: 'app-purpose div > div ion-row',
    BTN_CREAR_CUENTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-login > ion-content > ion-row > ion-toolbar > ion-segment > ion-segment-button:nth-child(2)',
    
};


class PropositosHomePrincipalScreen extends AppScreen {

    constructor() {
        super(SELECTORS.HOME);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME).isDisplayed();
    }

    get tituloPropositoHomeBienestar() {
        return $(SELECTORS.TITLE);
    }
    get botonIngresarOpcion() {
        return $(SELECTORS.BUTTON_INGRESAR);
    }
}
export default new PropositosHomePrincipalScreen();
