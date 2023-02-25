import { handleActions } from "redux-actions";
import {
  createDriveTypeFailure,
  createDriveTypeRequest,
  createDriveTypeSuccess,
  deleteDriveTypeFailure,
  deleteDriveTypeRequest,
  deleteDriveTypeSuccess,
  getDriveTypeSuccess,
  getDriveTypeFailure,
  getDriveTypeRequest,
  getDriveTypesFailure,
  getDriveTypesRequest,
  getDriveTypesSuccess,
  updateDriveTypeFailure,
  updateDriveTypeRequest,
  updateDriveTypeSuccess,
} from "./actions";

const initialState = {
  driveTypes: [],
  driveType: {},
  isGetDriveTypesSuccess: false,
  isGetDriveTypesError: false,
  isGetDriveTypeSuccess: false,
  isGetDriveTypeError: false,
  isUpdatedDriveTypeSuccess: false,
  isUpdatedDriveTypeError: false,
  isDeletedDriveTypeSuccess: false,
  isDeletedDriveTypeError: false,
  isCreatedDriveTypeSuccess: false,
  isCreatedDriveTypeError: false,
};

const reducer = handleActions(
  {
    // get Drive Types
    [getDriveTypesRequest]: (state) => ({
      ...state,
      isGetDriveTypesSuccess: false,
      isGetDriveTypesError: false,
    }),
    [getDriveTypesSuccess]: (state, { payload }) => ({
      ...state,
      driveTypes: payload || [],
      isGetDriveTypesSuccess: true,
      isGetDriveTypesError: false,
    }),
    [getDriveTypesFailure]: (state) => ({
      ...state,
      isGetDriveTypesSuccess: false,
      isGetDriveTypesError: true,
    }),
    // get Drive Type
    [getDriveTypeRequest]: (state) => ({
      ...state,
      isGetDriveTypeSuccess: false,
      isGetDriveTypeError: false,
    }),
    [getDriveTypeSuccess]: (state, { payload }) => ({
      ...state,
      driveType: payload ?? {},
      isGetDriveTypeSuccess: true,
      isGetDriveTypeError: false,
    }),
    [getDriveTypeFailure]: (state) => ({
      ...state,
      isGetDriveTypeSuccess: false,
      isGetDriveTypeError: true,
    }),
    // update Drive Type
    [updateDriveTypeRequest]: (state) => ({
      ...state,
      isUpdatedDriveTypeSuccess: false,
      isUpdatedDriveTypeError: false,
    }),
    [updateDriveTypeSuccess]: (state) => ({
      ...state,
      isUpdatedDriveTypeSuccess: true,
      isUpdatedDriveTypeError: false,
    }),
    [updateDriveTypeFailure]: (state) => ({
      ...state,
      isUpdatedDriveTypeSuccess: false,
      isUpdatedDriveTypeError: true,
    }),
    // delete Drive Type
    [deleteDriveTypeRequest]: (state) => ({
      ...state,
      isDeletedDriveTypeSuccess: false,
      isDeletedDriveTypeError: false,
    }),
    [deleteDriveTypeSuccess]: (state) => ({
      ...state,
      isDeletedDriveTypeSuccess: true,
      isDeletedDriveTypeError: false,
    }),
    [deleteDriveTypeFailure]: (state) => ({
      ...state,
      isDeletedDriveTypeSuccess: false,
      isDeletedDriveTypeError: true,
    }),
    // create Drive Type
    [createDriveTypeRequest]: (state) => ({
      ...state,
      isCreatedDriveTypeSuccess: false,
      isCreatedDriveTypeError: false,
    }),
    [createDriveTypeSuccess]: (state) => ({
      ...state,
      isCreatedDriveTypeSuccess: true,
      isCreatedDriveTypeError: false,
    }),
    [createDriveTypeFailure]: (state) => ({
      ...state,
      isCreatedDriveTypeSuccess: false,
      isCreatedDriveTypeError: true,
    }),
  },
  initialState
);

export default reducer;
