import { createAction } from "redux-actions";

export const getFuelTypesRequest = createAction("GET_FUEL_TYPES_REQUEST");
export const getFuelTypesSuccess = createAction("GET_FUEL_TYPES_SUCCESS");
export const getFuelTypesFailure = createAction("GET_FUEL_TYPES_FAILURE");

export const getFuelTypeRequest = createAction("GET_FUEL_TYPE_REQUEST");
export const getFuelTypeSuccess = createAction("GET_FUEL_TYPE_SUCCESS");
export const getFuelTypeFailure = createAction("GET_FUEL_TYPE_FAILURE");

export const updateFuelTypeRequest = createAction("UPDATE_FUEL_TYPE_REQUEST");
export const updateFuelTypeSuccess = createAction("UPDATE_FUEL_TYPE_SUCCESS");
export const updateFuelTypeFailure = createAction("UPDATE_FUEL_TYPE_FAILURE");

export const deleteFuelTypeRequest = createAction("DELETE_FUEL_TYPE_REQUEST");
export const deleteFuelTypeSuccess = createAction("DELETE_FUEL_TYPE_SUCCESS");
export const deleteFuelTypeFailure = createAction("DELETE_FUEL_TYPE_FAILURE");

export const createFuelTypeRequest = createAction("CREATE_FUEL_TYPE_REQUEST");
export const createFuelTypeSuccess = createAction("CREATE_FUEL_TYPE_SUCCESS");
export const createFuelTypeFailure = createAction("CREATE_FUEL_TYPE_FAILURE");
