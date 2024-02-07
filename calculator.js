const sleepLength = {
    sleepCycleHours: 1.5
};

const whenGoToSleep = (desiredWakeUpTime, numberOfSleepCycles) => {
    return sleepTime = desiredWakeUpTime - numberOfSleepCycles;
}

const whenGoToSleepDisplay = () => {
    document.getElementById('bedtime').innerHTML = whenGoToSleep();
}

const alarmTimeCalculator = () => {

}

const sleepDebtCalculator = () => {

}

// Test for if the Document Object Model is functioning and my files are linked correctly
document.getElementById('test').innerHTML = 'hello';