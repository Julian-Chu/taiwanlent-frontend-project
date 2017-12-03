import { combineReducers} from 'redux';
import TalentsReducer from './reducer_talents';

const rootReducer = combineReducers({
  talents: TalentsReducer
});

export default rootReducer;