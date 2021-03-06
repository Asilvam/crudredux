import {combineReducers} from 'redux';
import colaboradoresReducer from './colaboradoresReducer';

export default combineReducers({
    colaboradores: colaboradoresReducer
});