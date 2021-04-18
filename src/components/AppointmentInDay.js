import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({appointment}) => {
  const [state ] = useContext(GlobalContext);
  console.log(appointment.dentist.id);
  const thisDentist = state.dentists.filter((dude) => dude.id===appointment.dentist.id)[0];
  console.log(thisDentist);
  return (
  <li className="appointment" id={appointment.id}>
    <div className="time">{format_time(appointment.time)}</div>
    <div className="patient">Patiënt: {appointment.patient.name}</div>
    <div className={thisDentist.isSick ? "sickdentist" : "dentist"}>Tandarts: {appointment.dentist.name}</div>
    <div className="assistant">Assistent: {appointment.assistant.name}</div>
  </li>
)};
// dit is hoe appointments in het dagoverzicht eruit komen te zien