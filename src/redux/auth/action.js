import { createAction } from "redux-actions";

export const getLoginRequest = createAction("GET_LOGIN_REQUEST");
export const getLoginSuccess = createAction("GET_LOGIN_SUCCESS");
export const getLoginFailure = createAction("GET_LOGIN_FAILURE");
