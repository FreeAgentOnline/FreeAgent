import { SET_USER, DISPLAY_RESULTS, SAVE_QUERY, STORE_MEETS } from '../actions';
import update from 'immutability-helper';

const initialState = {
  query: '',
  user: '',
  results: [],
  meets: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return update(state, {
        user: {
          $set: action.payload
        }
      });
    case DISPLAY_RESULTS:
      return update(state, {
        results: {
          $set: action.payload
        }
      });
    case SAVE_QUERY:
      return update(state, {
        query: {
          $set: action.payload
        }
      });
    case STORE_MEETS:
      return update(state, {
        meets: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export default reducer;
