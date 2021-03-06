import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};


export const login = (user) => {
  return dispatch => {
    return APIUtil.login(user)
    .then(user => {
      dispatch({type: RECEIVE_CURRENT_USER, user: user});
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  return dispatch => {

    return APIUtil.logout()
    .then(() => {
      dispatch({type: LOGOUT_CURRENT_USER});
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return APIUtil.signup(user)
    .then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user: user});
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const demoLogin = () => {
  const demoUser = {password: 'hunter2', email: 'email@email.com'};
  return login(demoUser);
};
