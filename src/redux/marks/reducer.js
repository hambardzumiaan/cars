import { handleActions } from "redux-actions";
import {
  createMarkFailure,
  createMarkRequest,
  createMarkSuccess,
  deleteMarkFailure,
  deleteMarkRequest,
  deleteMarkSuccess,
  getMarkSuccess,
  getMarkFailure,
  getMarkRequest,
  getMarksFailure,
  getMarksRequest,
  getMarksSuccess,
  updateMarkFailure,
  updateMarkRequest,
  updateMarkSuccess,
} from "./actions";

const initialState = {
  marks: [],
  mark: {},
  isGetMarksSuccess: false,
  isGetMarksError: false,
  isGetMarkSuccess: false,
  isGetMarkError: false,
  isUpdatedMarkSuccess: false,
  isUpdatedMarkError: false,
  isDeletedMarkSuccess: false,
  isDeletedMarkError: false,
  isCreatedMarkSuccess: false,
  isCreatedMarkError: false,
};

const reducer = handleActions(
  {
    // get marks
    [getMarksRequest]: (state) => ({
      ...state,
      isGetMarksSuccess: false,
      isGetMarksError: false,
    }),
    [getMarksSuccess]: (state, { payload }) => ({
      ...state,
      marks: payload || [],
      isGetMarksSuccess: true,
      isGetMarksError: false,
    }),
    [getMarksFailure]: (state) => ({
      ...state,
      isGetMarksSuccess: false,
      isGetMarksError: true,
    }),
    // get mark
    [getMarkRequest]: (state) => ({
      ...state,
      isGetMarkSuccess: false,
      isGetMarkError: false,
    }),
    [getMarkSuccess]: (state, { payload }) => ({
      ...state,
      mark: payload ?? {},
      isGetMarkSuccess: true,
      isGetMarkError: false,
    }),
    [getMarkFailure]: (state) => ({
      ...state,
      isGetMarkSuccess: false,
      isGetMarkError: true,
    }),
    // update mark
    [updateMarkRequest]: (state) => ({
      ...state,
      isUpdatedMarkSuccess: false,
      isUpdatedMarkError: false,
    }),
    [updateMarkSuccess]: (state) => ({
      ...state,
      isUpdatedMarkSuccess: true,
      isUpdatedMarkError: false,
    }),
    [updateMarkFailure]: (state) => ({
      ...state,
      isUpdatedMarkSuccess: false,
      isUpdatedMarkError: true,
    }),
    // delete mark
    [deleteMarkRequest]: (state) => ({
      ...state,
      isDeletedMarkSuccess: false,
      isDeletedMarkError: false,
    }),
    [deleteMarkSuccess]: (state) => ({
      ...state,
      isDeletedMarkSuccess: true,
      isDeletedMarkError: false,
    }),
    [deleteMarkFailure]: (state) => ({
      ...state,
      isDeletedMarkSuccess: false,
      isDeletedMarkError: true,
    }),
    // create mark
    [createMarkRequest]: (state) => ({
      ...state,
      isCreatedMarkSuccess: false,
      isCreatedMarkError: false,
    }),
    [createMarkSuccess]: (state) => ({
      ...state,
      isCreatedMarkSuccess: true,
      isCreatedMarkError: false,
    }),
    [createMarkFailure]: (state) => ({
      ...state,
      isCreatedMarkSuccess: false,
      isCreatedMarkError: true,
    }),
  },
  initialState
);

export default reducer;
