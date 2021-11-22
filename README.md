# CypressCucumberDemoproject online movie tickets booking for Maersk

Note: Please use git pull origin master to pull the code 

Cypress Cucumber Demo Project on online Movie tickets Booking
This project is created for demo purpose for cypress Automation.
I used an online movie tickets booking website as Application under test and three test cases are written to book tickets in multiple ways 

#Solution 
1. Created Page objects to capture elements from the Webpage and added action on those elements in the same <pajeobjectname>.js file 
2. Added feature file consists of three test cases 
    book Movie Tickets for first available Movie and first available showtime (This was actual one requested)
    book Movie Tickets for user selected Movie and first available showtime  
    book Movie Tickets for user selected Movie and user selected show time
3. Added step definition file to cover all three scenarios in the feature file 
4. Used Cypress fixtures to add data parameterisation for ticketcounts, city name etc 

#Prerequisites:
Node should be installed 
NPM package manager should be available

Installation 
1. Open Cypress folder and open Terminal/CMD 
2. run command npm install(this should install all dependencies) use **npm audit fix --force** in case any vunlerabilities

Steps to Run test cases 
1. run command **npm run test** always run from cypress folder like **"C:\Users\Sagar\Documents\Maersktest\cypress> npm run test"**
    (Above command will launch all feature files in folder integration\Cucumbertests for now there is only one feature file
    will run test in chrome in headed mode )
2. post all three scenarios ran , run command npm run report
    (this will convert the cucumber html report json to html and this html report is present in folder C:\Users\Sagar\Documents\Maersktest\cypress\reports)

Folder structure 

Pageobjects - cypress\support\pageobjects
Features - cypress\integration\Cucumbertests
Step definition - cypress\integration\Cucumbertests
Cucumber HTML Report - cypress\reports\index.html
Custom commands - cypress\support\commands.js
