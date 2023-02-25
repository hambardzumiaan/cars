import { handleActions } from "redux-actions";
import {
  createTransportTypeFailure,
  createTransportTypeRequest,
  createTransportTypeSuccess,
  deleteTransportTypeFailure,
  deleteTransportTypeRequest,
  deleteTransportTypeSuccess,
  getTransportTypeSuccess,
  getTransportTypeFailure,
  getTransportTypeRequest,
  getTransportTypesFailure,
  getTransportTypesRequest,
  getTransportTypesSuccess,
  updateTransportTypeFailure,
  updateTransportTypeRequest,
  updateTransportTypeSuccess,
} from "./actions";

const initialState = {
  transportTypes: [],
  transportType: {},
  isGetTransportTypesSuccess: false,
  isGetTransportTypesError: false,
  isGetTransportTypeSuccess: false,
  isGetTransportTypeError: false,
  isUpdatedTransportTypeSuccess: false,
  isUpdatedTransportTypeError: false,
  isDeletedTransportTypeSuccess: false,
  isDeletedTransportTypeError: false,
  isCreatedTransportTypeSuccess: false,
  isCreatedTransportTypeError: false,
};

const reducer = handleActions(
  {
    // get Transport Types
    [getTransportTypesRequest]: (state) => ({
      ...state,
      isGetTransportTypesSuccess: false,
      isGetTransportTypesError: false,
    }),
    [getTransportTypesSuccess]: (state, { payload }) => ({
      ...state,
      transportTypes: payload || [],
      isGetTransportTypesSuccess: true,
      isGetTransportTypesError: false,
    }),
    [getTransportTypesFailure]: (state) => ({
      ...state,
      isGetTransportTypesSuccess: false,
      isGetTransportTypesError: true,
    }),
    // get Transport Type
    [getTransportTypeRequest]: (state) => ({
      ...state,
      isGetTransportTypeSuccess: false,
      isGetTransportTypeError: false,
    }),
    [getTransportTypeSuccess]: (state, { payload }) => ({
      ...state,
      transportType: payload ?? {},
      isGetTransportTypeSuccess: true,
      isGetTransportTypeError: false,
    }),
    [getTransportTypeFailure]: (state) => ({
      ...state,
      isGetTransportTypeSuccess: false,
      isGetTransportTypeError: true,
    }),
    // update Transport Type
    [updateTransportTypeRequest]: (state) => ({
      ...state,
      isUpdatedTransportTypeSuccess: false,
      isUpdatedTransportTypeError: false,
    }),
    [updateTransportTypeSuccess]: (state) => ({
      ...state,
      isUpdatedTransportTypeSuccess: true,
      isUpdatedTransportTypeError: false,
    }),
    [updateTransportTypeFailure]: (state) => ({
      ...state,
      isUpdatedTransportTypeSuccess: false,
      isUpdatedTransportTypeError: true,
    }),
    // delete Transport Type
    [deleteTransportTypeRequest]: (state) => ({
      ...state,
      isDeletedTransportTypeSuccess: false,
      isDeletedTransportTypeError: false,
    }),
    [deleteTransportTypeSuccess]: (state) => ({
      ...state,
      isDeletedTransportTypeSuccess: true,
      isDeletedTransportTypeError: false,
    }),
    [deleteTransportTypeFailure]: (state) => ({
      ...state,
      isDeletedTransportTypeSuccess: false,
      isDeletedTransportTypeError: true,
    }),
    // create Transport Type
    [createTransportTypeRequest]: (state) => ({
      ...state,
      isCreatedTransportTypeSuccess: false,
      isCreatedTransportTypeError: false,
    }),
    [createTransportTypeSuccess]: (state) => ({
      ...state,
      isCreatedTransportTypeSuccess: true,
      isCreatedTransportTypeError: false,
    }),
    [createTransportTypeFailure]: (state) => ({
      ...state,
      isCreatedTransportTypeSuccess: false,
      isCreatedTransportTypeError: true,
    }),
  },
  initialState
);

export default reducer;
