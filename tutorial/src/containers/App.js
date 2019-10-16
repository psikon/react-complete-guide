import React, { Component } from 'react';

import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

    state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      showCockpit: true,
      changeConuter: 0,
      authenticated: false
    }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      // old version
      //const person = Object.assign({}, this.state.persons[personIndex])

      person.name = event.target.value;
      
      const persons = [...this.state.persons];
      persons[personIndex] = person
      
      this.setState(( prevState, props) => {
        return {
          persons: persons,
          changeConuter: prevState.changeConuter + 1
        }
      });
    }

    deletePersonHandler = (personIndex) => {
      // legacy version
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState( {persons: persons} )
    }


    tooglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow});
      }

    loginHandler = () => {
        this.setState({ authenticated: true });
      }

    toogleCockpitHandler = () => {
        const doesShow = this.state.showCockpit;
        this.setState({showCockpit:!doesShow});
      }

    render() {
      let persons = null;
      
      if ( this.state.showPersons ) {
        persons = <Persons 
              persons= {this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              />
      }

      return (
        <Aux>
          <button onClick={this.toogleCockpitHandler}>
            Remove Cockpit
          </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
            {this.state.showCockpit ? (
              <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.tooglePersonsHandler} 
              />
            ) : null}
            {persons}
          </AuthContext.Provider>
      </Aux>
      
      );
    }
}

export default withClass(App, classes.App);

