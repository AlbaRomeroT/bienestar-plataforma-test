import { isMainThread } from 'worker_threads';
import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';


const SELECTORS = {
    HOME_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(1)',
    TITLE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(1) > app-title > ion-row',
    BUTTON_INGRESAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-my-wellness > ion-row:nth-child(2) > ion-col:nth-child(1) > ion-col > ion-card > ion-card-header > ion-row > ion-col',
};

class RegristroActividadScreen extends AppScreen{

    constructor() {
        super(SELECTORS.HOME_ACTIVIDAD);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME_ACTIVIDAD).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME_ACTIVIDAD).isDisplayed();
    }

    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    get tituloRegistroActividad() {
        return $(SELECTORS.TITLE);
    }

    get botonRegistroActividad() {
        return $(SELECTORS.BUTTON_INGRESAR);
    }

    

}

export default new RegristroActividadScreen();