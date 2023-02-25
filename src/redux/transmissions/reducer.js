import { handleActions } from "redux-actions";
import {
  createTransmissionFailure,
  createTransmissionRequest,
  createTransmissionSuccess,
  deleteTransmissionFailure,
  deleteTransmissionRequest,
  deleteTransmissionSuccess,
  getTransmissionSuccess,
  getTransmissionFailure,
  getTransmissionRequest,
  getTransmissionsFailure,
  getTransmissionsRequest,
  getTransmissionsSuccess,
  updateTransmissionFailure,
  updateTransmissionRequest,
  updateTransmissionSuccess,
} from "./actions";

const initialState = {
  transmissions: [],
  transmission: {},
  isGetTransmissionsSuccess: false,
  isGetTransmissionsError: false,
  isGetTransmissionSuccess: false,
  isGetTransmissionError: false,
  isUpdatedTransmissionSuccess: false,
  isUpdatedTransmissionError: false,
  isDeletedTransmissionSuccess: false,
  isDeletedTransmissionError: false,
  isCreatedTransmissionSuccess: false,
  isCreatedTransmissionError: false,
};

const reducer = handleActions(
  {
    // get Transmissions
    [getTransmissionsRequest]: (state) => ({
      ...state,
      isGetTransmissionsSuccess: false,
      isGetTransmissionsError: false,
    }),
    [getTransmissionsSuccess]: (state, { payload }) => ({
      ...state,
      transmissions: payload || [],
      isGetTransmissionsSuccess: true,
      isGetTransmissionsError: false,
    }),
    [getTransmissionsFailure]: (state) => ({
      ...state,
      isGetTransmissionsSuccess: false,
      isGetTransmissionsError: true,
    }),
    // get transmission
    [getTransmissionRequest]: (state) => ({
      ...state,
      isGetTransmissionSuccess: false,
      isGetTransmissionError: false,
    }),
    [getTransmissionSuccess]: (state, { payload }) => ({
      ...state,
      transmission: payload ?? {},
      isGetTransmissionSuccess: true,
      isGetTransmissionError: false,
    }),
    [getTransmissionFailure]: (state) => ({
      ...state,
      isGetTransmissionSuccess: false,
      isGetTransmissionError: true,
    }),
    // update Transmission
    [updateTransmissionRequest]: (state) => ({
      ...state,
      isUpdatedTransmissionSuccess: false,
      isUpdatedTransmissionError: false,
    }),
    [updateTransmissionSuccess]: (state) => ({
      ...state,
      isUpdatedTransmissionSuccess: true,
      isUpdatedTransmissionError: false,
    }),
    [updateTransmissionFailure]: (state) => ({
      ...state,
      isUpdatedTransmissionSuccess: false,
      isUpdatedTransmissionError: true,
    }),
    // delete Transmission
    [deleteTransmissionRequest]: (state) => ({
      ...state,
      isDeletedTransmissionSuccess: false,
      isDeletedTransmissionError: false,
    }),
    [deleteTransmissionSuccess]: (state) => ({
      ...state,
      isDeletedTransmissionSuccess: true,
      isDeletedTransmissionError: false,
    }),
    [deleteTransmissionFailure]: (state) => ({
      ...state,
      isDeletedTransmissionSuccess: false,
      isDeletedTransmissionError: true,
    }),
    // create Transmission
    [createTransmissionRequest]: (state) => ({
      ...state,
      isCreatedTransmissionSuccess: false,
      isCreatedTransmissionError: false,
    }),
    [createTransmissionSuccess]: (state) => ({
      ...state,
      isCreatedTransmissionSuccess: true,
      isCreatedTransmissionError: false,
    }),
    [createTransmissionFailure]: (state) => ({
      ...state,
      isCreatedTransmissionSuccess: false,
      isCreatedTransmissionError: true,
    }),
  },
  initialState
);

export default reducer;
