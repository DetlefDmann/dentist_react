import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
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