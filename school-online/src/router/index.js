import React, { Component } from 'react';
import Home from '@/views/home';
import AppDown from '@/views/appdown';
import Lesson from '@/views/lesson';
import Login from '@/views/login';
import Register from '@/views/register';
import Rain from '@/views/rain';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/appdown' component={AppDown}></Route>
          <Route path='/lesson' component={Lesson}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/rain' component={Rain}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default RouterConfig;