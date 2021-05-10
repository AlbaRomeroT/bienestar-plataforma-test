import AppScreen from '../app.screen';
import RegisterUserScreen from '../RegisterUser/registerUser.screen';

const SELECTORS = {
    BOOKING_FORM: '#makeReservForm',
};

class SwipeRegisterScreen extends AppScreen {
    constructor() {
        super(SELECTORS.BOOKING_FORM);
    }
        
    get registerUserScreen() {
        return RegisterUserScreen
    }
   
 }

export default new SwipeRegisterScreen();