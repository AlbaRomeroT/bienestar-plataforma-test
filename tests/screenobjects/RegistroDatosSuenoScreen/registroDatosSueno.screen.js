import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {

    HOME_SUENIO: 'ion-card-title.card-title',  
    TITTLE_SUENIO: 'ion-card-title.card-title',
    FECHA_HORA_DORMIR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-sleep > ion-content > form > ion-row > ion-col > ion-card > ion-card-content > ion-list > ion-row > ion-col:nth-child(1) > ion-item > ion-datetime',
    
    LISTA_DIA: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(2)',
    DIA_DORMIR: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(2) > div > button:nth-child',
    LISTA_HORA_DORMIR: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5)',
    HORA_DORMIR: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5) > div > button:nth-child',
    LISTA_MINUTOS_DORMIR: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6)',
    MINUTO_DORMIR: '#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6) > div > button:nth-child',
 
    FECHA_HORA_LEVANTAR: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-sleep > ion-content > form > ion-row > ion-col > ion-card > ion-card-content > ion-list > ion-row > ion-col:nth-child(2) > ion-item > ion-datetime',
    LISTA_HORA_LEVANTAR:'#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5)',
    HORA_LEVANTAR: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(5) > div > button:nth-child',
    LISTA_MINUTO_LEVANTAR: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6)',
    MINUTO_LEVANTAR: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(6) > div > button:nth-child',
 
    TIEMPO_SUENO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-sleep > ion-content > form > ion-row > ion-col > ion-card > ion-card-content > ion-list > ion-row > ion-col:nth-child(4) > ion-item > ion-datetime',
    LISTA_HORA_DURACION:'#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-right.hydrated',
    HORA_DURACION: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-right.hydrated > div > button:nth-child',
    LISTA_MINUTO_DURACION: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated',
    MINUTO_DURACION: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated > div > button:nth-child',
  
    INPUT_VECES_DESPERTO: 'body > app-root > ion-app > app-footer > ion-footer > ion-tabs > div > ion-router-outlet > app-sleep > ion-content > form > ion-row > ion-col > ion-card > ion-card-content > ion-list > ion-row > ion-col:nth-child(5) > ion-item > ion-input > input',
    
    BUTTON_GUARDAR_DORMIR:'#ion-overlay-1 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',
    BUTTON_GUARDAR_LEVANTAR: '#ion-overlay-2 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',
    BUTTON_GUARDAR_HORA_SUENIO: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',
    
    BUTTON_GUARDAR: 'ion-col.boton-save-col',

    TITLE_CONFIRMAR: 'ion-row.mt-14',
    BUTTON_CONFIRMAR: 'ion-button.btn-action',


 
};

class RegistroDatosSuenoScreen extends AppScreen{
        constructor() {
            super(SELECTORS.HOME_SUENIO);
        }
    
        waitForIsShown(isShown = true) {
            return $(SELECTORS.HOME_SUENIO).waitForDisplayed({
                timeout: DEFAULT_TIMEOUT,
                reverse: !isShown,
            });
        }
    
        isDisplayed() {
            return $(SELECTORS.HOME_SUENIO).isDisplayed();
        }
    
        swipeUp(yTo, yFrom) {
            Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
        }
    
        getDaySleep(datoDiaDormir) {
            return $(SELECTORS.DIA_DORMIR+'('+datoDiaDormir+')')
        }
        
        getHoursSleep(datoHoraDormir) {
            return $(SELECTORS.HORA_DORMIR+'('+datoHoraDormir+')')
        }
    
        getMinutesSleep(datoMinutoDormir) {
            return $(SELECTORS.MINUTO_DORMIR+'('+datoMinutoDormir+')')
        }

        getHoursUp(tiempoHoraLevantar) {
            return $(SELECTORS.HORA_LEVANTAR+'('+tiempoHoraLevantar+')')
        }
    
        getMinutesUp(tiempoMinutoLevantar) {
            return $(SELECTORS.MINUTO_LEVANTAR+'('+tiempoMinutoLevantar+')')
        }

        getHoursTime(tiempoHora) {
            return $(SELECTORS.HORA_DURACION+'('+tiempoHora+')')
        }
    
        getMinutesTime(tiempoMinuto) {
            return $(SELECTORS.MINUTO_DURACION+'('+tiempoMinuto+')')
        }

        get tituloDatosSueno() {
            return $(SELECTORS.TITTLE_SUENIO);
        }  
        
        get fechaHoraDormir() {
            return $(SELECTORS.FECHA_HORA_DORMIR);
        }

        get listaDiaSueno() {
            return $(SELECTORS.LISTA_DIA);
        }
        
        get diaSuenio() {
            
        }

        get listaHoraDormir() {
            return $(SELECTORS.LISTA_HORA_DORMIR);
        }

        get horaActividad() {
            
        }

        get listaMinutoDormir() {
            return $(SELECTORS.LISTA_MINUTOS_DORMIR);
        }

        get minutosActividad() {
            
        }

        get botonGuardarDormir() {
            return $(SELECTORS.BUTTON_GUARDAR_DORMIR);
        }

        get fechaHoraLevantar() {
            return $(SELECTORS.FECHA_HORA_LEVANTAR);
        }

        get listaHoraLevantar() {
            return $(SELECTORS.LISTA_HORA_LEVANTAR);
        }

        get horaActividadLevantar() {
            
        }

        get listaMinutoLevantar() {
            return $(SELECTORS.LISTA_MINUTO_LEVANTAR);
        }

        get minutosActividadLevantar() {
            
        }

        get botonGuardarLevantar() {
            return $(SELECTORS.BUTTON_GUARDAR_LEVANTAR);
        }
    
        get tiempoDuracionSueno() {
            return $(SELECTORS.TIEMPO_SUENO);
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
            return $(SELECTORS.BUTTON_GUARDAR_HORA_SUENIO);
        }

        get inputVecesDespierto() {
            return $(SELECTORS.INPUT_VECES_DESPERTO);
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
    
 export default new RegistroDatosSuenoScreen();    