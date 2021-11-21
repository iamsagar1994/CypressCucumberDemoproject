const slotBookingPage_movieNamesList = 'a[class="nameSpan"]'
const slotBookingPage_availableSlots = '.showtime-pill.data-enabled'
const slotBookingPage_Terms_Popup = '#tnc'
const slotBookingPage_Terms_Accept = '#btnPopupAccept'
const slotBookingPage_Terms_cancel = '#btnPopupCancel'


export const slotBookingPage = {
    selectMoviebyName(moviename) { cy.searchListandclick(slotBookingPage_movieNamesList, moviename) },
    selectMoviebyIndex(Index) { cy.searchByIndexAndClick(slotBookingPage_availableSlots, Index) },
    acceptTerms() { cy.get(slotBookingPage_Terms_Popup).find(slotBookingPage_Terms_Accept).click({ force: true }) },
    cancelTerms() { cy.get(slotBookingPage_Terms_Popup).find(slotBookingPage_Terms_cancel).click({ force: true }) }
}