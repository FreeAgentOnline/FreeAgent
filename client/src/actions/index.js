/*
  Things for which we need reducers:
    1. Store information about the user to be accessed by other components
    2. Store result information on public user profile
    3. Set search query that can be accessed by multiple components
    4. Store fetched events for future filtering
*/

export const SET_USER = 'SET_USER';
export const SET_RESULTS = 'SET_RESULTS';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const SAVE_QUERY = 'SAVE_QUERY';
export const STORE_MEETS = 'STORE_MEETS';
export const SET_FILTER = 'SET_FILTER';

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  }
}

// Set filter on user profile results
export function setFilter(payload) {
  return {
    type: SET_FILTER,
    payload
  }
}

export function setResults(payload) {
  return {
    type: SET_RESULTS,
    payload
  }
}

export function fetchUserResults(username) {
  return (dispatch, getState) => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`/api/result/user/${username}`, options)
    .then(res => res.json())
    .then(data => {
      return dispatch(setResults(data));
    })
    // Consider throwing errors
    .catch(err => console.log(err))
  }
}

export function createResult(username, formBody) {
  return (dispatch, getState) => {
    let options = {
      method: "POST",
      body: JSON.stringify(formBody),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`/api/result/user/${username}`, options)
    .then(res => res.json())
    .then(data => {
      return dispatch(fetchUserResults(username));
    })
    // Consider throwing errors
    .catch(err => console.log(err))
  }
}

export function updateResult(resultId, formBody, username) {
  return (dispatch, getState) => {
    let options = {
      method: "PATCH",
      body: JSON.stringify(formBody),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`/api/result/${resultId}`, options)
    .then(res => res.json())
    .then(data => {
      return dispatch(fetchUserResults(username));
    })
    // Consider throwing errors
    .catch(err => console.log(err))
  }
}

export function deleteResult(resultId, username) {
  return (dispatch, getState) => {
    let options = {
      method: "DELETE"
    }
    fetch(`/api/result/${resultId}`, options)
    .then(res => res.json())
    .then(data => {
      return dispatch(fetchUserResults(username));
    })
    // Consider throwing errors
    .catch(err => console.log(err))
  }
}

export function displayResults(payload) {
  return {
    type: DISPLAY_RESULTS,
    payload
  }
}

export function saveQuery(payload) {
  return {
    type: SAVE_QUERY,
    payload
  }
}

export function storeMeets(payload) {
  return {
    type: STORE_MEETS,
    payload
  }
}
