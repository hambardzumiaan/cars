import { createAction } from "redux-actions";

export const getLocationsRequest = createAction("GET_LOCATIONS_REQUEST");
export const getLocationsSuccess = createAction("GET_LOCATIONS_SUCCESS");
export const getLocationsFailure = createAction("GET_LOCATIONS_FAILURE");

export const getLocationRequest = createAction("GET_LOCATION_REQUEST");
export const getLocationSuccess = createAction("GET_LOCATION_SUCCESS");
export const getLocationFailure = createAction("GET_LOCATION_FAILURE");

export const updateLocationRequest = createAction("UPDATE_LOCATION_REQUEST");
export const updateLocationSuccess = createAction("UPDATE_LOCATION_SUCCESS");
export const updateLocationFailure = createAction("UPDATE_LOCATION_FAILURE");

export const deleteLocationRequest = createAction("DELETE_LOCATION_REQUEST");
export const deleteLocationSuccess = createAction("DELETE_LOCATION_SUCCESS");
export const deleteLocationFailure = createAction("DELETE_LOCATION_FAILURE");

export const createLocationRequest = createAction("CREATE_LOCATION_REQUEST");
export const createLocationSuccess = createAction("CREATE_LOCATION_SUCCESS");
export const createLocationFailure = createAction("CREATE_LOCATION_FAILURE");
