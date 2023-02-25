import { handleActions } from "redux-actions";
import {
  createFuelTypeFailure,
  createFuelTypeRequest,
  createFuelTypeSuccess,
  deleteFuelTypeFailure,
  deleteFuelTypeRequest,
  deleteFuelTypeSuccess,
  getFuelTypeSuccess,
  getFuelTypeFailure,
  getFuelTypeRequest,
  getFuelTypesFailure,
  getFuelTypesRequest,
  getFuelTypesSuccess,
  updateFuelTypeFailure,
  updateFuelTypeRequest,
  updateFuelTypeSuccess,
} from "./actions";

const initialState = {
  fuelTypes: [],
  fuelType: {},
  isGetFuelTypesSuccess: false,
  isGetFuelTypesError: false,
  isGetFuelTypeSuccess: false,
  isGetFuelTypeError: false,
  isUpdatedFuelTypeSuccess: false,
  isUpdatedFuelTypeError: false,
  isDeletedFuelTypeSuccess: false,
  isDeletedFuelTypeError: false,
  isCreatedFuelTypeSuccess: false,
  isCreatedFuelTypeError: false,
};

const reducer = handleActions(
  {
    // get fuelTypes
    [getFuelTypesRequest]: (state) => ({
      ...state,
      isGetFuelTypesSuccess: false,
      isGetFuelTypesError: false,
    }),
    [getFuelTypesSuccess]: (state, { payload }) => ({
      ...state,
      fuelTypes: payload || [],
      isGetFuelTypesSuccess: true,
      isGetFuelTypesError: false,
    }),
    [getFuelTypesFailure]: (state) => ({
      ...state,
      isGetFuelTypesSuccess: false,
      isGetFuelTypesError: true,
    }),
    // get fuelType
    [getFuelTypeRequest]: (state) => ({
      ...state,
      isGetFuelTypeSuccess: false,
      isGetFuelTypeError: false,
    }),
    [getFuelTypeSuccess]: (state, { payload }) => ({
      ...state,
      fuelType: payload ?? {},
      isGetFuelTypeSuccess: true,
      isGetFuelTypeError: false,
    }),
    [getFuelTypeFailure]: (state) => ({
      ...state,
      isGetFuelTypeSuccess: false,
      isGetFuelTypeError: true,
    }),
    // update fuelType
    [updateFuelTypeRequest]: (state) => ({
      ...state,
      isUpdatedFuelTypeSuccess: false,
      isUpdatedFuelTypeError: false,
    }),
    [updateFuelTypeSuccess]: (state) => ({
      ...state,
      isUpdatedFuelTypeSuccess: true,
      isUpdatedFuelTypeError: false,
    }),
    [updateFuelTypeFailure]: (state) => ({
      ...state,
      isUpdatedFuelTypeSuccess: false,
      isUpdatedFuelTypeError: true,
    }),
    // delete fuelType
    [deleteFuelTypeRequest]: (state) => ({
      ...state,
      isDeletedFuelTypeSuccess: false,
      isDeletedFuelTypeError: false,
    }),
    [deleteFuelTypeSuccess]: (state) => ({
      ...state,
      isDeletedFuelTypeSuccess: true,
      isDeletedFuelTypeError: false,
    }),
    [deleteFuelTypeFailure]: (state) => ({
      ...state,
      isDeletedFuelTypeSuccess: false,
      isDeletedFuelTypeError: true,
    }),
    // create fuelType
    [createFuelTypeRequest]: (state) => ({
      ...state,
      isCreatedFuelTypeSuccess: false,
      isCreatedFuelTypeError: false,
    }),
    [createFuelTypeSuccess]: (state) => ({
      ...state,
      isCreatedFuelTypeSuccess: true,
      isCreatedFuelTypeError: false,
    }),
    [createFuelTypeFailure]: (state) => ({
      ...state,
      isCreatedFuelTypeSuccess: false,
      isCreatedFuelTypeError: true,
    }),
  },
  initialState
);

export default reducer;
