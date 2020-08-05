import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Protected from './component/Protected';
import Unprotected from './component/Unprotected';
import Home from './component/Home';
import {Switch, Link, Redirect } from 'react-router-dom';

class App extends Component {
constructor() {
  super();
  this.state = {
    isLogin:false
  };
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
}
login(){
this.setState({isLogin:true});
}

logout(){
this.setState({isLogin:false});
}
render(){
return (
<Router>
  <div>
    <ul>
      <li>
        <Link to='/'>
          Link to Home Page
      </Link>
      </li>
      <li>
        <Link to='/protected'>
          Link to Protected Page
      </Link>
      </li>
      <li>
        <Link to='/unprotected'>
          Link to Unprotected Page
      </Link>
      </li>
    </ul>
    <button onClick={this.login}>Login</button>
    <br/>
    <button onClick={this.logout}>Logout</button>
  </div>
  <Switch>
    <Route exact path='/' component={Home}/>
    {/* <Route path='/protected' component={Protected} /> */}
    <Route path='/protected' render={() => (
      this.state.isLogin
          ? <Protected />
          : <Redirect to='/' />
  )} />
    <Route path='/unprotected' component={Unprotected} />
  </Switch>
</Router>

);
}
}
export default App;
