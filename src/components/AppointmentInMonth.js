import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({appointment}) => {
  const [state ] = useContext(GlobalContext);
  console.log(appointment.dentist.id);
  const thisDentist = state.dentists.filter((dude) => dude.id===appointment.dentist.id)[0];
  console.log(thisDentist);
  return (
  <div className={thisDentist.isSick ? "sickdentist" : "appointment"}>
    <span className="time">{format_time(appointment.time)}</span>
    <span className={thisDentist.isSick ? "sickdentist" : "patient"}>{appointment.patient.name}</span>
  </div>
)};
//Dit is hoe appointments er in het calendar overzicht uit komen te zien