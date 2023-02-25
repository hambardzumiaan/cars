import { createAction } from "redux-actions";

export const getBodyStylesRequest = createAction("GET_BODY_STYLES_REQUEST");
export const getBodyStylesSuccess = createAction("GET_BODY_STYLES_SUCCESS");
export const getBodyStylesFailure = createAction("GET_BODY_STYLES_FAILURE");

export const getBodyStyleRequest = createAction("GET_BODY_STYLE_REQUEST");
export const getBodyStyleSuccess = createAction("GET_BODY_STYLE_SUCCESS");
export const getBodyStyleFailure = createAction("GET_BODY_STYLE_FAILURE");

export const updateBodyStyleRequest = createAction("UPDATE_BODY_STYLE_REQUEST");
export const updateBodyStyleSuccess = createAction("UPDATE_BODY_STYLE_SUCCESS");
export const updateBodyStyleFailure = createAction("UPDATE_BODY_STYLE_FAILURE");

export const deleteBodyStyleRequest = createAction("DELETE_BODY_STYLE_REQUEST");
export const deleteBodyStyleSuccess = createAction("DELETE_BODY_STYLE_SUCCESS");
export const deleteBodyStyleFailure = createAction("DELETE_BODY_STYLE_FAILURE");

export const createBodyStyleRequest = createAction("CREATE_BODY_STYLE_REQUEST");
export const createBodyStyleSuccess = createAction("CREATE_BODY_STYLE_SUCCESS");
export const createBodyStyleFailure = createAction("CREATE_BODY_STYLE_FAILURE");
