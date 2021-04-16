import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Personel = () => {
    const [state ,setState ] = useContext(GlobalContext);

    const handleChange = (e) => {
        const {value , name} = e.target;
        console.log(value)
        console.log(name)
    }

    return (
        <form>
            <h3>Voeg een nieuwe collega toe.</h3><br/>
            <label htmlFor="firstName">Voornaam</label><br/>
            <input type="text" name="firstName" id="firstName"/><br/>
            <label htmlFor="lastName">Achternaam</label><br/>
            <input type="text" name="lastName" id="lastName"/><br/>

        </form>
    )
}

export default Personel
