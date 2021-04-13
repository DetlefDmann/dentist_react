import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => { //appointments per dag
  const dayNr = appointments[0].day;
  const appointmentsJSX = appointments.sort((a,b) => {
    return (a.time>b.time ?  1: -1)
  }).map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} />//returnt een div "appointment" voor iedere entry
  ));
  return <div className="day" day={dayNr}>{appointmentsJSX}</div>;
};
// de appointments zijn nu gesorteerd op tijdstip
//wordt gerenderd in Calendar.js