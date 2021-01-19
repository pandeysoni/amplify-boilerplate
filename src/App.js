import React, {useState} from 'react';
import Amplify from 'aws-amplify';
import {default as awsconfig} from "./aws-exports";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/auth/utils';
import './App.scss';
import {UserContext} from "./components/auth/contexts";
import {useUser} from "./components/auth/use-user-hook";
import AuthPage from "./pages/auth-page";
import LandingPage from "./pages/landing-page";

Amplify.configure(awsconfig);

function App() {
  const user = useUser();
  const {cognitoUser} = user;
 
 
  return (
    <UserContext.Provider value={user}>
    <Router>
      <div className="App">
        {cognitoUser &&
        <Switch>
          <Route path={'/account'}>
            <AuthPage/>
          </Route>
          <Route path={'/'}>
            <LandingPage/>
          </Route>
          
        </Switch>
        }
      </div>
    </Router>
    {!cognitoUser && <AuthPage/>}
    </UserContext.Provider>
  );
}

export default App;
