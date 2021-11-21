import { homePage } from "../../support/pageobjects/homePage";
import { seatSelectionPage } from "../../support/pageobjects/seatSelectionPage";
import { slotBookingPage } from "../../support/pageobjects/slotBookingPage";
import { ticketsSelectionPage } from "../../support/pageobjects/ticketsSelectionPage";
describe('Name of the group', () => {
    it('testone', () => {
        var ticketnumbers= new  Array();
        cy.visit("https://bookmyshow.com/")
       if (cy.get('.No.thanks').should('be.visible')){
        cy.get('.No.thanks').click()}
        homePage.selectMetroCity("Bengaluru")
        homePage.verifyCurrentCityName("Bengaluru")
        homePage.entermallname('PVR')
        homePage.SelectMall('Koramangala')
        slotBookingPage.selectMoviebyIndex(0);
        slotBookingPage.acceptTerms();
        cy.get('.__loader').should('not.be.visible')
        ticketsSelectionPage.selectNumberOfSeats(3)
        ticketsSelectionPage.verifyNumberOfSeats(3)
        ticketsSelectionPage.proceedToSeatSelectionButton()
        cy.get('div[data-seat-type="1"] a[class="_available" ]').eq(0).click();
        seatSelectionPage.displaySelectedSeats();
        seatSelectionPage.changeTimeSlotTo('07:05 PM')
       
    });
})
