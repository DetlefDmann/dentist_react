import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext'
import { v4 as uuid } from "uuid"

const Patients = () => {
    const [state, setState] = useContext(GlobalContext);
    const [newPatient, setNewPatient] = useState({
        firstName:"",
        lastName:"",
        phoneNr:"",
        eMail:"",
        gender:"",
        isSick:false,
        birthYear:""
    })
    const handleChange = (e) => {
        const {value , name} = e.target;
        console.log(value);
        console.log(name);
        setNewPatient({
            ...newPatient,[name]:value,
            id:uuid(),
        });
    }
    const setNewVictim = (e) => {
        e.preventDefault();
        setState({
            ...state, patients:[...state.patients, newPatient]
        })
    }

    return (
        <form>
            <h3>Voeg een nieuwe patient toe.</h3><br/>
            <label htmlFor="firstName">Voornaam</label><br/>
            <input type="text" name="firstName" id="firstName" onChange={handleChange} /><br/>
            <label htmlFor="lastName">Achternaam</label><br/>
            <input type="text" name="lastName" id="lastName" onChange={handleChange} /><br/>
            <label htmlFor="phoneNr">Telefoonnummer</label><br/>
            <input type="tel" name="phoneNr" id="phoneNr" onChange={handleChange}/><br/>
            <label htmlFor="eMail">E-mail</label><br/>
            <input type="email" name="eMail" id="eMail" onChange={handleChange}/><br/>
            <label htmlFor="gender">Geslacht</label><br/>
            <input type="text" name="gender" id="gender" onChange={handleChange}/><br/>
            <label htmlFor="birthYear">Geboorte jaar</label><br/>
            <input type="text" name="birthYear" id="birthYear" onChange={handleChange}/><br/>
            <p>De volgende gegevens zijn ingevuld: <br/><br/> 
            {newPatient.firstName} <br/> 
            {newPatient.lastName} <br/>
            {newPatient.phoneNr} <br/>
            {newPatient.eMail}<br/>
            {newPatient.birthYear} <br/>
            Geslacht is: {newPatient.gender}<br/>
            <br/>
            Kloppen deze gegevens?
            </p><br/><br/>
            <p>Het e-mail adres is als volgt: {newPatient.eMail} <br/><br/>
                Als alles klopt kunnen we de patient nu toevoegen aan de database.
            </p><br/>
            <button onClick={setNewVictim}>Voeg toe</button>

        </form>
    )
}

export default Patients
