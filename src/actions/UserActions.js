export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
});

// An Example of Fetching Data with Redux
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserBegin());
    return fetch("/profile") // this may be a auth0 callback
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchUserSuccess(json.user));
        return json.products;
      })
      .catch((error) => dispatch(fetchUserFailure(error)));
  };
};

// * Check to see if there is a (user object?) in redux store
// * if there is, fetch the user info from /profile and add the info to redux store
// * else do nothing