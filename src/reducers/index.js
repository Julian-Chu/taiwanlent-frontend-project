import { combineReducers} from 'redux';
import TalentsReducer from './reducer_talents';
import FilterReducer from './reducer_filters';
import CandidatesReducer from './reducer_candidates';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  talents: TalentsReducer,
  filter: FilterReducer,
  candidates:  CandidatesReducer,
  form:formReducer
});

export default rootReducer;