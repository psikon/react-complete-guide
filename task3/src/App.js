import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect }  from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul style={{listStyle:'none', margin: 'auto', padding: '0'}}>
                <li style={{margin: '10px', display: 'inline-block'}}>
                  <NavLink 
                    to='/courses' 
                    exact  
                    activeStyle={{
                      color: '#fa923s',
                      textDecoration: 'underline'
                    }}>Courses</NavLink>
                </li>
                <li>
                <NavLink 
                    to='/users' 
                    exact  
                    activeStyle={{
                      color: '#fa923s',
                      textDecoration: 'underline'
                    }}>Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <Switch>
              <Redirect from='/all-courses' to='courses' />
              <Route path='/courses' exact component={Courses} />
              <Route path='/users' component={Users} />
              <Route path='/courses/:courseId' exact component={Course} />
              <Route render={() => <h1>404 Course not found!</h1>} />
            </Switch>
          </div>
          <div>
            <ol style={{textAlign: 'left'}}>
              <li>Load the "Course" component as a nested component of "Courses"</li>
            </ol>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
