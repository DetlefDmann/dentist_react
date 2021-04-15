import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext';
import { v4 as uuid } from 'uuid';


const ScheduleNewAppointment = (props) => {
    const text = props.text;
    let alterThis;
    //wanneer er geen appointment prop is zijn dit de initiele waarden
    let initDay = 1;
    let initTime = 8;
    let initPatient = {};
    let initDentist = {};
    let initAssistant = {};
    let initId = uuid();

    //wanneer er wel appointment props zijn, zijn dit de initiele waarden
    if(typeof props.appToAlter!=="undefined"){
        alterThis = props.appToAlter;
        initDay = alterThis.day;
        initTime = alterThis.time;
        initPatient = alterThis.patient;
        initDentist = alterThis.dentist;
        initAssistant = alterThis.assistant;
        initId = alterThis.id;
    };

    const [state, setState] = useContext(GlobalContext);
    const [day, setDay] = useState(initDay);
    const [time,setTime] = useState(initTime);
    const [patient, setPatient] = useState(initPatient);
    const [dentist , setDentist] = useState(initDentist);
    const [assistant, setAssistant] = useState(initAssistant);
    const [newAppointment, setNewAppointment] = useState({
        day:day,
        time:time,
        patient:patient,
        dentist:dentist,
        assistant:assistant,
        id:initId,
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
        setNewAppointment( {
            day:day,
            time:time,
            patient:patient,
            dentist:dentist,
            assistant:assistant,
            id:initId,
        });
    }, [patient, dentist, assistant, day, time])

    const handleDentist = e => {
        const value = JSON.parse(e.target.value);
        const dentistA = value.dentist;
        value.dentist.isSick ? alert("Deze tandarts is ziek"):
        setDentist({name:`${dentistA.firstName} ${dentistA.lastName}`,id:dentistA.id});
        setNewAppointment({...newAppointment,dentist:dentist})
    }
    const handleAssistant = e => {
        const value = JSON.parse(e.target.value);
        const assistantA = value.assistant;
        value.assistant.isSick ? alert("Deze assistent is ziek"):
        setAssistant({name:`${assistantA.firstName} ${assistantA.lastName}`,id:assistantA.id});
        setNewAppointment({...newAppointment,assistant:assistant})
    }
    const handlePatient = e => {
        const value = JSON.parse(e.target.value);
        const patientA = value.patient;
        console.log(patient);
        setPatient({name:`${patientA.firstName} ${patientA.lastName}`,id:patientA.id});
        setNewAppointment({...newAppointment, patient:patient})
    }
    const handleDay = e => {
        const value = JSON.parse(e.target.value);
        setDay(value);
        setNewAppointment({...newAppointment,day:day})
    }
    const handleTime = e => {
        const value = JSON.parse(e.target.value);
        setTime(value);
        setNewAppointment({
            ...newAppointment,
            time:time,
        })
    }
    
    // console.log((newAppointment))
    // console.log((day))
    // console.log((time))
    // console.log((initId))
    //console.table(state.appointments)

    const checkPossible = () =>{
        console.log("Aan het checken");
        //functie om te kijken of de tandarts en assistent beschikbaar zijn
        //controleer of er al een afspraak is met het tijdstip en dag en tandarts
           // alert eventueel dat de tandarts niet kan op dat moment
        //controleer of patient al een afspraak heeft op dat tijdstip
            // alert dat 
    }

    const removeAlteredAppointment = () => {
        // remove old appointment
        const updatedAppointments = state.appointments.filter((appointment) =>{
            return appointment.id!==initId;
        });
        console.log(updatedAppointments)
        return updatedAppointments;
        alert("Oude afspraak is verwijderd.")
    }
    

    const handleSubmit = (e) =>{
        alert(initId)
        e.preventDefault();
        let stateAppointments =state.appointments
        if(typeof props.appToAlter!=="undefined"){
        stateAppointments =  removeAlteredAppointment();
        };
        setState({...state,appointments:[...stateAppointments,newAppointment]});
        initId = uuid();
        setNewAppointment({
            day:day,
            time:time,
            patient:patient,
            dentist:dentist,
            assistant:assistant,
            id:initId,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>{text}</h3><br/>

            <label htmlFor="patient">Naam patient:</label><br/>
            <select name="setPatient" id="patient" onChange={handlePatient}>
                <option >{initPatient.name}</option>
                {patientSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dentist">Kies een tandarts:</label><br/>
            <select name="setDentist" id="dentist" onChange={handleDentist}>
                <option value="{}">{initDentist.name}</option>
                {dentistSelectorInputsJSX}
            </select><br/>
            <label htmlFor="assistant">Kies een assistent:</label><br/>
            <select name="setAssistant" id="assistant" onChange={handleAssistant}>
                <option value="{}">{initAssistant.name}</option>
                {assistantSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dag">Kies een dag:</label><br/>
            <select name="dag" id="dag" onChange={handleDay}>
                <option value="{}">{initDay}</option>
                {daysJSX}
            </select><br/>
            <label htmlFor="time">Kies een tijd:</label><br/>
            <select name="time" id="time" onChange={handleTime}>
                <option value="{}">{initTime}</option>
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
