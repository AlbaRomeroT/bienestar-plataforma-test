import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-row > app-widget-header > ion-grid > ion-row',   
    TITLE_ACTIVIDAD_RECIENTE: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities:nth-child(3) > ion-content > div > div > app-register-activity > div > ion-card > div.ion-margin-vertical > div:nth-child(2) > app-title > ion-row',
    TITLE_TODAS_ACTIVIDADES: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-content > div > div > app-register-activity > div > ion-card > div.ion-margin-vertical > div:nth-child(3) > app-title > ion-row',
    TODAS_ACTIVIDADES1: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-content > div > div > app-register-activity > div > ion-card > div.ion-margin-vertical > div:nth-child(2) > app-title > ion-row',
    BUSCAR_ACTIVIDAD: '#finder > ion-input > input',
    LISTA_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-content > div > div > app-register-activity > div > div > div.ion-padding > div > div.activitiesgruper > ion-list > ion-item > ion-label',
 
    HOME_ACTIVIDAD_CRONOMETRO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-content > div > div > app-register-activity > div > div > div.progress-wrapper',
    INICIO_ACTIVIDAD: '#play',
    PAUSE_ACTIVIDAD: '#pause',
    REPLAY_ACTIVIDAD: '#resumen',
    SAVE_ACTIVIDAD: '#save',
    DELETE_ACTIVIDAD: '#stop',
    ATRAS: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-row > app-back-button-updated > ion-img',

    HOME_ELIMINAR_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row:nth-child(1) > ion-col:nth-child(2) > ion-label',
    BUTTON_BORRAR_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row.text-align-center.md.hydrated > div > ion-col:nth-child(1) > ion-button',
    BUTTON_CANCELAR_BORRAR_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row.text-align-center.md.hydrated > div > ion-col:nth-child(2) > ion-button',

    HOME_AGREGAR_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row:nth-child(1) > ion-col:nth-child(2) > ion-label',
    BUTTON_AGREGAR_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row.text-align-center.md.hydrated > div > ion-col:nth-child(1) > ion-button',
    BUTTON_CANCELAR_REGISTRO_ACTIVIDAD: '#ion-overlay-1 > div.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md > app-modal-activities > ion-content > ion-grid > ion-row.text-align-center.md.hydrated > div > ion-col:nth-child(2) > ion-button',

    BUTTON_HISTORIAL_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities:nth-child(4) > ion-content > ion-segment > ion-segment-button:nth-child(2)',
    HOME_HISTORIAL_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-activities > ion-content > div > div > app-history-activity > div',

};

class InfoActividadScreen extends AppScreen{
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

    get actividadReciente() {
        return $(SELECTORS.TITLE_ACTIVIDAD_RECIENTE);
    }

    get todasActividades() {
        return $(SELECTORS.TITLE_TODAS_ACTIVIDADES);
    }

    get todasActividades1() {
        return $(SELECTORS.TODAS_ACTIVIDADES1);
    }

    get inputBuscarActividad() {
        return $(SELECTORS.BUSCAR_ACTIVIDAD);
    }

    get listaActividad() {
        return $(SELECTORS.LISTA_ACTIVIDAD);
    }

    get homeActividadCronometro() {
        return $(SELECTORS.HOME_ACTIVIDAD_CRONOMETRO);
    }

    get inicioActividad() {
        return $(SELECTORS.INICIO_ACTIVIDAD);
    }

    get pausaActividad() {
        return $(SELECTORS.PAUSE_ACTIVIDAD);
    }

    get reanudarActividad() {
        return $(SELECTORS.REPLAY_ACTIVIDAD);
    }
 
    get guardarActividad() {
        return $(SELECTORS.SAVE_ACTIVIDAD);
    }

    get eliminarActividad() {
        return $(SELECTORS.DELETE_ACTIVIDAD);
    }

    get homeEliminarActividad() {
        return $(SELECTORS.HOME_ELIMINAR_ACTIVIDAD);
    }

    get botonBorrarActividad() {
        return $(SELECTORS.BUTTON_BORRAR_ACTIVIDAD);
    }

    get cancelarBorrarActividad() {
        return $(SELECTORS.BUTTON_CANCELAR_BORRAR_ACTIVIDAD);
    }

    get homeAgregarActividad() {
        return $(SELECTORS.HOME_AGREGAR_ACTIVIDAD);
    }
 
    get botonAgregarActividad() {
        return $(SELECTORS.BUTTON_AGREGAR_ACTIVIDAD);
    }
 
    get cancelarAgregarActividad() {
        return $(SELECTORS.BUTTON_CANCELAR_REGISTRO_ACTIVIDAD);
    }

    get regresarListadoActividades() {
        return $(SELECTORS.ATRAS);
    }

    get historialActividades() {
        return $(SELECTORS.BUTTON_HISTORIAL_ACTIVIDAD);
    }

    get homeHistorialActividades() {
        return $(SELECTORS.HOME_HISTORIAL_ACTIVIDAD);
    }


}

export default new InfoActividadScreen();