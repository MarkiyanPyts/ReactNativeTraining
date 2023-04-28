import { createContext, useReducer } from "react";

const DUMMY_EXPENCES = [
    {
        id: 'e1',
        description: 'Toilet Paper',
        amount: 94.12,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'New TV',
        amount: 799.49,
        date: new Date('2022-01-19'),
    },
    {
        id: 'e3',
        description: 'Car Insurance',
        amount: 294.67,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e4',
        description: 'New Desk (Wooden)',
        amount: 450,
        date: new Date('2022-03-19'),
    },
    {
        id: 'e5',
        description: 'New Desk (Glass)',
        amount: 100,
        date: new Date('2022-04-19'),
    },
    {
        id: 'e6',
        description: 'New Desk (Metal)',
        amount: 200,
        date: new Date('2022-05-19'),
    },
    {
        id: 'e7',
        description: 'New Desk (Plastic)',
        amount: 300,
        date: new Date('2022-06-19'),
    },
    {
        id: 'e8',
        description: 'New Desk (Paper)',
        amount: 400,
        date: new Date('2022-07-19'),
    },
    {
        id: 'e9',
        description: 'New Desk (Cloth)',
        amount: 500,
        date: new Date('2022-08-19'),
    },
    {
        id: 'e10',
        description: 'New Desk (Ceramic)',
        amount: 600,
        date: new Date(),
    },
];

export const ExpenceContext = createContext({
    expences: [],
    addExpence: ({description, amount, date}) => {},
    deleteExpence: (id) => {},
    updateExpence: (id, {description, amount, date}) => {},
});

function expencesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id}, ...state,];   
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
    const [expencesState, dispatch] = useReducer(expencesReducer, DUMMY_EXPENCES);

    function addExpence(expenceData) {
        dispatch({type: 'ADD', payload: expenceData});
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
    }

    return <ExpenceContext.Provider value={value}>{children}</ExpenceContext.Provider>
}

export default ExpencesContextProvider;