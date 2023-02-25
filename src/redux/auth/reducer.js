import { handleActions } from "redux-actions";
import { getLoginFailure, getLoginRequest, getLoginSuccess } from "./action";

const initialState = {
  user: {},
  isGetLoginSuccess: false,
  isGetLoginFailure: false,
};

const reducer = handleActions(
  {
    // login
    [getLoginRequest]: (state) => ({
      ...state,
      isGetLoginSuccess: false,
      isGetLoginFailure: false,
    }),
    [getLoginSuccess]: (state) => ({
      ...state,
      isGetLoginSuccess: true,
      isGetLoginFailure: false,
    }),
    [getLoginFailure]: (state) => ({
      ...state,
      isGetLoginSuccess: false,
      isGetLoginFailure: true,
    }),
  },
  initialState
);

export default reducer;
