import { createAction } from "redux-actions";

export const getMarksRequest = createAction("GET_MARKS_REQUEST");
export const getMarksSuccess = createAction("GET_MARKS_SUCCESS");
export const getMarksFailure = createAction("GET_MARKS_FAILURE");

export const getMarkRequest = createAction("GET_MARK_REQUEST");
export const getMarkSuccess = createAction("GET_MARK_SUCCESS");
export const getMarkFailure = createAction("GET_MARK_FAILURE");

export const updateMarkRequest = createAction("UPDATE_MARK_REQUEST");
export const updateMarkSuccess = createAction("UPDATE_MARK_SUCCESS");
export const updateMarkFailure = createAction("UPDATE_MARK_FAILURE");

export const deleteMarkRequest = createAction("DELETE_MARK_REQUEST");
export const deleteMarkSuccess = createAction("DELETE_MARK_SUCCESS");
export const deleteMarkFailure = createAction("DELETE_MARK_FAILURE");

export const createMarkRequest = createAction("CREATE_MARK_REQUEST");
export const createMarkSuccess = createAction("CREATE_MARK_SUCCESS");
export const createMarkFailure = createAction("CREATE_MARK_FAILURE");
