import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(2)',
    TITLE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(2) > app-title',
    
    //BUTTONS
    BUTTON_INGRESAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(2) > ion-col > ion-card > ion-card-header > ion-row > ion-col > img',
    
};


class PropositosHomeBienestarScreen extends AppScreen {

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

    get tituloPropositoHomeBienestar() {
        return $(SELECTORS.TITLE);
    }
    get botonIngresarOpcion() {
        return $(SELECTORS.BUTTON_INGRESAR);
    }
}
export default new PropositosHomeBienestarScreen();
