import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'app-modal-confirm ion-content',
    TITLE: 'app-modal-confirm ion-content ion-row ion-col ion-label',
    
    //BUTTONS
    BUTTON_CONFIRMAR_ELIMINAR_REGISTRO: 'app-modal-confirm ion-button.btn-action',
 
};


class PropositosEliminarScreen extends AppScreen {

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

    get tituloModalConfirmacionEliminar() {
        return $(SELECTORS.TITLE);
    }
    

    get botonConfirmarElimnarProposito() {
        return $(SELECTORS.BUTTON_CONFIRMAR_ELIMINAR_REGISTRO);
    }
 
}
export default new PropositosEliminarScreen();
