import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext';
import { v4 as uuid } from 'uuid';


const ScheduleNewAppointment = () => {
    const [state, setState] = useContext(GlobalContext);
    const [day, setDay] = useState(1);
    const [time,setTime] = useState(8);
    const [patient, setPatient] = useState({});
    const [dentist , setDentist] = useState({});
    const [assistant, setAssistant] = useState({});
    const [newAppointment, setNewAppointment] = useState({
        day:day,
        time:time,
        patient:patient,
        dentist:dentist,
        assistant:assistant,
        appointmentId:uuid(),
    });
    const patientSelectorInputsJSX = state.patients.map((patient) => {
        return (<option key={patient.id} value={JSON.stringify({patient})}>{patient.firstName} {patient.lastName}</option>)
    });
    const dentistSelectorInputsJSX = state.dentists.map((dentist) => {
        return (<option key={dentist.id} value={JSON.stringify({dentist})}>{dentist.firstName} {dentist.lastName}</option>)
    });
    const assistantSelectorInputsJSX = state.assistants.map((assistant) => {
        return (<option key={assistant.id} value={JSON.stringify({assistant})}>{assistant.firstName} {assistant.lastName}</option> )
    });
    const daysJSX = [];
        for(let i = 1; i < 29; i++){
            daysJSX.push(<option key={i} value={i}>{i}</option>);
            if(i===5||i===12||i===19||i===26){
                i=i+2;
            }
        }
    const hoursJSX =[];
        for(let j = 8; j < 19 ; j++){
            hoursJSX.push(<option key={j} value={j}>{j}</option>);
        }
        
    useEffect(() => {
        setNewAppointment({
            day:day,
            time:time,
            patient:patient,
            dentist:dentist,
            assistant:assistant,
            appointmentId:uuid(),
        });
    }, [patient, dentist, assistant, day,time])

    const handleDentist = e => {
        const value = JSON.parse(e.target.value);
        const dentistA = value.dentist;
        value.dentist.isSick ? alert("Deze tandarts is ziek"):
        setDentist({name:`${dentistA.firstName} ${dentistA.lastName}`,id:dentistA.id});
    }
    const handleAssistant = e => {
        const value = JSON.parse(e.target.value);
        const assistantA = value.assistant;
        value.assistant.isSick ? alert("Deze assistent is ziek"):
        setAssistant({name:`${assistantA.firstName} ${assistantA.lastName}`,id:assistantA.id});
    }
    const handlePatient = e => {
        const value = JSON.parse(e.target.value);
        const patientA = value.patient;
        console.log(patient);
        setPatient({name:`${patientA.firstName} ${patientA.lastName}`,id:patientA.id});
    }
    const handleDay = e => {
        const value = JSON.parse(e.target.value);
        setDay(value);
    }
    const handleTime = e => {
        const value = JSON.parse(e.target.value);
        setTime(value)
    }
    console.log(dentist.name)
    console.log(assistant.name)
    console.log(patient)
    console.log((newAppointment))
    //console.table(state.appointments)

    const checkPossible = () =>{
        console.log("Aan het checken");
        //functie om te kijken of de tandarts en assistent beschikbaar zijn
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setState({...state,appointments:[...state.appointments,newAppointment]})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Plan een nieuwe afspraak.</h3><br/>

            <label htmlFor="patient">Naam patient:</label><br/>
            <select name="setPatient" id="patient" onChange={handlePatient}>
                {patientSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dentist">Kies een tandarts:</label><br/>
            <select name="setDentist" id="dentist" onChange={handleDentist}>
                {dentistSelectorInputsJSX}
            </select><br/>
            <label htmlFor="assistant">Kies een assistent:</label><br/>
            <select name="setAssistant" id="assistant" onChange={handleAssistant}>
                {assistantSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dag">Kies een dag:</label><br/>
            <select name="dag" id="dag" onChange={handleDay}>
                {daysJSX}
            </select><br/>
            <label htmlFor="time">Kies een tijd:</label><br/>
            <select name="time" id="time" onChange={handleTime}>
                {hoursJSX}
            </select>
            <br/>
            <button onClick={checkPossible}>Kijk of deze Afspraak mogelijk is</button>
            <br/>
            <button type="submit">Plan Afspraak</button>
        </form>
    )
}

export default ScheduleNewAppointment
