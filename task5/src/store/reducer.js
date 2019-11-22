import * as actions from "./actions";

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actions.REMOVE:
            const updatedPersons = state.persons.filter(person => person.id !== action.value)
            return {
                ...state,
                persons : updatedPersons
            }
        default:
            break;
    }
    return state;
}

export default reducer;