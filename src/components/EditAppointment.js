import React, { useContext, useState } from 'react';
import "./Day.css";
import { GlobalContext } from '../GlobalContext';
import AppointmentInDay from './AppointmentInDay';
import ScheduleNewAppointment from './ScheduleNewAppointment';

const EditAppointment = () => {
    const [state, setState] = useContext(GlobalContext);
    const [filters, setFilters] = useState({
        patient:{},
        dentist:{},
        assistant:{},
        day:"undefined",
        time:"undefined"
    });

    const patientSelectorJSX = state.patients.map((patient) => {
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
        };
    const hoursJSX =[];
        for(let j = 8; j < 19 ; j++){
            hoursJSX.push(<option key={j} value={j}>{j}</option>);
        };

        //filters selecteren
    const selectHandler = (e) => {
        const option = e.target.name;
        console.log(option);
        let value
        const payload = JSON.parse(e.target.value);
        console.log(payload)
        if(option === "patient") {
            value = payload.patient;
        }
        else if(option==="time") {
            value = payload
        }
        else if(option==="day") {
            value = payload
        }
        else if(option === "dentist") {
            value = payload.dentist;
        }
        else {value = payload.assistant};
        setFilters({
            ...filters,
            [option]:value,
        })
        console.log(`Filter is : ${JSON.stringify(filters)}`)
    }

    //nu de appointments filteren :
    
    
    const filteredAppointments = state.appointments.sort((a,b) => {
        return (a.time>b.time ?  1: -1)
      }).sort((a,b) => {
        return (a.day>b.day ?  1: -1)
      });
    
   const appointsmentToBeAltered = filteredAppointments.filter((currentApp)=>{
        if(typeof filters.patient.id!=="undefined"){return currentApp.patient.id===filters.patient.id}
        else return currentApp.patient.id!==filters.patient.id;
    }).filter((currentApp)=>{
        if(typeof filters.dentist.id!=="undefined"){return currentApp.dentist.id===filters.dentist.id}
        else return currentApp.dentist.id!==filters.dentist.id;
    }).filter((currentApp)=>{
        if(typeof filters.assistant.id!=="undefined"){return currentApp.assistant.id===filters.assistant.id}
        else return currentApp.assistant.id!==filters.assistant.id;
    }).filter((currentApp) =>{
        if(filters.day!=="undefined"){return currentApp.day===filters.day}
        else return currentApp.day>0;
    }).filter((currentApp) => {
        if(filters.time!=="undefined"){return currentApp.time===filters.time}
        else return currentApp.time>0;
    });

    // Als er afspraken zijn, laat dan elementen zien
    let showAppointment
    if (appointsmentToBeAltered.length>0) {showAppointment=true}
    else {showAppointment=false};
    

    // filter appointments op dag / patient / 
    return (
        <div>
            <h3>Wijzig een afspraak:</h3><br/>

            <label htmlFor="patient">Om welke patient gaat het?</label><br/>
            <select name="patient" id="patient" onChange={selectHandler} >
                {(typeof filters.patient.id==="undefined") ? <option value={{}}></option> : null}
                {patientSelectorJSX}
            </select><br/>
            <label htmlFor="day">Welke dag staat de afspraak?</label><br/>
            <select name="day" id="day" onChange={selectHandler}>
                {(filters.day==="undefined") ? <option value={{}}></option> : null}
                {daysJSX}
            </select><br/>
            <label htmlFor="time">Welke tijd staat de afspraak?</label><br/>
            <select name="time" id="time" onChange={selectHandler}>
                {(filters.time==="undefined") ? <option value={{}}></option> : null}
                {hoursJSX}
            </select><br/><br/>
            {/* <label htmlFor="dentist">Om welke tandarts gaat het?</label><br/>
            <select name="dentist" id="dentist" onChange={selectHandler}>
                {(typeof filters.dentist.id==="undefined") ? <option value={{}}></option> : null}
                {dentistSelectorInputsJSX}
            </select><br/> */}
            {/* <label htmlFor="assistant">Om welke assistent gaat het?</label><br/>
            <select name="assistant" id="assistant" onChange={selectHandler}>
                {(typeof filters.assistant.id==="undefined") ? <option value={{}}></option> : null}
                {assistantSelectorInputsJSX}
            </select><br/> */}
            {appointsmentToBeAltered.length>1 ? <><h3>"Er zijn meerdere afspraken die aan deze criteria voldoen!"</h3></> : null}
            <ul className="dayview">
            {showAppointment ? <AppointmentInDay appointment={appointsmentToBeAltered[0]}/> : null}
            </ul>

            {showAppointment ? <ScheduleNewAppointment text="Nieuwe data invoeren:" appToAlter={appointsmentToBeAltered[0]} /> : <></>}
            
        </div>
    )
}

export default EditAppointment
