import { createAction } from "redux-actions";

export const getDriveTypesRequest = createAction("GET_DRIVE_TYPES_REQUEST");
export const getDriveTypesSuccess = createAction("GET_DRIVE_TYPES_SUCCESS");
export const getDriveTypesFailure = createAction("GET_DRIVE_TYPES_FAILURE");

export const getDriveTypeRequest = createAction("GET_DRIVE_TYPE_REQUEST");
export const getDriveTypeSuccess = createAction("GET_DRIVE_TYPE_SUCCESS");
export const getDriveTypeFailure = createAction("GET_DRIVE_TYPE_FAILURE");

export const updateDriveTypeRequest = createAction("UPDATE_DRIVE_TYPE_REQUEST");
export const updateDriveTypeSuccess = createAction("UPDATE_DRIVE_TYPE_SUCCESS");
export const updateDriveTypeFailure = createAction("UPDATE_DRIVE_TYPE_FAILURE");

export const deleteDriveTypeRequest = createAction("DELETE_DRIVE_TYPE_REQUEST");
export const deleteDriveTypeSuccess = createAction("DELETE_DRIVE_TYPE_SUCCESS");
export const deleteDriveTypeFailure = createAction("DELETE_DRIVE_TYPE_FAILURE");

export const createDriveTypeRequest = createAction("CREATE_DRIVE_TYPE_REQUEST");
export const createDriveTypeSuccess = createAction("CREATE_DRIVE_TYPE_SUCCESS");
export const createDriveTypeFailure = createAction("CREATE_DRIVE_TYPE_FAILURE");
