const movieSelectionPage_movieName = 'span[class="__name"]  a[class="nameSpan"]'
const movieSelectionPage_currentMallName = '.venue-heading'
const movieSelectionPage_movieRowslist = '.list'
const movieSeletionPage_availableslots = 'div[class="showtime-pill-container"]  a[data-availability ="A"]'

export const movieSelectionPage = {

    verifymallname(value) {
        cy.verifyText(movieSelectionPage_currentMallName, value)
    },
    selectMovieByName(movieName) {
        cy.searchListandclick(movieSelectionPage_movieName, movieName)
    },
    selectFirstAvailableSlot() {
        cy.searchByIndexAndClick(movieSeletionPage_availableslots, 0)
    }

}