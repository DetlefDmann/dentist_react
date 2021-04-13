import React, {useContext} from "react";
import "./Day.css";
import AppointmentInDay from "./components/AppointmentInDay";
import { GlobalContext } from './GlobalContext';

const Day = () => {
  const [state, setState] = useContext(GlobalContext);
  const appointmentsJSX = state.appointments.filter(app => app.day === state.selectedDay).sort((a,b) => {
    return (a.time>b.time ?  1: -1)
  }).map(
    (appointment) => (
      <AppointmentInDay
        appointment={appointment}
        key={appointment.id}
      />
    )
  );
      const handleSelection = (e) => {
        const day = e.target.value;
        setState({
          ...state,selectedDay:+day
        })
      }
 console.log(state)
  return (
      <>
        <p>Welke dag willen we zien?</p>
        <select name="day" id="day"  value={state.selectedDay} onChange={handleSelection}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
        </select>
        <ul className="dayview">
          {appointmentsJSX}
        </ul>
      </>
      );
};
//de afspraken zijn nu gesorteerd op tijdstip

export default Day;