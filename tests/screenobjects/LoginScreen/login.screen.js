import { isMainThread } from 'worker_threads';
import AppScreen from '../app.screen';

const SELECTORS = {     
    LOGIN: '#loginInMail',
    INPUT_EMAIL: '#loginInMail',
    INPUT_PASSWORD: '#loginInPass',
    INGRESAR_BUTTON: '#loginUser',
    LOGIN_ERROR: '#myTabContent > div.error-login > div',
    
};

class LoginScreen extends AppScreen {
    constructor() {
        super(SELECTORS.LOGIN);
    }

    get inputEmail() {
        return $(SELECTORS.INPUT_EMAIL);
    }

    get inputPassword() {
        return $(SELECTORS.INPUT_PASSWORD);
    }

    get ingresarButton() {
        return $(SELECTORS.INGRESAR_BUTTON);
    }


    get loginError() {
        return $(SELECTORS.LOGIN_ERROR);
    }

}
export default new LoginScreen();

