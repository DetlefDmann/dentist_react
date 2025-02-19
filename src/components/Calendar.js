import React, {useContext} from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";
import { GlobalContext } from "../GlobalContext";

const divideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};

export default () => {
  const [state ] = useContext(GlobalContext);
  const appointments = state.appointments ;
  const appointmentsByDay = divideByDay(appointments);

  const daysInMonthJSX = Object.values(
    appointmentsByDay // arr met afspraken/dag van iedere dag in apppointmentsByDay
  ).map((appointmentsInDay, index) => (
    <DayInMonth appointments={appointmentsInDay} key={index} />// returnt een div class "day" met appointments
  ));

  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
  );
};
