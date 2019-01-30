import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'

export default combineReducers ({
    libraries: LibraryReducer
})

// console.log(state.getState())
// OUTPUT: { libraries: [] }
        //THEN
// console.log(state.getState())
// OUTPUT: { libraries: [{ id: 0, title: 'Webpack', description: '...' }] }