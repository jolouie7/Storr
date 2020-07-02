import React from 'react';
import { useAuth0 } from "./react-auth0-spa";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPageComponent from './components/LandingPageComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import NavBarComponent from './components/NavBarComponent';
import ProfileComponent from './components/ProfileComponent';
// import './App.css';
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRouteComponent";
import CategoryContainer from './containers/CategorysContainer';
import ItemsContainer from './containers/ItemsContainer';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div>
        <nav>
          <NavBarComponent />
        </nav>

        <Switch>
          <Route path="/signIn" component={SignInComponent} />
          <Route path="/signUp" component={SignUpComponent} />
          <Route path="/categories/:id" component={ItemsContainer} />
          <Route path="/categories" component={CategoryContainer} />
          <PrivateRoute path="/profile" component={ProfileComponent} />
          <Route path="/" component={LandingPageComponent} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
