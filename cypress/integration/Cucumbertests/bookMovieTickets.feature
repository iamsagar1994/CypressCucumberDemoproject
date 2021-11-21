Feature: bookMovieTickets

Scenario: book Movie Tickets for first available Movie and first available showtime
Given user visited the bookmyshowwebpage
When user select the city
Then verify city is selected
And user select movietheatre 
And user select the first available movie and show time
And user select the number of seats 
And user select the first available seats
Then display the ticket numbers 

Scenario: book Movie Tickets for user selected Movie and first available showtime  
Given user visited the bookmyshowwebpage
When user select the city
Then verify city is selected
And user select movietheatre 
And user select the movie
And user select the first available show time
And user select the number of seats 
And user select the first available seats
Then display the ticket numbers 

Scenario: book Movie Tickets for user selected Movie and user selected show time 
Given user visited the bookmyshowwebpage
When user select the city
Then verify city is selected
And user select movietheatre 
And user select the movie
And user select show time 
And user select the first available seats
Then display the ticket numbers 

