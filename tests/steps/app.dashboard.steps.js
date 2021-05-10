import { When, Then, Given } from 'cucumber';
import { expect } from 'chai';
import DashboardScreen from '../screenobjects/DashboardScreen/Dashboard.screen'

Then(/^Ver Dashboarding Bienestar$/, () => {
    console.log("Ver Dashboarding Bienestar");
    //Primer Swipe
    let yTo = 300
    let yFrom = 1400
    DashboardScreen.swipeUp(yFrom, yTo)
    browser.pause(2000)
    DashboardScreen.waitForIsShown(true);
  
})
