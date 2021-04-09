import React from 'react';


const ScheduleNewAppointment = ({ dentists , assistants }) => {
    console.log(dentists)
    const dentistSelectorInputsJSX = dentists.map((dentist) => {
        return (<option key={dentist.id} value={dentist}>{dentist.firstName} {dentist.lastName}</option>)
    });
    const assistantSelectorInputsJSX = assistants.map((assistant) => {
        return (<option key={assistant.id} value={assistant}>{assistant.firstName} {assistant.lastName}</option> )
    })


    return (
        <div>
            <h3>Plan een nieuwe afspraak.</h3><br/>
            <label htmlFor="dentist">Kies een tandarts</label>
            <select name="dentist" id="dentist">
                {dentistSelectorInputsJSX}
            </select><br/>
            <label htmlFor="assistant">Kies een assistent</label>
            <select name="assistant" id="assistant">
                {assistantSelectorInputsJSX}
            </select>
        </div>
    )
}

export default ScheduleNewAppointment
