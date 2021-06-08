import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'app-purpose ion-row app-widget-header ion-grid ion-row > div.content-title',
    TITLE: 'app-purpose ion-row app-widget-header ion-grid ion-row > div.content-title',
    TITLE_ADD_PROPOSITO: 'app-purpose-add ion-row app-widget-header ion-grid ion-row > div.content-title',
    HOME_DETALLE_PROPOSITO: 'app-purpose-add ion-content ion-card ion-card-content.card-content',
    TITLE_DETALLE_PROPOSITO: 'app-purpose-description ion-row app-widget-header ion-grid ion-row > div.content-title',
    
    //BUTTONS
    BUTTON_ANADIR: 'ion-button.action-button.md.button.button-none',
    BUTTON_ANADIR_PROPOSITO: 'ion-button.action-button-right',
    BUTTON_EDITAR_PROPOSITO: 'ion-button > span',
    BUTTON_ELIMINAR_PROPOSITO: 'ion-button.action-button.md.button.button-block',
    BUTTON_VOLVER_ATRAS: 'ion-img.icon-arrow-back',
    BUTTON_DETALLE_PROPOSITO: 'ion-button.action-button',
    BUTTON_FINALIZADO: '#seg-completed',  
};


class HomePropositosScreen extends AppScreen {

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
    
    get botonAnadirProposito() {
        return $(SELECTORS.BUTTON_ANADIR);
    }

    get tituloAnadirProposito() {
        return $(SELECTORS.TITLE_ADD_PROPOSITO);
    }

    get homeDetallePropositoASeleccionar() {
        return $(SELECTORS.HOME_DETALLE_PROPOSITO);
    }

    get botonAnadirPropositoSeleccionado() {
        return $(SELECTORS.BUTTON_ANADIR_PROPOSITO);
    }
   
    get botonEliminarProposito() {
        return $(SELECTORS.BUTTON_ELIMINAR_PROPOSITO);
    }

    get botonEditarProposito() {
        return $(SELECTORS.BUTTON_EDITAR_PROPOSITO);
    }
 
    get botonVolverAtras() {
        return $(SELECTORS.BUTTON_VOLVER_ATRAS);
    }

    get botonDetalleProposito() {
        return $(SELECTORS.BUTTON_DETALLE_PROPOSITO);
    }

    get tituloDetalleProposito() {
        return $(SELECTORS.TITLE_DETALLE_PROPOSITO);
    }

    get botonPropositoFinalizado() {
        return $(SELECTORS.BUTTON_FINALIZADO);
    }


}
export default new HomePropositosScreen();
