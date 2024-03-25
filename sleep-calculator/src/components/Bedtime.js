// Import React
import React, { useState } from 'react';


// Export component
export default function Bedtime() {

    const [wakeTime, setWakeTime] = useState('');

    // Handle Change
    function handleChange(event) {

        // Get form select as number
        setWakeTime(event.target.value);
    }

    // Convert form select to number if not a number
    if (wakeTime === isNaN) {
        setWakeTime(parseFloat(wakeTime));
    }

    let clockSign = ' A.M.';

    // Set bedtime to be the waketime minus 8 hours
    let bedtime = wakeTime - 8;
    
    // If the waketime is in the negatives, add 12 hours and change the clock sign to P.M.
    if (bedtime <= 0) {
        bedtime = bedtime + 12;
        clockSign = ' P.M.';
    } else if (wakeTime === 12) {
        clockSign = ' A.M.';
    } else {
        clockSign = ' A.M.';
    }

    // Bedtime statement with the bedtime and clock sign
    let bedtimeStatement = 'Go to bed by ' + bedtime + clockSign;

    if (bedtime === isNaN) {
        bedtimeStatement = 'Please enter a valid number.';
    }

    return (
        <main>
            <h1>Sleep Calculator</h1>

            <h2>When Should I go to Sleep</h2>

            <form>
              <label for="sleepTimeSelect">Desired wake up time?</label>

                <select onChange={handleChange} id="sleepTimeSelect" name="bedTimecalculator">
                    <option value="1">1 A.M.</option>
                    <option value="2">2 A.M.</option>
                    <option value="3">3 A.M.</option>
                    <option value="4">4 A.M.</option>
                    <option value="5">5 A.M.</option>
                    <option value="6">6 A.M.</option>
                    <option value="7">7 A.M.</option>
                    <option value="8">8 A.M.</option>
                    <option value="9">9 A.M.</option>
                    <option value="10">10 A.M.</option>
                    <option value="11">11 A.M.</option>
                    <option value="12">12 P.M.</option>
                </select>

            </form>
            

            <h3>{bedtimeStatement}</h3>

            <p>Wake Time {wakeTime}</p>

            <p>Bed Time {bedtime}</p>

        </main>
    )
}