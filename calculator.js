// Sleep cycle object
const sleepLength = {
    sleepCycleHours: 1.5
};

// Testing function
const whenGoToSleep = () => {
    // let desiredWakeUpTime = document.getElementById('desiredWakeUpTime');
    let desiredSleepTime = document.getElementById('desiredWakeUpTime').value;
    let userNumber = parseFloat(desiredSleepTime);

    if (!isNaN(userNumber)) {
        answer = userNumber - 8;
    } else {
        document.getElementById('sleepTimeResult').innerHTML = 'Please enter a valid number.';
    }

    document.getElementById('sleepTimeResult').innerHTML = 'Go to be by ' + answer + ' P.M.';
}

// Actual bed time calculator function
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

/* const whenGoToSleepDisplay = () => {
    document.getElementById('bedtime').innerHTML = whenGoToSleep();
} */

/* const alarmTimeCalculator = () => {

}

const sleepDebtCalculator = () => {

} */

// document.getElementById('sleepTimeResult').innerHTML = whenGoToSleep(document.getElementById('desiredWakeUpTime'));

// Test for if the Document Object Model is functioning and my files are linked correctly
document.getElementById('test').innerHTML = 'hello';