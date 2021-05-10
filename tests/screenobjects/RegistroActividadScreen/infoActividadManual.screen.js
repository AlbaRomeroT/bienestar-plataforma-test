import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {

    HOME_ACTIVIDAD: 'ion-card-title.card-title',  
    TITTLE_ACTIVIDAD: 'ion-card-title.card-title',
    INPUT_ACTIVIDAD: '#state',
    FECHA_HORA_ACTIVIDAD: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(2) > ion-col > ion-item > ion-datetime',
    
    LISTA_HORA: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5)',
    HORA_ACTIVIDAD: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5) > div > button:nth-child',
    LISTA_MINUTOS: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6)',
    MINUTO_ACTIVIDAD: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6) > div > button:nth-child',
    
    TIEMPO_DURACION: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(3) > ion-col > ion-item > ion-datetime',
    LISTA_HORA_DURACION:'#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-right.hydrated',
    HORA_DURACION: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-right.hydrated > div > button:nth-child',
    LISTA_MINUTO_DURACION: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated',
    MINUTO_DURACION: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated > div > button:nth-child',

    INPUT_DISTANCIA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(4) > ion-col > ion-input > input',
    ASCENSO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(4) > ion-col:nth-child(2) > ion-input > input',
    DESCENSO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(4) > ion-col:nth-child(3) > ion-input > input',
    INPUT_FRECUENCIA: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(5) > ion-col > ion-item > ion-input > input',
    ESPACIO_VALIDAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-register-manual-activity > ion-content > form > ion-card > ion-card-content > ion-row:nth-child(6)',    
    BUTTON_GUARDAR_FECHA:'#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',
    BUTTON_CANCELAR_FECHA: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div.picker-toolbar-cancel.picker-toolbar-button.sc-ion-picker-md > button',
    BUTTON_GUARDAR_DURACION: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',

    BUTTON_GUARDAR: 'ion-button.action-button',

    TITLE_CONFIRMAR: 'ion-row.mt-14',
    BUTTON_CONFIRMAR: 'ion-button.btn-action',


 
};

class InfoActividadManualScreen extends AppScreen{
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
    
        getHours(datoHora) {
            return $(SELECTORS.HORA_ACTIVIDAD+'('+datoHora+')')
        }
    
        getMinutes(datoMinuto) {
            return $(SELECTORS.MINUTO_ACTIVIDAD+'('+datoMinuto+')')
        }

        getHoursTime(tiempoHora) {
            return $(SELECTORS.HORA_DURACION+'('+tiempoHora+')')
        }
    
        getMinutesTime(tiempoMinuto) {
            return $(SELECTORS.MINUTO_DURACION+'('+tiempoMinuto+')')
        }

        get tituloActividadManual() {
            return $(SELECTORS.TITTLE_ACTIVIDAD);
        }  
        
        get inputActividad() {
            return $(SELECTORS.INPUT_ACTIVIDAD);
        }

        get fechaHoraActividad() {
            return $(SELECTORS.FECHA_HORA_ACTIVIDAD);
        }

        get listaHoraActividad() {
            return $(SELECTORS.LISTA_HORA);
        }

        get horaActividad() {
            
        }

        get listaMinutoActividad() {
            return $(SELECTORS.LISTA_MINUTOS);
        }

        get minutosActividad() {
            
        }

        get botonGuardarFecha() {
            return $(SELECTORS.BUTTON_GUARDAR_FECHA);
        }
    
        get tiempoDuracion() {
            return $(SELECTORS.TIEMPO_DURACION);
        }

        get listaHoraDuracion() {
            return $(SELECTORS.LISTA_HORA_DURACION);
        }

        get horaDuracion() {
            
        }

        get listaMinutoDuracion() {
            return $(SELECTORS.LISTA_MINUTO_DURACION);
        }

        get minutoDuracion() {
            
        }

        get botonGuardarDuracion() {
            return $(SELECTORS.BUTTON_GUARDAR_DURACION);
        }

        get distanciaRecorrida() {
            return $(SELECTORS.INPUT_DISTANCIA);
        }
 
        get ascensoObtenido() {
            return $(SELECTORS.ASCENSO);
        }

        get descensoObtenido() {
            return $(SELECTORS.DESCENSO);
        }

        get frecuenciaCardiaca() {
            return $(SELECTORS.INPUT_FRECUENCIA);
        }

        get espacioParaValidacion() {
            return $(SELECTORS.ESPACIO_VALIDAR);
        }

        get botonGuardar() {
            return $(SELECTORS.BUTTON_GUARDAR);
        }

        get modalConfirmar() {
            return $(SELECTORS.TITLE_CONFIRMAR);
        }

        get botonConfirmar() {
            return $(SELECTORS.BUTTON_CONFIRMAR);
        }
    
    
    
    
}
    
 export default new InfoActividadManualScreen();    