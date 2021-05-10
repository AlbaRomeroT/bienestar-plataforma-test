import AppScreen from '../screenobjects/app.screen';

const SELECTORS = {
    DATEPICKER_ALERT: '#com.android.chrome:id/pickers',
    DATEPICKER_BUTTON_PANEL: '#android:id/buttonPanel'
};

class DatePickerAlert extends AppScreen {
    constructor() {
        super(SELECTORS.DATEPICKER_ALERT);
    }

    get dataPickerAlert() {
        return $(SELECTORS.DATEPICKER_ALERT)
    }

    get buttonPanel() {
        return $(SELECTORS.DATEPICKER_BUTTON_PANEL)
    }

    get monthBefore() {
        return $(SELECTORS.NO_RESULTS_ALERT).$$('button')[0];
    }

    get monthAfter() {
        return $(SELECTORS.NO_RESULTS_ALERT).$$('button')[1];
    }

    get setButton() {
        return $(SELECTORS.DATEPICKER_BUTTON_PANEL).$$('button')[2];
    }
}

export default new DatePickerAlert();