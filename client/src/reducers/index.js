import { SET_USER, SET_RESULTS, SET_FILTER, SET_TEAMS, DISPLAY_RESULTS, SAVE_QUERY, STORE_MEETS } from '../actions';
import update from 'immutability-helper';

const initialState = {
  query: '',
  user: '',
  results: [],
  meets: [],
  activeLatLon: [],
  teams: [],
  filter: 'All'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return update(state, {
        user: {
          $set: action.payload
        }
      });
    case SET_FILTER:
      return update(state, {
        filter: {
          $set: action.payload
        }
      })
    case SET_RESULTS:
      return update(state, {
        results: {
          $set: action.payload
        }
      })
    case SET_TEAMS:
      return update(state, {
        teams: {
          $set: action.payload
        }
      })
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
    //   activeLatLon describes what
    // case SET_LAT_LON:
    //   return update(state, {
    //     activeLatLon: {
    //       $set: action.payload
    //   }
    // });
    default:
      return state;
  }
}

export default reducer;
