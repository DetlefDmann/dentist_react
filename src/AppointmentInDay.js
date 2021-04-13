import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient.name}</div>
    <div className="dentist">Tandarts: {dentist.name}</div>
    <div className="assistant">Assistent: {assistant.name}</div>
  </li>
);
// dit is hoe appointments in het dagoverzicht eruit komen te zien