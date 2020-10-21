import { combineReducers } from 'redux';
import city from './city';

const reducer = combineReducers({
    city: city,
})

export default reducer;
