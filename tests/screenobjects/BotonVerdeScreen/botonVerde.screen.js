import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME_BOTON_VERDE: 'ion-tab-bar',
    BUTTON_INGRESAR: 'ion-fab-button',
};
    
class BotonVerdeScreen extends AppScreen{

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

    get botonIngresoBotonVerde() {
        return $(SELECTORS.BUTTON_INGRESAR);
    }

}

export default new BotonVerdeScreen();