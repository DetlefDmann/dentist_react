import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import { patientData } from "./patientList";
import { appointments } from "./appointmentsList";

const now = new Date();
const today = now.getDate();
console.log(today);

const initialAppointments = appointments;

const App = () => {
  const [state, setState] = useState({
    dentists:[{firstName:"Boris", lastName:"Ekkenbeul",phoneNr:"", eMail:"b.ekkenbeul@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"001"},
              {firstName:"Anna", lastName:"Bolen", phoneNr:"", eMail:"a.bolen@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"002"},
              {firstName:"Carla", lastName:"Snoepvingers", phoneNr:"", eMail:"c.snoepvingers@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"003"},
              {firstName:"Pjotr", lastName:"Doelen", phoneNr:"", eMail:"p.doelen@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"004"},
    ],
    assistants:[{firstName:"Gerrie",lastName:"Mansinck",phoneNr:"", eMail:"g.mansinck@tandartspraktijkbvt.nl", isSick:false, id:"011"},
                {firstName:"Sue",lastName:"Zhoupeng",phoneNr:"", eMail:"s.zhoupeng@tandartspraktijkbvt.nl", isSick:false, id:"012"}
    ],
    patients:patientData,
    appointments:initialAppointments
  });

    const addDentist = (state, firstName, lastName, phoneNr, eMail) => {
      const newDentist = {firstName, lastName, phoneNr, eMail};
      setState(prevState => ({...prevState, dentists: [...prevState.dentists,newDentist]}));
    }

    console.log(state.appointments);

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
            <Day appointments={state.appointments.filter(app => app.day === today)} />
          </Route>
          <Route path="/">
            <Home dentists={state.dentists} assistants={state.assistants}/>
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);
}

export default App;