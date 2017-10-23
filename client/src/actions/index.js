/*
  Things for which we need reducers:
    1. Store information about the user to be accessed by other components
    2. Store result information on public user profile
    3. Set search query that can be accessed by multiple components
    4. Store fetched events for future filtering

*/

export const SET_USER = 'SET_USER';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const SAVE_QUERY = 'SAVE_QUERY';
export const STORE_MEETS = 'STORE_MEETS';
export const SET_LAT_LON = 'SET_LAT_LON';
export const CREATE_MARKER ='CREATE_MARKER'

export function setUser(arg) {
  return {
    type: SET_USER,
    payload: arg
  }
}

export function displayResults(arg) {
  return {
    type: DISPLAY_RESULTS,
    payload: arg
  }
}

export function saveQuery(arg) {
  return {
    type: SAVE_QUERY,
    payload: arg
  }
}

export function storeMeets(arg) {
  return {
    type: STORE_MEETS,
    payload: arg
  }
}
