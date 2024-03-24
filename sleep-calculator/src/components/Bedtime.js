// Import React
import React, { useState } from 'react';


// Export component
export default function Bedtime() {

    const [bedtime, setBedtime] = useState();
    const [wakeTime, setWakeTime] = useState();
    const [clockSign, setClockSign] = useState('P.M.');

    // Handle Change
    function handleChange(event) {
        setWakeTime(event.target.value);
    }
        
    // Sleep Calculator
    function sleepCalculator() {

        

        setWakeTime(document.getElementById('desiredWakeUpTime').value);
        let userNumber = parseFloat(wakeTime);

        

        if (userNumber < 1) {
            userNumber = userNumber + 12;
            setClockSign(' P.M.');
        } else {
            setClockSign(' A.M.');
        }

        if (userNumber === 12) {
            setClockSign(' A.M.');
        }

        if (!isNaN(userNumber)) {
            setBedtime('Go to bed by ' + userNumber - 8 + clockSign);

        } else {
            setBedtime('Please enter a valid number.')
        }
    }

    return (
        <main>
            <h1>Sleep Calculator</h1>

            <h2>When Should I go to Sleep</h2>

            <form>
              <label for="sleepTimeSelect">Desired wake up time?</label>

                <select id="sleepTimeSelect" name="bedTimecalculator" onChange={handleChange}>
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

                <input type='number' />

                <button onClick={sleepCalculator}>Calculate my Bed Time</button>  
            </form>
            

            <h3>{bedtime}</h3>
        </main>
    )
}