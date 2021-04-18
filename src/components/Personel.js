import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext';
import { v4 as uuid } from 'uuid';

const Personel = () => {
    const [state ,setState ] = useContext(GlobalContext);
    const [newGuy, setNewGuy] = useState({
        firstName:"",
        lastName:"",
        phoneNr:"",
        isSick:false,
        skills:[],
        eMail:""
})

    const handleChange = (e) => {
        const {value , name} = e.target;
        console.log(value);
        console.log(name);
        setNewGuy({
            ...newGuy,[name]:value,
            id:uuid(),
        });
    }
    console.log(newGuy)

    const createEmail = (e) =>{
        e.preventDefault();
        const newMail = `${newGuy.firstName[0].toLowerCase()}.${newGuy.lastName.toLowerCase()}@tandartspraktijkbvt.nl`;
        setNewGuy({
            ...newGuy, eMail:newMail,
        })
    }

    const setNewCollegue = (e) => {
        e.preventDefault();
        setState({
            ...state, dentists:[...state.dentists, newGuy]
        })
    }

    return (
        <form>
            <h3>Voeg een nieuwe collega toe.</h3><br/>
            <label htmlFor="firstName">Voornaam</label><br/>
            <input type="text" name="firstName" id="firstName" onChange={handleChange} /><br/>
            <label htmlFor="lastName">Achternaam</label><br/>
            <input type="text" name="lastName" id="lastName" onChange={handleChange} /><br/>
            <label htmlFor="phoneNr">Telefoonnummer</label><br/>
            <input type="tel" name="phoneNr" id="phoneNr" onChange={handleChange}/><br/>

            <label htmlFor="gender">Geslacht</label><br/>
            <input type="text" name="gender" id="gender"/><br/>
            <p>De volgende gegevens zijn ingevuld: <br/><br/> {newGuy.firstName} <br/> {newGuy.lastName} <br/>{newGuy.phoneNr} <br/><br/>
            Kloppen deze gegevens?
            </p><br/><br/>
            <button onClick={createEmail}>Maak e-mail aan voor deze medewerker.</button>
            <p>Het e-mail adres is als volgt: {newGuy.eMail} <br/><br/>
                Als alles klopt kunnen we de collega nu toevoegen aan de database.
            </p><br/>
            <button onClick={setNewCollegue}>Voeg toe</button>

        </form>
    )
}

export default Personel
