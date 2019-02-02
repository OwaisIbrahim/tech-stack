import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers ({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})

// console.log(state.getState())
// OUTPUT: { libraries: [] }
        //THEN
// console.log(state.getState())
// OUTPUT: { libraries: [{ id: 0, title: 'Webpack', description: '...' }] }