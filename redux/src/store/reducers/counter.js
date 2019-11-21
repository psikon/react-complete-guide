import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type ) {
        case actionTypes.INCREMENT:
                // umstandliche Lösung
                const newState = Object.assign({}, state);
                newState.counter = state.counter +1
                return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            break;
    } 
    return state; 
};

export default reducer;