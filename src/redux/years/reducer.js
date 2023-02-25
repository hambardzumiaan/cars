import { handleActions } from "redux-actions";
import {
  createYearFailure,
  createYearRequest,
  createYearSuccess,
  deleteYearFailure,
  deleteYearRequest,
  deleteYearSuccess,
  getYearSuccess,
  getYearFailure,
  getYearRequest,
  getYearsFailure,
  getYearsRequest,
  getYearsSuccess,
  updateYearFailure,
  updateYearRequest,
  updateYearSuccess,
} from "./actions";

const initialState = {
  years: [],
  year: {},
  isGetYearsSuccess: false,
  isGetYearsError: false,
  isGetYearSuccess: false,
  isGetYearError: false,
  isUpdatedYearSuccess: false,
  isUpdatedYearError: false,
  isDeletedYearSuccess: false,
  isDeletedYearError: false,
  isCreatedYearSuccess: false,
  isCreatedYearError: false,
};

const reducer = handleActions(
  {
    // get Year
    [getYearsRequest]: (state) => ({
      ...state,
      isGetYearsSuccess: false,
      isGetYearsError: false,
    }),
    [getYearsSuccess]: (state, { payload }) => ({
      ...state,
      years: payload || [],
      isGetYearsSuccess: true,
      isGetYearsError: false,
    }),
    [getYearsFailure]: (state) => ({
      ...state,
      isGetYearsSuccess: false,
      isGetYearsError: true,
    }),
    // get Year
    [getYearRequest]: (state) => ({
      ...state,
      isGetYearSuccess: false,
      isGetYearError: false,
    }),
    [getYearSuccess]: (state, { payload }) => ({
      ...state,
      year: payload ?? {},
      isGetYearSuccess: true,
      isGetYearError: false,
    }),
    [getYearFailure]: (state) => ({
      ...state,
      isGetYearSuccess: false,
      isGetYearError: true,
    }),
    // update Year
    [updateYearRequest]: (state) => ({
      ...state,
      isUpdatedYearSuccess: false,
      isUpdatedYearError: false,
    }),
    [updateYearSuccess]: (state) => ({
      ...state,
      isUpdatedYearSuccess: true,
      isUpdatedYearError: false,
    }),
    [updateYearFailure]: (state) => ({
      ...state,
      isUpdatedYearSuccess: false,
      isUpdatedYearError: true,
    }),
    // delete Year
    [deleteYearRequest]: (state) => ({
      ...state,
      isDeletedYearSuccess: false,
      isDeletedYearError: false,
    }),
    [deleteYearSuccess]: (state) => ({
      ...state,
      isDeletedYearSuccess: true,
      isDeletedYearError: false,
    }),
    [deleteYearFailure]: (state) => ({
      ...state,
      isDeletedYearSuccess: false,
      isDeletedYearError: true,
    }),
    // create Year
    [createYearRequest]: (state) => ({
      ...state,
      isCreatedYearSuccess: false,
      isCreatedYearError: false,
    }),
    [createYearSuccess]: (state) => ({
      ...state,
      isCreatedYearSuccess: true,
      isCreatedYearError: false,
    }),
    [createYearFailure]: (state) => ({
      ...state,
      isCreatedYearSuccess: false,
      isCreatedYearError: true,
    }),
  },
  initialState
);

export default reducer;
