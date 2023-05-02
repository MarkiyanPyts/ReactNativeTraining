import { createContext, useReducer } from "react";

export const ExpenceContext = createContext({
    expences: [],
    addExpence: ({description, amount, date}) => {},
    deleteExpence: (id) => {},
    setExpences: (expences) => {},
    updateExpence: (id, {description, amount, date}) => {},
});

function expencesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state,];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updatableExpenceIndex = state.findIndex(expence => expence.id === action.payload.id);
            const updatedExpence = {...state[updatableExpenceIndex], ...action.payload.data};
            const updatedExpences = [...state];
            updatedExpences[updatableExpenceIndex] = updatedExpence;

            return updatedExpences;
        case 'DELETE':
            return state.filter(expence => expence.id !== action.payload);
            break;
        default:
            return state;
    }
}

function ExpencesContextProvider ({children}) {
    const [expencesState, dispatch] = useReducer(expencesReducer, []);

    function addExpence(expenceData) {
        dispatch({type: 'ADD', payload: expenceData});
    }

    function setExpences(expences) {
        dispatch({type: 'SET', payload: expences});
    }

    function deleteExpence(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpence(id, expenceData) {
        dispatch({type: 'UPDATE', payload: {id, data: expenceData}});
    }

    const value = {
        expences: expencesState,
        addExpence,
        deleteExpence,
        updateExpence,
        setExpences,
    }

    return <ExpenceContext.Provider value={value}>{children}</ExpenceContext.Provider>
}

export default ExpencesContextProvider;