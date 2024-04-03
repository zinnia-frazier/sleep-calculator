## Purpose
This is a more advanced sleep calculator based on the Codecademy Sleep Debt Exercise. In this calculator, the user can input their ideal sleep hours and report what their actual daily sleep hours were. The calculator will then respond with suggestions for how to meet their ideal sleep schedule unlike the Codecademy exercise. 
This is an exercise in designing and programming a web application without guidance from the Codecademy course. The original version of the program used vanilla JavaScript like the Codecademy course but in the second version of the program, React.JS was used instead. 

## Description
The Codecademy Sleep Debt Exercise simply calculates how many hours short the hypothetical user was in their reported weekly sleep hours vs a predetermined ideal weekly sleep schedule. This was all done in the console.log().
My Sleep Calculator builds on this by allowing the user to report their daily sleep hours and ideal sleep hours to the calculator using Front-End inputs. The Sleep Calculator responds in a page update how many hours the user was short and how they might be able to remedy this. 

## Languages
- HTML
- CSS
- JavaScript
- React.js
## Skills
- React
- useState

## Build Process
### Boilerplate
Boiler plate HTML, CSS, and JavaScript were created and all linked to index.html. The CSS file was added in the head of the HTML while the JavaScript was added to the bottom of the HTML page so the document can load first before any JavaScript loads. 
### JavaScript Data
An object was created that housed how many hours were in a sleep cycle.
After that, a paragraph tag with the id 'test' was made to test if the JavaScript could be used for modifying the Document Object Model and the test was successful. 
### Function bedTimeCalculator()
The first function added to the JavaScript file is a bedtime calculator that takes a user wake up time as an input from an HTML select tag. The function subtracts 8 hours from the input if the number is greater than 1. Otherwise the function adds 12 hours. Depending on the time selected, there is a variable that represents the A.M. and P.M. addition to the time result. A button that activates the function on a a click based event listener executes the function after the wake up time is selected by the user. Finally, the document has a resulting heading tag modified with the result time of the function. 
```js
const bedTimeCalculator = () => {

let desiredSleepTime = document.getElementById('sleepTimeSelect').value;

let userNumber = parseFloat(desiredSleepTime);

  

if (!isNaN(userNumber)) {

answer = userNumber - 8;

} else {

document.getElementById('sleepTimeAnswer').innerHTML = 'Choose a valid number please.';

}

  

if (answer < 1) {

answer = answer + 12;

clockSign = ' P.M.';

} else {

clockSign = ' A.M.';

}

  

if (answer === 12) {

clockSign = ' A.M.';

}

  

document.getElementById('sleepTimeAnswer').innerHTML = 'Sleep by ' + answer + clockSign;

}
```
### Function whenGoToSleep()
The whenGoToSleep() is a function that takes the user input time they would like to wake up and how many sleep cycles they would like to have during their nightly sleep. This function outputs the ideal time the user should go to sleep by.
### Function alarmTimeCalculator()
The alarmTimeCalculator() function takes the user sleep time and desired number of sleep cycles and outputs the time an alarm should be set for.
### Function sleepDebtCalculator()
The sleepDebtCalculator() function takes the user desired nightly hours and the user reported sleep hours and outputs how short or in excess the user has slept. 
### Function sleepCalculator()
The program was converted to a React app that uses a single sleepCalculator function to handle calculating sleep times based on the user select and storing that data as states. 

After the code was converted to React, the app was styled using a css module file.
