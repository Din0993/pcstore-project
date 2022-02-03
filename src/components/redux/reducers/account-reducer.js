import AccountActionTypes from "../types/account-types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case AccountActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case AccountActionTypes.SIGN_IN_FAILURE:
    case AccountActionTypes.SIGN_OUT_FAILURE:
    case AccountActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;
