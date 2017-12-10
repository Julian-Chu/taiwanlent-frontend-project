import { combineReducers} from 'redux';
import TalentsReducer from './reducer_talents';
import FilterReducer from './reducer_filters';

const rootReducer = combineReducers({
  talents: TalentsReducer,
  filter: FilterReducer
});

export default rootReducer;