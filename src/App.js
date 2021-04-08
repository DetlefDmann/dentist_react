import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils";
import { patientData } from "./patientList";

const initialAppointments = generateRandomAppointments(150);
// const actualAppointments = [
//         {day: 10, time: 15, patient: "Willeke Kuijpers", dentist: "Valentijn Gerritsen", assistant: "Leentje Wolters"},
//         {day: 25, time: 14, patient: "Twan de Vos", dentist: "Floor van Veen", assistant: "Geert de Ruiter"},
// ];

const App = () => {
  const [state, setState] = useState({
    dentists:[{firstName:"Boris", lastName:"Ekkenbeul",phoneNr:"", eMail:"b.ekkenbeul@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Anna", lastName:"Bolen", phoneNr:"", eMail:"a.bolen@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Carla", lastName:"Snoepvingers", phoneNr:"", eMail:"c.snoepvingers@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Pjotr", lastName:"Doelen", phoneNr:"", eMail:"p.doelen@tandartspraktijkbvt.nl", skills:[], isSick:false},
    ],
    assistants:[{firstName:"Gerrie",lastName:"Mansinck",phoneNr:"", eMail:"g.mansinck@tandartspraktijkbvt.nl", isSick:false},
                {firstName:"Sue",lastName:"Zhoupeng",phoneNr:"", eMail:"s.zhoupeng@tandartspraktijkbvt.nl", isSick:false}
    ],
    patients:patientData,
    appointments:initialAppointments
  });

  const addDentist = (state, firstName, lastName, phoneNr, eMail) => {
      const newDentist = {firstName, lastName, phoneNr, eMail};
      setState(prevState => ({...prevState, dentists: [...prevState.dentists,newDentist]}));
    }



  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar view</Link>
          </li>
          <li>
            <Link to="/day">Day view</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={state.appointments} />
          </Route>
          <Route path="/day">
            <Day appointments={state.appointments.filter(app => app.day === 1)} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);
}

export default App;