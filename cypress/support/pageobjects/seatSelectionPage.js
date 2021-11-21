const seatSelection_availableSeats = 'a[class="_available"]'
const seatSelection_availabletimes = 'ul[id="mrshow"] li'
const seatSelection_selectedSeats = 'a[class="_available _selected"]'
const seatSelection_showtime = 'div[class="showtime-pill-container"]  a[data-availability ="A"] div[class="__details"]'
var ticketnumbers = new Array();
export const seatSelectionPage = {

    changeTimeSlotTo(time) {
        cy.searchListandclick(seatSelection_showtime, time)
    },
    displaySelectedSeats() {
        cy.get(seatSelection_selectedSeats).each(($el, index, $list) => {
            var ticketnumbers1 = $el.text();
            ticketnumbers.push(ticketnumbers1)
        })
            .then(() => { cy.log("your ticket numbers are " + ticketnumbers) })
    }
}

