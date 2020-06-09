import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPageComponent from './components/LandingPageComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import NavBarComponent from './components/NavBarComponent';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavBarComponent />
        </nav>

        <Switch>
          <Route path="/SignIn">
            <SignInComponent />
          </Route>
          <Route path="/SignUp">
            <SignUpComponent />
          </Route>
          <Route path="/">
            <LandingPageComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
