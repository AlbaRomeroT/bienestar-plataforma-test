import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures';
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME_ESTATURA: '#ion-overlay-2 > div.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-ios > div.alert-radio-group.sc-ion-alert-ios',
    EST_64: '#alert-input-9-4',
    
};

class InfoEstaturaSaludScreen extends AppScreen {
    constructor() {
        super(SELECTORS.HOME_ESTATURA);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME_ESTATURA).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME_ESTATURA).isDisplayed();
    }

    get estatura64(){
        return $(SELECTORS.EST_64)
    }
}

export default new InfoEstaturaSaludScreen(); 