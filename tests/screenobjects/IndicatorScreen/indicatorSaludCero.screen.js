import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures';


const SELECTORS = {
    HOME: "#title",
    COMPLETE: '#complete',
  
    
};

class IndicatorSaludCeroScreen extends AppScreen {
    constructor() {
        super(SELECTORS.HOME);
    }

    get complete() {
        return $(SELECTORS.COMPLETE)
    }

    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }


    swipeUp(yTo, yFrom) {
        Gestures.swipe({ x: 50, y: yTo }, { x: 50, y: yFrom });
    }
  
}

export default new IndicatorSaludCeroScreen();