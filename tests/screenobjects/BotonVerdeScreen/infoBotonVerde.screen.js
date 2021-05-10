import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME_BOTON_VERDE: 'div.inner-content',
    INPUT_NUM_TELEFONO: 'input.cellphone',
    BUTTON_GUARDAR: '#ion-overlay-2 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-green-button-options > div > div > form > ion-grid:nth-child(3) > ion-row > ion-col > div > button',
    ERROR_NUM_TELEFONO: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-green-button-options > div > div > form > ion-grid:nth-child(2) > ion-row > ion-col',
    BUTTON_CERRAR: '#close-button',
};
    
class InfoBotonVerdeScreen extends AppScreen{

    constructor() {
        super(SELECTORS.HOME_BOTON_VERDE);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME_BOTON_VERDE).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME_BOTON_VERDE).isDisplayed();
    }

    get inputNumeroTelefonico() {
        return $(SELECTORS.INPUT_NUM_TELEFONO);
    }

    get botonGuardar() {
        return $(SELECTORS.BUTTON_GUARDAR);
    }

    get mensajeError() {
        return $(SELECTORS.ERROR_NUM_TELEFONO);
    }

    get botonCerrar() {
        return $(SELECTORS.BUTTON_CERRAR);
    }

}

export default new InfoBotonVerdeScreen();