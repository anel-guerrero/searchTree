import { connect } from 'react-redux';
import SplashSignup from './splash_signup_form';
import { signup } from '../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
  };
};

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SplashSignup);
