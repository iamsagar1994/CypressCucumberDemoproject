const tspseatsList = '#popQty li'
const tspselectSeatsButton = '#proceed-Qty'
const tspseatsselectednumber = 'ul[id="popQty"] ._active'

export const ticketsSelectionPage = {
    selectNumberOfSeats(number) {
        cy.searchListandclick(tspseatsList, number)
    },
    verifyNumberOfSeats(number) {
        cy.verifyText(tspseatsselectednumber, number)
    },
    proceedToSeatSelectionButton() {
        cy.get(tspselectSeatsButton).click()
    }
}