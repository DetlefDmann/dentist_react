import React, { useState } from 'react'
import EditAppointment from './EditAppointment'
import ScheduleNewAppointment from './ScheduleNewAppointment'

const AppointmentsAdmin = () => {
    const [showChosenOption, setShowChosenOption] = useState(1)
    const handleChoice = (e) => {
        console.log(e.target.name);
        if(e.target.name ==="new") {
            console.log("nieuwe afspraak jonguh")
            setShowChosenOption(1);
        }
        else {setShowChosenOption(0)} ;
    }


    return (
        <div>
            <h2>Wat wil je doen?</h2><br/>
            <button name="new" onClick={handleChoice}>Nieuwe afspraak maken</button><br/>
            <button name="exist" onClick={handleChoice}>Bestaande afspraak wijzigen</button><br/>
            {showChosenOption===1 ? <ScheduleNewAppointment text="Plan een nieuwe afspraak:" /> : <EditAppointment />}
            
        </div>
    )
}

export default AppointmentsAdmin
