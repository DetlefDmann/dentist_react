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
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [day, setDay] = useState(initDay);
    const [time,setTime] = useState(initTime);
    const [patient, setPatient] = useState(initPatient);
    const [dentist , setDentist] = useState(initDentist);
    const [assistant, setAssistant] = useState(initAssistant);
    const [newAppointment, setNewAppointment] = useState({
        day:initDay,
        time:initTime,
        patient:initPatient,
        dentist:initDentist,
        assistant:initAssistant,
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
        setNewAppointment({...newAppointment,dentist:{name:`${dentistA.firstName} ${dentistA.lastName}`,id:dentistA.id}})
    }
    const handleAssistant = e => {
        const value = JSON.parse(e.target.value);
        const assistantA = value.assistant;
        value.assistant.isSick ? alert("Deze assistent is ziek"):
        setAssistant({name:`${assistantA.firstName} ${assistantA.lastName}`,id:assistantA.id});
        setNewAppointment({...newAppointment,assistant:{name:`${assistantA.firstName} ${assistantA.lastName}`,id:assistantA.id}})
    }
    const handlePatient = e => {
        const value = JSON.parse(e.target.value);
        const patientA = value.patient;
        console.log(patient);
        setPatient({name:`${patientA.firstName} ${patientA.lastName}`,id:patientA.id});
        setNewAppointment({...newAppointment, patient:{name:`${patientA.firstName} ${patientA.lastName}`,id:patientA.id}})
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
    
     console.log((newAppointment))
    // console.log((day))
    // console.log((time))
    // console.log((initId))
    //console.table(state.appointments)

    const checkPossible = (e) =>{
        e.preventDefault();
        console.log("Aan het checken");
        //functie om te kijken of de tandarts en assistent beschikbaar zijn
        //controleer of er al een afspraak is met het tijdstip en dag en tandarts
        const sametimeAppointmentsDentist = state.appointments.filter((appointment)=>{return appointment.time===newAppointment.time})
                                                        .filter((appointment)=>{return appointment.day===newAppointment.day})
                                                        .filter((appointment)=>{return appointment.dentist.id===newAppointment.dentist.id});
        const sametimeAppointmentsAssistant = state.appointments.filter((appointment)=>{return appointment.time===newAppointment.time})
                                                        .filter((appointment)=>{return appointment.day===newAppointment.day})
                                                        .filter((appointment)=>{return appointment.assistant.id===newAppointment.assistant.id});
        const sametimeAppointmentsPatient = state.appointments.filter((appointment)=>{return appointment.time===newAppointment.time})
                                                        .filter((appointment)=>{return appointment.day===newAppointment.day})
                                                        .filter((appointment)=>{return appointment.patient.id===newAppointment.patient.id});
        if (sametimeAppointmentsDentist.length>0){
            alert("Deze tandarts heeft al een afspraak staan op dit tijdstip.");
            setEnableSubmit(false);
            return;// Je kunt dan geen afspraak maken
        }
        if (sametimeAppointmentsPatient.length>0){
            alert("De patient heeft al een afspraak staan op dit tijdstip.");
            setEnableSubmit(false);
            return;// Je kunt dan geen afspraak maken
        }
        if (sametimeAppointmentsAssistant.length>0){
                alert("Deze assistent heeft al een andere afspraak staan. Kies een andere assistent of plan afspraak zonder assistent.");
        }
        console.log("De afspraak kan gepland worden!")
        setEnableSubmit(true);
    }

    const removeAlteredAppointment = () => {
        // remove old appointment
        const updatedAppointments = state.appointments.filter((appointment) =>{
            return appointment.id!==initId;
        });
        console.log(updatedAppointments);
        alert("Oude afspraak is verwijderd.");
        return updatedAppointments;
        
    }
    

    const handleSubmit = (e) =>{
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

    const handleRemove = (e) => {
        e.preventDefault();
        let stateAppointments =state.appointments
        if(typeof props.appToAlter!=="undefined"){
        stateAppointments =  removeAlteredAppointment();
        };
        setState({...state,appointments:[...stateAppointments,newAppointment]});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>{text}</h3><br/>

            <label htmlFor="patient">Naam patient:</label><br/>
            <select name="patient" id="patient" onChange={handlePatient}>
                <option >Vul naam patient in.</option>
                {patientSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dentist">Kies een tandarts:</label><br/>
            <select name="dentist" id="dentist" onChange={handleDentist}>
                <option value="{}">Vul naam tandarts in.</option>
                {dentistSelectorInputsJSX}
            </select><br/>
            <label htmlFor="assistant">Kies een assistent:</label><br/>
            <select name="assistant" id="assistant" onChange={handleAssistant}>
                <option value="{}">Vul naam assistent in</option>
                {assistantSelectorInputsJSX}
            </select><br/>
            <label htmlFor="day">Kies een dag:</label><br/>
            <select name="day" id="day" onChange={handleDay}>
                <option value="{}">Vul nieuwe dag in {initDay}</option>
                {daysJSX}
            </select><br/>
            <label htmlFor="time">Kies een tijd:</label><br/>
            <select name="time" id="time" onChange={handleTime}>
                <option value="{}">Vul nieuwe tijd in: {initTime}</option>
                {hoursJSX}
            </select>
            <br/>
            <button onClick={checkPossible}>Kijk of deze Afspraak mogelijk is</button>
            <br/>
            {(typeof props.appToAlter!=="undefined") ? <button onClick={handleRemove} >Verwijder deze afspraak.</button> : null}
            <button type="submit" disabled={!enableSubmit}>Plan Afspraak</button>
        </form>
    )
}

export default ScheduleNewAppointment
