import React, { Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/alert';
// Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';




  const App = () => {
  
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  
  
  return (
    <Provider store = {store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component = {Landing} />
          <section className="container"></section>
          <Alert>
            <Switch>
              <Route exact path ="/register" component = {Register} />
              <Route exact path ="/login" component = {Login} />
            </Switch>
          </Alert>
        </Fragment>
      </Router>   
    </Provider>
)};



export default App;
