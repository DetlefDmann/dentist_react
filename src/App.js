import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AppointmentsAdmin from "./components/AppointmentsAdmin"
import Calendar from "./components/Calendar";
import Day from "./components/Day";
import { GlobalProvider } from './GlobalContext';
import NavBar from "./components/NavBar";


const App = () => {

  return (
  <GlobalProvider >
    <Router>
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route path="/admin">
              <AppointmentsAdmin />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/day">
              <Day />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  </GlobalProvider>
);
}

export default App;