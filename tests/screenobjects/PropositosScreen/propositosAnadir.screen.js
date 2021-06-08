import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'app-purpose-add ion-row app-widget-header ion-grid ion-row > div.content-title',
    TITLE: 'app-purpose-add ion-row app-widget-header ion-grid ion-row > div.content-title',
    HOME_DETALLE_PROPOSITO: 'app-purpose-add ion-content ion-card ion-card-content.card-content',
    
    //BUTTONS
    BUTTON_ANADIR_PROPOSITO: 'ion-button.action-button-right',   
    BUTTON_CONFIRMAR_REGISTRO: 'app-modal-alert ion-button',
    BUTTON_CONFIRMAR_ELIMINAR_REGISTRO: 'app-modal-confirm ion-button.btn-action',

    //BUTTONS CATEGORIAS
    BUTTON_ACTIVIDAD_FISICA:'#seg-movement',
    BUTTON_HABITOS:'#seg-body',
    BUTTON_MENTE:'#seg-lifestyle',
    BUTTON_NUTRICION:'#seg-nutrition',
    BUTTON_SUENO:'#seg-sleep',

 
};


class PropositosAnadirScreen extends AppScreen {

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

    get tituloPropositoAddHomeBienestar() {
        return $(SELECTORS.TITLE);
    }
    
    get homeDetallePropositoASeleccionar() {
        return $(SELECTORS.HOME_DETALLE_PROPOSITO);
    }
    
    get botonAnadirPropositoSeleccionado() {
        return $(SELECTORS.BUTTON_ANADIR_PROPOSITO);
    }

    get botonConfirmarInsertarProposito() {
        return $(SELECTORS.BUTTON_CONFIRMAR_REGISTRO);
    }

    get botonConfirmarElimnarProposito() {
        return $(SELECTORS.BUTTON_CONFIRMAR_ELIMINAR_REGISTRO);
    }

    get botonActividadFisica() {
        return $(SELECTORS.BUTTON_ACTIVIDAD_FISICA);
    }

    get botonHabitos() {
        return $(SELECTORS.BUTTON_HABITOS);
    }

    get botonMente() {
        return $(SELECTORS.BUTTON_MENTE);
    }

    get botonNutricion() {
        return $(SELECTORS.BUTTON_NUTRICION);
    }

    get botonSuenio() {
        return $(SELECTORS.BUTTON_SUENO);
    }
 
}
export default new PropositosAnadirScreen();
