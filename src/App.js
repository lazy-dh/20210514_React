import React, { Component } from 'react'
// import { Button } from 'antd';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import './App.css';
import Login from './pages/login'
import Admin from './pages/Admin'


export default class App extends Component {
  render() {
    return (
      <div className="wai">
        <BrowserRouter>
          <Switch> 
              <Route path= '/login' component= {Login}></Route>
              <Route path= '/' component= {Admin}></Route>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
