
import React, { Component } from 'react';      // Member imports using {  }
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink} from 'react-router-dom';
import './App.css';

import HomeComp from './components/homeComp';
import IssuesComp from './components/issuesComp';
import AddIssueComp from './components/addIssueComp';
import EditIssueComp from './components/editIssueComp';
import NotFoundComp from './components/notFoundComp';

// REFER : https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935
//       : https://reactstrap.github.io/
import {
  Nav
} from 'reactstrap';


class Links extends Component {
  render() {
    return (
      <Nav>
        <NavLink exact activeClassName="active" to="/" >Home</NavLink>
        <NavLink activeClassName="active" to="/issues" >Issues</NavLink>
      </Nav>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Links/>
            <Switch>
              <Route exact path="/" component={HomeComp} />
              <Route exact path="/issues" component={IssuesComp} />
              <Route path="/issues/addissue" component={AddIssueComp} />
              <Route path="/issues/editissue/:id" component={EditIssueComp} />
              <Redirect from="/addissue" to="/issues/addissue" />
              <Route component={NotFoundComp} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
