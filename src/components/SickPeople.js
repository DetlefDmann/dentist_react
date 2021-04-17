import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext'

const SickPeople = () => {
    const [ state, setState ] = useContext(GlobalContext);
    const [person ,setPerson] = useState({
        role:"",
        identity:{
            name:"",
            id:""
        }
    });
    const patientSelectorInputsJSX = state.patients.map((patient) => {
        return (<option key={patient.id} value={JSON.stringify({...patient})}>{patient.firstName} {patient.lastName}</option>)
    });
    const dentistSelectorInputsJSX = state.dentists.map((dentist) => {
        return (<option key={dentist.id} value={JSON.stringify({...dentist})}>{dentist.firstName} {dentist.lastName}</option>)
    });
    const assistantSelectorInputsJSX = state.assistants.map((assistant) => {
        return (<option key={assistant.id} value={JSON.stringify({...assistant})}>{assistant.firstName} {assistant.lastName}</option> )
    });
    const filterout = (person,role) =>{
        const filtered = state.appointments.filter((appointment) =>{
            return appointment[role].id!==person.id;
        });
    };

    const handleSick = (e) => {
        const {name , value} = e.target ;
        const identity = JSON.parse(value);
        setPerson({
            role:name,
            identity:identity
        });
    }

    const setHealthStatus = (bool) => {
        console.log(person.identity.firstName)
        console.log(person.role);
        if(person.role==="patient"){
            const updatedPatients = state.patients.map((patient) =>{
                if(patient.id===person.identity.id){
                    return {...patient, isSick:bool}
                }
                else return patient;
            });
            setState({
                ...state, patients:updatedPatients
            })
        }
        else if(person.role==="dentist") {
            const updatedDentists = state.dentists.map((dentist) =>{
                if(dentist.id===person.identity.id){
                    return {...dentist, isSick:bool}
                }
                else return dentist;
            });
            setState({
                ...state, dentists:updatedDentists
            })
        }
        else {
            const updatedAssistents = state.pssistents.map((assistent) =>{
                if(assistent.id===person.identity.id){
                    return {...assistent, isSick:bool}
                }
                else return assistent;
            });
            setState({
                ...state, assistents:updatedAssistents
            });
        };
    }

    return (
        <div>
            <h2>Wie is er ziek?</h2><br/>
            <label htmlFor="patient">Naam patient:</label><br/>
            <select name="patient" id="patient" onChange={handleSick}>
                <option >Vul naam patient in.</option>
                {patientSelectorInputsJSX}
            </select><br/>
            <label htmlFor="dentist">Naam tandarts:</label><br/>
            <select name="dentist" id="dentist" onChange={handleSick}>
                <option value="{}">Vul naam tandarts in.</option>
                {dentistSelectorInputsJSX}
            </select><br/>
            <label htmlFor="assistant">Kies een assistent:</label><br/>
            <select name="assistant" id="assistant" onChange={handleSick}>
                <option value="{}">Vul naam assistent in</option>
                {assistantSelectorInputsJSX}
            </select><br/>
            <button onClick={() => setHealthStatus(true)} >Meld Ziek</button>
            <button onClick={() => setHealthStatus(false)} >Beter melden</button>
        </div>
    )
}

export default SickPeople
