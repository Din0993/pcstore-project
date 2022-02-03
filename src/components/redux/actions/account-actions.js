import AccountActionTypes from "../types/account-types";
export const googleSignInStart = () => ({
  type: AccountActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: AccountActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: AccountActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: AccountActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: AccountActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: AccountActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: AccountActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: AccountActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: AccountActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: AccountActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: AccountActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
