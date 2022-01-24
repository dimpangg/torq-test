import {combineReducers} from 'redux';
import {dataReducer} from './data';
import {globalReducer} from './global';

const reducer = combineReducers({
  dataReducer,
  globalReducer,
});

export default reducer;
