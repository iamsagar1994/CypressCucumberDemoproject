import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { homePage } from "../../../support/pageobjects/homePage";
import { seatSelectionPage } from "../../../support/pageobjects/seatSelectionPage";
import { slotBookingPage } from "../../../support/pageobjects/slotBookingPage";
import { ticketsSelectionPage } from "../../../support/pageobjects/ticketsSelectionPage";
import { movieSelectionPage } from "../../../support/pageobjects/movieSelectionPage";

beforeEach(()=>{
    cy.clearCookies()
    cy.log("cookies cleared")
    cy.fixture('keydata').then(function(data){
        this.data = data;
    })
   })
Given('user visited the bookmyshowwebpage',()=>{
    cy.visit(Cypress.env('sit'))
    cy.waitUntilElementVisible('.No.thanks')
    homePage.selectNothanks();
})  
When('user select the city',function(){
    homePage.selectMetroCity(this.data.city)  
}) 

Then ('verify city is selected',function(){
    homePage.verifyCurrentCityName(this.data.city)
}) 
And  ('user select movietheatre',function(){
    homePage.verifyCurrentCityName(this.data.city)
    homePage.entermallname(this.data.mallsearch)
    homePage.SelectMall(this.data.mallregion)
    movieSelectionPage.verifymallname(this.data.mallregion)
}) 


And ('user select the movie',()=>{
    movieSelectionPage.selectMovieByName("Ghost")
}) 

And  ('user select show time',function(){
    seatSelectionPage.changeTimeSlotTo(this.data.showtime)
    slotBookingPage.acceptTerms();
    cy.waitUntilElementInVisible('.__loader')
}) 
And ('user select the first available show time',()=>{
    movieSelectionPage.selectFirstAvailableSlot();
    slotBookingPage.acceptTerms();
    cy.waitUntilElementInVisible('.__loader')
}) 
And ('user select the first available movie and show time',()=>{
    slotBookingPage.selectMoviebyIndex(0);
    slotBookingPage.acceptTerms();
    cy.waitUntilElementInVisible('.__loader')

}) 

And ('user select the number of seats',function(){
    ticketsSelectionPage.selectNumberOfSeats(this.data.numberoftickets)
    ticketsSelectionPage.verifyNumberOfSeats(this.data.numberoftickets)

}) 
And ('user select the first available seats',()=>{
    ticketsSelectionPage.proceedToSeatSelectionButton()
    cy.get('div[data-seat-type="1"] a[class="_available" ]').eq(0).click({force:true})
}) 
Then ('display the ticket numbers',()=>{
    seatSelectionPage.displaySelectedSeats();
}) 