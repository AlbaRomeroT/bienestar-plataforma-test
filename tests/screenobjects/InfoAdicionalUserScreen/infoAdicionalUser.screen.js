import AppScreen from '../app.screen';
import { DEFAULT_TIMEOUT } from '../../constants/constants';
import Gestures from '../../helpers/gestures'

const SELECTORS = {
    HOME_ADICIONAL: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-login > ion-content > ion-grid > ion-row > ion-col > div > div > div:nth-child(2) > p',
    TYPE_DOC: '#select',
    TIPOS_DOCUMENTOS: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1)',
    TYPE_CC: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(2)',
    TYPE_RIF: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(3)',
    TYPE_PEP: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(4)',
    TYPE_EXT: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(5)',
    TYPE_PASP: '#ion-overlay-1 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(6)',
    NUM_DOC: '#num_doc > input',
    CHK_COMERCIAL: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-login > ion-content > ion-grid > ion-row > ion-col > div > div > div.legalChecks > ion-grid > ion-row:nth-child(2) > ion-col:nth-child(1) > ion-checkbox',
    BOTON_CREAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-login > ion-content > ion-grid > ion-row > ion-col > div > div > div.content-btn-create-account > ion-grid > ion-row > ion-col:nth-child(1) > ion-button',
 
};

class InfoAdicionalUserScreen extends AppScreen{
    constructor() {
        super(SELECTORS.HOME_ADICIONAL);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME_ADICIONAL).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME_ADICIONAL).isDisplayed();
    }

    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    swipeDown(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }
 
    
    get typeDoc() {
        return $(SELECTORS.TYPE_DOC);
    }

    get tiposDocumentos() {
        return $(SELECTORS.TIPOS_DOCUMENTOS);
    }

    get tipoCedula() {
        return $(SELECTORS.TYPE_CC);
    }

    get tipoRIF() {
        return $(SELECTORS.TYPE_RIF);
    }

    get tipoPEP() {
        return $(SELECTORS.TYPE_PEP);
    }

    get tipoCedulaExtranjero() {
        return $(SELECTORS.TYPE_EXT);
    }

    get tipoPasaporte() {
        return $(SELECTORS.TYPE_PASP);
    }

    get numeroDocumento() {
        return $(SELECTORS.NUM_DOC);
    }
    
    get checkInfoComercial() {
        return $(SELECTORS.CHK_COMERCIAL);
    }

    get botonCrear() {
        return $(SELECTORS.BOTON_CREAR);
    }

}

export default new InfoAdicionalUserScreen(); 