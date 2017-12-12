import { combineReducers} from 'redux';
import TalentsReducer from './reducer_talents';
import FilterReducer from './reducer_filters';
import CandidatesReducer from './reducer_candidates';

const rootReducer = combineReducers({
  talents: TalentsReducer,
  filter: FilterReducer,
  candidates:  CandidatesReducer
});

export default rootReducer;