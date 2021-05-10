import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: '#nameRegister',
    NOMBRE_USUARIO: '#nameRegister',
    APELLIDO_USUARIO: '#lastNameRegister',
    EMAIL: '#mailRegister',
    PASWWORD: '#passRegister',
    CONF_PASSWORD: '#confirmPassRegister',
    CHECK_TERMINOS: '#terms',
    MSJ_ERROR_EMAIL_EXISTE: '#content-register > div.error.user-use-error',
    MSJ_ERROR_VALIDAR_DATOS: '#content-register > div.error-register > div',
    
    //BUTTONS
    BOTON_SIGUIENTE: '#register',
    BTN_CREAR_CUENTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-login > ion-content > ion-row > ion-toolbar > ion-segment > ion-segment-button:nth-child(2)',
    
};


class RegisterUserScreen extends AppScreen {

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
    get btn_crear_cuenta() {
        return $(SELECTORS.BTN_CREAR_CUENTA);
    }

    get nombre_usuario() {
        return $(SELECTORS.NOMBRE_USUARIO);
    }

    get apellido_usuario() {
        return $(SELECTORS.APELLIDO_USUARIO);
    }

    get email() {
        return $(SELECTORS.EMAIL);
    }

    get password() {
        return $(SELECTORS.PASWWORD);
    }

    get conf_password() {
        return $(SELECTORS.CONF_PASSWORD);
    }

    get check_terminos() {
        return $(SELECTORS.CHECK_TERMINOS);
    }

    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    
    get boton_siguiente() {
        return $(SELECTORS.BOTON_SIGUIENTE);
    }
 
    get errorEmailExiste() {
        return $(SELECTORS.MSJ_ERROR_EMAIL_EXISTE);
    }

    get errorValidarDatos() {
        return $(SELECTORS.MSJ_ERROR_VALIDAR_DATOS);
    }
    
}
export default new RegisterUserScreen();


