import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import DashboardScreen from '../screenobjects/DashboardScreen/Dashboard.screen'

Then(/^Ver Dashboarding Bienestar$/, () => {
    console.log("Ver Dashboarding Bienestar");
    DashboardScreen.waitForIsShown(true);
    //Primer Swipe
    let yTo = 300
    let yFrom = 1400
    DashboardScreen.swipeUp(yFrom, yTo)
    
  
})
