import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';


const SELECTORS = {
    HOME: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-row > app-widget-header > ion-grid > ion-row',   
    TITLE_ACTIVIDAD_MANUAL: '#activities',  
    TITLE_DATOS_SUENIO: '#sleep',  
    TITLE_VALOR_CORPORAL: '#body_val',  
    
    HOME_NUEVA_FUNCIONALIDAD: 'app-register-activity div div ion-grid.addGrid',
    BUTTON_REGISTRO_MANUAL: '#activities',
    BUTTON_DATOS_SUENIO: '#sleep',
    BUTTON_REGISTRO_CORPORAL: '#body_val',
 
};

class RegistroManualActividadScreen extends AppScreen{

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

    get grillaNuevaFuncionalidad(){
        return $(SELECTORS.HOME_NUEVA_FUNCIONALIDAD)
    }

    get tituloRegistroManualActividad() {
        return $(SELECTORS.TITLE_ACTIVIDAD_MANUAL);
    }

    get botonRegistroActividadManual() {
        return $(SELECTORS.BUTTON_REGISTRO_MANUAL);
    }

    get tituloRegistroDatosSuenio() {
        return $(SELECTORS.TITLE_DATOS_SUENIO);
    }

    get botonRegistroDatosSuenio() {
        return $(SELECTORS.BUTTON_DATOS_SUENIO);
    }

    get tituloRegistroValorCorporal() {
        return $(SELECTORS.TITLE_VALOR_CORPORAL);
    }

    get botonRegistroCorporal() {
        return $(SELECTORS.BUTTON_REGISTRO_CORPORAL);
    }

   

}

export default new RegistroManualActividadScreen();