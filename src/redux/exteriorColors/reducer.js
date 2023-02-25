import { handleActions } from "redux-actions";
import {
  createExteriorColorFailure,
  createExteriorColorRequest,
  createExteriorColorSuccess,
  deleteExteriorColorFailure,
  deleteExteriorColorRequest,
  deleteExteriorColorSuccess,
  getExteriorColorSuccess,
  getExteriorColorFailure,
  getExteriorColorRequest,
  getExteriorColorsFailure,
  getExteriorColorsRequest,
  getExteriorColorsSuccess,
  updateExteriorColorFailure,
  updateExteriorColorRequest,
  updateExteriorColorSuccess,
} from "./actions";

const initialState = {
  exteriorColors: [],
  exteriorColor: {},
  isGetExteriorColorsSuccess: false,
  isGetExteriorColorsError: false,
  isGetExteriorColorSuccess: false,
  isGetExteriorColorError: false,
  isUpdatedExteriorColorSuccess: false,
  isUpdatedExteriorColorError: false,
  isDeletedExteriorColorSuccess: false,
  isDeletedExteriorColorError: false,
  isCreatedExteriorColorSuccess: false,
  isCreatedExteriorColorError: false,
};

const reducer = handleActions(
  {
    // get Exterior colors
    [getExteriorColorsRequest]: (state) => ({
      ...state,
      isGetExteriorColorsSuccess: false,
      isGetExteriorColorsError: false,
    }),
    [getExteriorColorsSuccess]: (state, { payload }) => ({
      ...state,
      exteriorColors: payload || [],
      isGetExteriorColorsSuccess: true,
      isGetExteriorColorsError: false,
    }),
    [getExteriorColorsFailure]: (state) => ({
      ...state,
      isGetExteriorColorsSuccess: false,
      isGetExteriorColorsError: true,
    }),
    // get Exterior color
    [getExteriorColorRequest]: (state) => ({
      ...state,
      isGetExteriorColorSuccess: false,
      isGetExteriorColorError: false,
    }),
    [getExteriorColorSuccess]: (state, { payload }) => ({
      ...state,
      exteriorColor: payload ?? {},
      isGetExteriorColorSuccess: true,
      isGetExteriorColorError: false,
    }),
    [getExteriorColorFailure]: (state) => ({
      ...state,
      isGetExteriorColorSuccess: false,
      isGetExteriorColorError: true,
    }),
    // update Exterior color
    [updateExteriorColorRequest]: (state) => ({
      ...state,
      isUpdatedExteriorColorSuccess: false,
      isUpdatedExteriorColorError: false,
    }),
    [updateExteriorColorSuccess]: (state) => ({
      ...state,
      isUpdatedExteriorColorSuccess: true,
      isUpdatedExteriorColorError: false,
    }),
    [updateExteriorColorFailure]: (state) => ({
      ...state,
      isUpdatedExteriorColorSuccess: false,
      isUpdatedExteriorColorError: true,
    }),
    // delete Exterior color
    [deleteExteriorColorRequest]: (state) => ({
      ...state,
      isDeletedExteriorColorSuccess: false,
      isDeletedExteriorColorError: false,
    }),
    [deleteExteriorColorSuccess]: (state) => ({
      ...state,
      isDeletedExteriorColorSuccess: true,
      isDeletedExteriorColorError: false,
    }),
    [deleteExteriorColorFailure]: (state) => ({
      ...state,
      isDeletedExteriorColorSuccess: false,
      isDeletedExteriorColorError: true,
    }),
    // create Exterior color
    [createExteriorColorRequest]: (state) => ({
      ...state,
      isCreatedExteriorColorSuccess: false,
      isCreatedExteriorColorError: false,
    }),
    [createExteriorColorSuccess]: (state) => ({
      ...state,
      isCreatedExteriorColorSuccess: true,
      isCreatedExteriorColorError: false,
    }),
    [createExteriorColorFailure]: (state) => ({
      ...state,
      isCreatedExteriorColorSuccess: false,
      isCreatedExteriorColorError: true,
    }),
  },
  initialState
);

export default reducer;
