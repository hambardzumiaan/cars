import { createAction } from "redux-actions";
export const getYearsRequest = createAction("GET_YEARS_REQUEST");
export const getYearsSuccess = createAction("GET_YEARS_SUCCESS");
export const getYearsFailure = createAction("GET_YEARS_FAILURE");

export const getYearRequest = createAction("GET_YEAR_REQUEST");
export const getYearSuccess = createAction("GET_YEAR_SUCCESS");
export const getYearFailure = createAction("GET_YEAR_FAILURE");

export const updateYearRequest = createAction("UPDATE_YEAR_REQUEST");
export const updateYearSuccess = createAction("UPDATE_YEAR_SUCCESS");
export const updateYearFailure = createAction("UPDATE_YEAR_FAILURE");

export const deleteYearRequest = createAction("DELETE_YEAR_REQUEST");
export const deleteYearSuccess = createAction("DELETE_YEAR_SUCCESS");
export const deleteYearFailure = createAction("DELETE_YEAR_FAILURE");

export const createYearRequest = createAction("CREATE_YEAR_REQUEST");
export const createYearSuccess = createAction("CREATE_YEAR_SUCCESS");
export const createYearFailure = createAction("CREATE_YEAR_FAILURE");
