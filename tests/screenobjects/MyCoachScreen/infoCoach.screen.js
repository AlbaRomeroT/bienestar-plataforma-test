import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME_COACH: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-row > app-widget-header > ion-grid > ion-row',
    TITLE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-row > app-widget-header > ion-grid > ion-row > div.content-title',
 
    RADIO_BUTTON_BIEN: 'ion-radio.radio',
    BUTTON_GUARDAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > ion-row > ion-col:nth-child(2) > ion-button',
    BUTTON_OMITIR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > ion-row > ion-col:nth-child(1) > ion-button',
    
    HOME_CUESTIONARIO: 'ion-radio.radio',
    BUTTON_SIEMPRE: 'ion-radio.radio',
    BUTTON_MENUDO_FRUTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > div:nth-child(12) > div.user-chat > div > div > ion-radio-group > ion-item:nth-child(2) > ion-radio',
    BUTTON_AVECES_FRUTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > div:nth-child(12) > div.user-chat > div > div > ion-radio-group > ion-item:nth-child(3) > ion-radio',
    BUTTON_CASI_FRUTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > div:nth-child(12) > div.user-chat > div > div > ion-radio-group > ion-item:nth-child(4) > ion-radio',
    BUTTON_NUNCA_FRUTA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-coach > ion-content > div.chat > ion-list > div:nth-child(12) > div.user-chat > div > div > ion-radio-group > ion-item:nth-child(5) > ion-radio',
};
    
class InfoCoachScreen extends AppScreen{

    constructor() {
        super(SELECTORS.HOME_COACH);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME_COACH).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME_COACH).isDisplayed();
    }

    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    get tituloMyCoach() {
        return $(SELECTORS.TITLE);
    }

    get suenaBien() {
        return $(SELECTORS.RADIO_BUTTON_BIEN);
    }

    get botonGuardar() {
        return $(SELECTORS.BUTTON_GUARDAR);
    }

    get botonOmitir() {
        return $(SELECTORS.BUTTON_OMITIR);
    }

    get cuestionario() {
        return $(SELECTORS.HOME_CUESTIONARIO);
    }

    get seleccionSiempre() {
        return $(SELECTORS.BUTTON_SIEMPRE);
    }

    get seleccionAmenudo() {
        return $(SELECTORS.BUTTON_MENUDO_FRUTA);
    }

    get seleccionAveces() {
        return $(SELECTORS.BUTTON_AVECES_FRUTA);
    }

    get seleccionCasiNunca() {
        return $(SELECTORS.BUTTON_CASI_FRUTA);
    }

    get seleccionNunca() {
        return $(SELECTORS.BUTTON_NUNCA_FRUTA);
    }

}

export default new InfoCoachScreen();