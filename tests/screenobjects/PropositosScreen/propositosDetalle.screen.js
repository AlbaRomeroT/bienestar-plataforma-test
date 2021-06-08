import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'app-purpose-description ion-row app-widget-header ion-grid ion-row > div.content-title',
    TITLE: 'app-purpose-description ion-row app-widget-header ion-grid ion-row > div.content-title',
    BUTTON_VOLVER_ATRAS: 'app-purpose-description ion-img.icon-arrow-back',
    
};


class PropositosDetalleScreen extends AppScreen {
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

    get tituloDetalleProposito() {
        return $(SELECTORS.TITLE);
    }
    
    get botonVolverAtras() {
        return $(SELECTORS.BUTTON_VOLVER_ATRAS);
    }
}
export default new PropositosDetalleScreen();