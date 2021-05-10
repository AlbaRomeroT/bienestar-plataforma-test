import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';


const SELECTORS = {
    HOME: "#title",
    LINK_BIENESTAR: 'app-progress-health > div ion-card ion-grid ion-row ion-col.ion-text-end',
    BUTTON_BIENESTAR: '#tab-button-wellness',
    TXT_PUNTOS_SALUD: '#with-data',

 };

class DashboardScreen extends AppScreen {
    
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


    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    get opcionBienestar() {
        return $(SELECTORS.LINK_BIENESTAR)
    }

    get botonBienestar() {
        return $(SELECTORS.BUTTON_BIENESTAR)
    }

    get verPuntosSalud() {
        return $(SELECTORS.TXT_PUNTOS_SALUD)
    }
 
}

export default new DashboardScreen();