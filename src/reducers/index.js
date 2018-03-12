import { combineReducers} from 'redux';
import TalentsReducer from './reducer_talents';
import FilterReducer from './reducer_filters';
import CandidatesReducer from './reducer_candidates';
import { reducer as formReducer} from 'redux-form';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
  talents: TalentsReducer,
  filter: FilterReducer,
  candidates:  CandidatesReducer,
  authenticated: AuthenticationReducer,
  form:formReducer
});

export default rootReducer;