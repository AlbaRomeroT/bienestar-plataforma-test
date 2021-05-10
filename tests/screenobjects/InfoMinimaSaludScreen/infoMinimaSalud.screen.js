import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures';
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: '#dacadoo > p',
    GENERO: '#select',
    MASCULINO: '#ion-overlay-2 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(2)',
    FEMENINO: '#ion-overlay-2 > div.action-sheet-wrapper.ion-overlay-wrapper.sc-ion-action-sheet-md > div > div:nth-child(1) > button:nth-child(3)',
    FECHA_NACIMIENTO: '#time',//'#time',
    INPUT_FECHA_NACIMIENTO: '#time > input',
    DAY: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-right.hydrated',
    MONTH: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column:nth-child(3)',
    YEAR: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated > div > button', 
    ANNIO: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-columns.sc-ion-picker-md > ion-picker-column.sc-ion-picker-md.md.picker-col.picker-opts-left.hydrated > div > button:nth-child',
    
    ESTATURA: '#dacadoo > div.form-content.ng-invalid.ng-touched.ng-dirty > ion-item:nth-child(4) > ion-select',
    HOME_ESTATURA: '#ion-overlay-4 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-radio-group.sc-ion-alert-ios',
    EST_155: '#alert-input-4-95',
    EST_160: '#alert-input-4-100',
    EST_175: '#alert-input-4-115',

    PESO: '#dacadoo > div.form-content.ng-invalid.ng-touched.ng-dirty > ion-item:nth-child(5) > ion-select',
    HOME_PESO: '#ion-overlay-5 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-radio-group.sc-ion-alert-ios',
    PESO_50: '#alert-input-5-22',
    PESO_58: '#alert-input-5-30',
    PESO_60: '#alert-input-5-32',
    PESO_65: '#alert-input-5-37',
    PESO_70: '#alert-input-5-42',
    /* BUTTONS */
    BUTTON_ACEPTAR_FECHA: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div:nth-child(2) > button',
    BUTTON_CANCELAR_FECHA: '#ion-overlay-3 > div.picker-wrapper.ion-overlay-wrapper.sc-ion-picker-md > div.picker-toolbar.sc-ion-picker-md > div.picker-toolbar-cancel.picker-toolbar-button.sc-ion-picker-md > button',
    BUTTON_ACEPTAR_ESTATURA:'#ion-overlay-4 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-button-group.sc-ion-alert-ios > button:nth-child(2)',
    BUTTON_CANCELAR_ESTATURA: '#ion-overlay-4 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-button-group.sc-ion-alert-ios > button.alert-button.ion-focusable.ion-activatable.alert-button-role-cancel.sc-ion-alert-ios',
    BUTTON_ACEPTAR_PESO: '#ion-overlay-5 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-button-group.sc-ion-alert-ios > button:nth-child(2)',
    BUTTON_CANCELAR_PESO: '#ion-overlay-5 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-button-group.sc-ion-alert-ios > button.alert-button.ion-focusable.ion-activatable.alert-button-role-cancel.sc-ion-alert-ios',
    BUTTON_VER_INDICE: '#dacadoo > ion-content > ion-grid > ion-col > ion-button',
};

class InfoMinimaSaludScreen extends AppScreen {
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

    swipeUp(yFrom) {
        Gestures.swipeUp(yFrom);//.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }

    getAnnio(datoYear) {
        return $(SELECTORS.ANNIO+'('+datoYear+')')
    }

    get genero() {
        return $(SELECTORS.GENERO)
    }

    get mascuLino() {
        return $(SELECTORS.MASCULINO)
    }

    get femenino() {
        return $(SELECTORS.FEMENINO)
    }

    get fecha_nacimiento() {
        return $(SELECTORS.FECHA_NACIMIENTO)
    }

    get inputFechaNacimiento() {
        return $(SELECTORS.INPUT_FECHA_NACIMIENTO)
    }

    get diaNacimiento() {
        return $(SELECTORS.DAY)
    }
 
    get listaMeses() {
       return $(SELECTORS.MONTH)
    }

    get listaAniios() {
        return $(SELECTORS.YEAR)
    }

    get annio3() {
        return $(SELECTORS.ANNIO_3)
    }

    get annio5() {
        return $(SELECTORS.ANNIO_5)
    }

    get annio7() {
        return $(SELECTORS.ANNIO_7)
    }

    get annio9() {
        return $(SELECTORS.ANNIO_9)
    }

    get annio11() {
        return $(SELECTORS.ANNIO_11)
    }

    get annio13() {
        return $(SELECTORS.ANNIO_13)
    }

    get annio15() {
        return $(SELECTORS.ANNIO_15)
    }

    get annio17() {
        return $(SELECTORS.ANNIO_17)
    }

    get annio19() {
        return $(SELECTORS.ANNIO_19)
    }

    get annio21() {
        return $(SELECTORS.ANNIO_21)
    }

    get annio23() {
        return $(SELECTORS.ANNIO_23)
    }

    get annio25() {
        return $(SELECTORS.ANNIO_25)
    }

    get annio27() {
        return $(SELECTORS.ANNIO_27)
    }

    get annio29() {
        return $(SELECTORS.ANNIO_29)
    }

    get annio31() {
        return $(SELECTORS.ANNIO_31)
    }

    get btnAceptarFecha() {
        return $(SELECTORS.BUTTON_ACEPTAR_FECHA)
    }

    get btnCancelarFecha() {
        return $(SELECTORS.BUTTON_CANCELAR_FECHA)
    }

    get estatura() {
        return $(SELECTORS.ESTATURA)
    }

    get listaEstatura() {
        return $(SELECTORS.HOME_ESTATURA)
    }
    get estatura155(){
        return $(SELECTORS.EST_155)
    }

    get estatura160(){
        return $(SELECTORS.EST_160)
    }

    get estatura175(){
        return $(SELECTORS.EST_175)
    }

    get btnAceptarEstatura() {
        return $(SELECTORS.BUTTON_ACEPTAR_ESTATURA)
    }

    get btnCancelarEstatura() {
        return $(SELECTORS.BUTTON_CANCELAR_ESTATURA)
    }

    get peso() {
        return $(SELECTORS.PESO)
    }

    get listaPeso() {
        return $(SELECTORS.HOME_PESO)
    }

    get peso50() {
        return $(SELECTORS.PESO_50)
    }

    get peso58() {
        return $(SELECTORS.PESO_58)
    }

    get peso60() {
        return $(SELECTORS.PESO_60)
    }

    get peso65() {
        return $(SELECTORS.PESO_65)
    }

    get peso70() {
        return $(SELECTORS.PESO_70)
    }

    get aceptarPesoButton() {
        return $(SELECTORS.BUTTON_ACEPTAR_PESO)
    }

    get cancelarPesoButton() {
        return $(SELECTORS.BUTTON_CANCELAR_PESO)
    }

    get botonVerIndiceSalud(){
        return $(SELECTORS.BUTTON_VER_INDICE)
    }

}

export default new InfoMinimaSaludScreen(); 
