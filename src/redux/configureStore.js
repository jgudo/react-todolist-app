import {createStore} from 'redux';

const addOption = (option) => ({
    type: 'ADD_OPTION',
    option
});

const removeOption = (option) => ({
    type: 'REMOVE_OPTION',
    option
});

const setOptions = (options) => ({
    type: 'SET_OPTIONS',
    options
});

const removeAllOptions = () => ({
    type: 'REMOVE_ALL_OPTIONS'
})

const todoListReducer = (state = { options: []}, action) => {
    switch(action.type) {
        case 'ADD_OPTION': 
            return {
                options: [...state.options, action.option]
            };
        case 'REMOVE_OPTION':
            return {
                options: state.options.filter((option) => option !== action.option)
            } 
        
        case 'SET_OPTIONS':
            return {
                options: action.options
            };    
        case 'REMOVE_ALL_OPTIONS':
            return { options: []};
        default: 
            return state;
    }
}


export default () => {
    const store = createStore(todoListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

    return store;
}  

export {removeOption, addOption,setOptions,  removeAllOptions};