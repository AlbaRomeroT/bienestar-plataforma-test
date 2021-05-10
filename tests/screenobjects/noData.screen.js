import AppScreen from './app.screen';

const SELECTORS = {
    NO_DATA_SCREEN: '#accountStatusScreen'
};

class NoDataScreen extends AppScreen {
    constructor() {
        super(SELECTORS.NO_DATA_SCREEN);
    }
}

export default new NoDataScreen();