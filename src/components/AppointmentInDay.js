import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({appointment}) => (

  <li className="appointment" id={appointment.id}>
    <div className="time">{format_time(appointment.time)}</div>
    <div className="patient">Patiënt: {appointment.patient.name}</div>
    <div className="dentist">Tandarts: {appointment.dentist.name}</div>
    <div className="assistant">Assistent: {appointment.assistant.name}</div>
  </li>
);
// dit is hoe appointments in het dagoverzicht eruit komen te zien