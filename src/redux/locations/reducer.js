import { handleActions } from "redux-actions";
import {
  createLocationFailure,
  createLocationRequest,
  createLocationSuccess,
  deleteLocationFailure,
  deleteLocationRequest,
  deleteLocationSuccess,
  getLocationSuccess,
  getLocationFailure,
  getLocationRequest,
  getLocationsFailure,
  getLocationsRequest,
  getLocationsSuccess,
  updateLocationFailure,
  updateLocationRequest,
  updateLocationSuccess,
} from "./actions";

const initialState = {
  locations: [],
  location: {},
  isGetLocationsSuccess: false,
  isGetLocationsError: false,
  isGetLocationSuccess: false,
  isGetLocationError: false,
  isUpdatedLocationSuccess: false,
  isUpdatedLocationError: false,
  isDeletedLocationSuccess: false,
  isDeletedLocationError: false,
  isCreatedLocationSuccess: false,
  isCreatedLocationError: false,
};

const reducer = handleActions(
  {
    // get Location
    [getLocationsRequest]: (state) => ({
      ...state,
      isGetLocationsSuccess: false,
      isGetLocationsError: false,
    }),
    [getLocationsSuccess]: (state, { payload }) => ({
      ...state,
      locations: payload || [],
      isGetLocationsSuccess: true,
      isGetLocationsError: false,
    }),
    [getLocationsFailure]: (state) => ({
      ...state,
      isGetLocationsSuccess: false,
      isGetLocationsError: true,
    }),
    // get location
    [getLocationRequest]: (state) => ({
      ...state,
      isGetLocationSuccess: false,
      isGetLocationError: false,
    }),
    [getLocationSuccess]: (state, { payload }) => ({
      ...state,
      location: payload ?? {},
      isGetLocationSuccess: true,
      isGetLocationError: false,
    }),
    [getLocationFailure]: (state) => ({
      ...state,
      isGetLocationSuccess: false,
      isGetLocationError: true,
    }),
    // update location
    [updateLocationRequest]: (state) => ({
      ...state,
      isUpdatedLocationSuccess: false,
      isUpdatedLocationError: false,
    }),
    [updateLocationSuccess]: (state) => ({
      ...state,
      isUpdatedLocationSuccess: true,
      isUpdatedLocationError: false,
    }),
    [updateLocationFailure]: (state) => ({
      ...state,
      isUpdatedLocationSuccess: false,
      isUpdatedLocationError: true,
    }),
    // delete location
    [deleteLocationRequest]: (state) => ({
      ...state,
      isDeletedLocationSuccess: false,
      isDeletedLocationError: false,
    }),
    [deleteLocationSuccess]: (state) => ({
      ...state,
      isDeletedLocationSuccess: true,
      isDeletedLocationError: false,
    }),
    [deleteLocationFailure]: (state) => ({
      ...state,
      isDeletedLocationSuccess: false,
      isDeletedLocationError: true,
    }),
    // create location
    [createLocationRequest]: (state) => ({
      ...state,
      isCreatedLocationSuccess: false,
      isCreatedLocationError: false,
    }),
    [createLocationSuccess]: (state) => ({
      ...state,
      isCreatedLocationSuccess: true,
      isCreatedLocationError: false,
    }),
    [createLocationFailure]: (state) => ({
      ...state,
      isCreatedLocationSuccess: false,
      isCreatedLocationError: true,
    }),
  },
  initialState
);

export default reducer;
