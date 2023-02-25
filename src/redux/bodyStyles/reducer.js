import { handleActions } from "redux-actions";
import {
  createBodyStyleFailure,
  createBodyStyleRequest,
  createBodyStyleSuccess,
  deleteBodyStyleFailure,
  deleteBodyStyleRequest,
  deleteBodyStyleSuccess,
  getBodyStyleSuccess,
  getBodyStyleFailure,
  getBodyStyleRequest,
  getBodyStylesFailure,
  getBodyStylesRequest,
  getBodyStylesSuccess,
  updateBodyStyleFailure,
  updateBodyStyleRequest,
  updateBodyStyleSuccess,
} from "./actions";

const initialState = {
  bodyStyles: [],
  bodyStyle: {},
  isGetBodyStylesSuccess: false,
  isGetBodyStylesError: false,
  isGetBodyStyleSuccess: false,
  isGetBodyStyleError: false,
  isUpdatedBodyStyleSuccess: false,
  isUpdatedBodyStyleError: false,
  isDeletedBodyStyleSuccess: false,
  isDeletedBodyStyleError: false,
  isCreatedBodyStyleSuccess: false,
  isCreatedBodyStyleError: false,
};

const reducer = handleActions(
  {
    // get BodyStyles
    [getBodyStylesRequest]: (state) => ({
      ...state,
      isGetBodyStylesSuccess: false,
      isGetBodyStylesError: false,
    }),
    [getBodyStylesSuccess]: (state, { payload }) => ({
      ...state,
      bodyStyles: payload || [],
      isGetBodyStylesSuccess: true,
      isGetBodyStylesError: false,
    }),
    [getBodyStylesFailure]: (state) => ({
      ...state,
      isGetBodyStylesSuccess: false,
      isGetBodyStylesError: true,
    }),
    // get BodyStyle
    [getBodyStyleRequest]: (state) => ({
      ...state,
      isGetBodyStyleSuccess: false,
      isGetBodyStyleError: false,
    }),
    [getBodyStyleSuccess]: (state, { payload }) => ({
      ...state,
      bodyStyle: payload ?? {},
      isGetBodyStyleSuccess: true,
      isGetBodyStyleError: false,
    }),
    [getBodyStyleFailure]: (state) => ({
      ...state,
      isGetBodyStyleSuccess: false,
      isGetBodyStyleError: true,
    }),
    // update BodyStyle
    [updateBodyStyleRequest]: (state) => ({
      ...state,
      isUpdatedBodyStyleSuccess: false,
      isUpdatedBodyStyleError: false,
    }),
    [updateBodyStyleSuccess]: (state) => ({
      ...state,
      isUpdatedBodyStyleSuccess: true,
      isUpdatedBodyStyleError: false,
    }),
    [updateBodyStyleFailure]: (state) => ({
      ...state,
      isUpdatedBodyStyleSuccess: false,
      isUpdatedBodyStyleError: true,
    }),
    // delete BodyStyle
    [deleteBodyStyleRequest]: (state) => ({
      ...state,
      isDeletedBodyStyleSuccess: false,
      isDeletedBodyStyleError: false,
    }),
    [deleteBodyStyleSuccess]: (state) => ({
      ...state,
      isDeletedBodyStyleSuccess: true,
      isDeletedBodyStyleError: false,
    }),
    [deleteBodyStyleFailure]: (state) => ({
      ...state,
      isDeletedBodyStyleSuccess: false,
      isDeletedBodyStyleError: true,
    }),
    // create BodyStyle
    [createBodyStyleRequest]: (state) => ({
      ...state,
      isCreatedBodyStyleSuccess: false,
      isCreatedBodyStyleError: false,
    }),
    [createBodyStyleSuccess]: (state) => ({
      ...state,
      isCreatedBodyStyleSuccess: true,
      isCreatedBodyStyleError: false,
    }),
    [createBodyStyleFailure]: (state) => ({
      ...state,
      isCreatedBodyStyleSuccess: false,
      isCreatedBodyStyleError: true,
    }),
  },
  initialState
);

export default reducer;
