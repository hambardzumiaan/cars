import { handleActions } from "redux-actions";
import {
  createInteriorColorFailure,
  createInteriorColorRequest,
  createInteriorColorSuccess,
  deleteInteriorColorFailure,
  deleteInteriorColorRequest,
  deleteInteriorColorSuccess,
  getInteriorColorSuccess,
  getInteriorColorFailure,
  getInteriorColorRequest,
  getInteriorColorsFailure,
  getInteriorColorsRequest,
  getInteriorColorsSuccess,
  updateInteriorColorFailure,
  updateInteriorColorRequest,
  updateInteriorColorSuccess,
} from "./actions";

const initialState = {
  interiorColors: [],
  interiorColor: {},
  isGetInteriorColorsSuccess: false,
  isGetInteriorColorsError: false,
  isGetInteriorColorSuccess: false,
  isGetInteriorColorError: false,
  isUpdatedInteriorColorSuccess: false,
  isUpdatedInteriorColorError: false,
  isDeletedInteriorColorSuccess: false,
  isDeletedInteriorColorError: false,
  isCreatedInteriorColorSuccess: false,
  isCreatedInteriorColorError: false,
};

const reducer = handleActions(
  {
    // get Interior colors
    [getInteriorColorsRequest]: (state) => ({
      ...state,
      isGetInteriorColorsSuccess: false,
      isGetInteriorColorsError: false,
    }),
    [getInteriorColorsSuccess]: (state, { payload }) => ({
      ...state,
      interiorColors: payload || [],
      isGetInteriorColorsSuccess: true,
      isGetInteriorColorsError: false,
    }),
    [getInteriorColorsFailure]: (state) => ({
      ...state,
      isGetInteriorColorsSuccess: false,
      isGetInteriorColorsError: true,
    }),
    // get Interior color
    [getInteriorColorRequest]: (state) => ({
      ...state,
      isGetInteriorColorSuccess: false,
      isGetInteriorColorError: false,
    }),
    [getInteriorColorSuccess]: (state, { payload }) => ({
      ...state,
      interiorColor: payload ?? {},
      isGetInteriorColorSuccess: true,
      isGetInteriorColorError: false,
    }),
    [getInteriorColorFailure]: (state) => ({
      ...state,
      isGetInteriorColorSuccess: false,
      isGetInteriorColorError: true,
    }),
    // update Interior color
    [updateInteriorColorRequest]: (state) => ({
      ...state,
      isUpdatedInteriorColorSuccess: false,
      isUpdatedInteriorColorError: false,
    }),
    [updateInteriorColorSuccess]: (state) => ({
      ...state,
      isUpdatedInteriorColorSuccess: true,
      isUpdatedInteriorColorError: false,
    }),
    [updateInteriorColorFailure]: (state) => ({
      ...state,
      isUpdatedInteriorColorSuccess: false,
      isUpdatedInteriorColorError: true,
    }),
    // delete Interior color
    [deleteInteriorColorRequest]: (state) => ({
      ...state,
      isDeletedInteriorColorSuccess: false,
      isDeletedInteriorColorError: false,
    }),
    [deleteInteriorColorSuccess]: (state) => ({
      ...state,
      isDeletedInteriorColorSuccess: true,
      isDeletedInteriorColorError: false,
    }),
    [deleteInteriorColorFailure]: (state) => ({
      ...state,
      isDeletedInteriorColorSuccess: false,
      isDeletedInteriorColorError: true,
    }),
    // create Interior color
    [createInteriorColorRequest]: (state) => ({
      ...state,
      isCreatedInteriorColorSuccess: false,
      isCreatedInteriorColorError: false,
    }),
    [createInteriorColorSuccess]: (state) => ({
      ...state,
      isCreatedInteriorColorSuccess: true,
      isCreatedInteriorColorError: false,
    }),
    [createInteriorColorFailure]: (state) => ({
      ...state,
      isCreatedInteriorColorSuccess: false,
      isCreatedInteriorColorError: true,
    }),
  },
  initialState
);

export default reducer;
