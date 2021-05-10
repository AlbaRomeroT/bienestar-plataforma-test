import AppScreen from '../app.screen';
import { DEFAULT_TIMEOUT } from '../../constants/constants';
import Gestures from '../../helpers/gestures';

const SELECTORS  = {
    HOME: '#bienestar-with-data',
    BUTTON_BIENESTAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-home > ion-content > ion-grid > ion-row > ion-col.margin-top-4.bottom-no-padding-no-margin.md.hydrated > app-progress-health > div > ion-card > ion-grid > ion-row:nth-child(1) > ion-col.ion-text-end.col-space.minititle.md.hydrated > ion-label',
    TXT_PUNTOS_SALUD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-home > ion-content > ion-grid > ion-row > ion-col.margin-top-4.bottom-no-padding-no-margin.md.hydrated > app-progress-health > div > ion-card > ion-grid > ion-row.ion-text-center.md.hydrated > ion-col.progress-percentage-wrapper.md.hydrated > ion-label',
    BUTTON_MENTE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-progress-health-wellness > div > ion-grid > ion-row > ion-col:nth-child(3) > ion-col > ion-row:nth-child(2) > ion-col:nth-child(1) > ion-label',
    HOME_MENTE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-feeling > ion-row > app-widget-header',
    BUTTOM_ATRAS: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-feeling > ion-row > app-back-button-updated',
    BUTTON_CUERPO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-progress-health-wellness > div > ion-grid > ion-row > ion-col:nth-child(3) > ion-col > ion-row:nth-child(1) > ion-col:nth-child(1) > ion-label',
    HOME_CUERPO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-body > ion-row > app-widget-header',
    BUTTON_ATRAS_CUERPO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-body > ion-row > app-back-button-updated',
    BUTTON_HABITOS: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-wellness > ion-content > div > app-progress-health-wellness > div > ion-grid > ion-row > ion-col:nth-child(3) > ion-col > ion-row:nth-child(3) > ion-col:nth-child(1) > ion-label',
    HOME_HABITOS: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-lifestyle > ion-row > app-widget-header',
    BUTTON_ATRAS_HABITOS: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-lifestyle > ion-row > app-back-button-updated',
};

class IndicatorSaludScreen extends AppScreen {
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
        return $(SELECTORS.BUTTON_BIENESTAR)
    }

    get verPuntosSalud() {
        return $(SELECTORS.TXT_PUNTOS_SALUD)
    }

    get verMente() {
        return $(SELECTORS.BUTTON_MENTE)
    }

    get verHomeMente() {
        return $(SELECTORS.HOME_MENTE)
    }

    get botonAtras() {
        return $(SELECTORS.BUTTOM_ATRAS)
    }

    get verCuerpo() {
        return $(SELECTORS.BUTTON_CUERPO)
    }

    get verHomeCuerpo() {
        return $(SELECTORS.HOME_CUERPO)
    }

    get botonDevolverDeCuerpo() {
        return $(SELECTORS.BUTTON_ATRAS_CUERPO)
    }

    get verHabitos() {
        return $(SELECTORS.BUTTON_HABITOS)
    }

    get verHomeEstiloVida() {
        return $(SELECTORS.HOME_HABITOS)
    }

    get botonDevolverDeHabitos() {
        return $(SELECTORS.BUTTON_ATRAS_HABITOS)
    }

}

export default new IndicatorSaludScreen();