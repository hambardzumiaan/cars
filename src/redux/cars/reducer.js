import { handleActions } from "redux-actions";
import {
  createCarFailure,
  createCarRequest,
  createCarSuccess,
  deleteCarFailure,
  deleteCarRequest,
  deleteCarSuccess,
  getCarSuccess,
  getCarFailure,
  getCarRequest,
  getCarsFailure,
  getCarsRequest,
  getCarsSuccess,
  updateCarFailure,
  updateCarRequest,
  updateCarSuccess,
  deleteCarPhotoRequest,
  deleteCarPhotoSuccess,
  deleteCarPhotoFailure,
} from "./actions";

const initialState = {
  cars: [],
  car: {},
  isGetCarsSuccess: false,
  isGetCarsError: false,
  isGetCarSuccess: false,
  isGetCarError: false,
  isUpdatedCarSuccess: false,
  isUpdatedCarError: false,
  isDeletedCarSuccess: false,
  isDeletedCarError: false,
  isCreatedCarSuccess: false,
  isCreatedCarError: false,
  isDeleteCarPhotoSuccess: false,
  isDeleteCarPhotoError: false,
};

const reducer = handleActions(
  {
    // get Car
    [getCarsRequest]: (state) => ({
      ...state,
      isGetCarsSuccess: false,
      isGetCarsError: false,
    }),
    [getCarsSuccess]: (state, { payload }) => ({
      ...state,
      cars: payload || [],
      isGetCarsSuccess: true,
      isGetCarsError: false,
    }),
    [getCarsFailure]: (state) => ({
      ...state,
      isGetCarsSuccess: false,
      isGetCarsError: true,
    }),
    // get Car
    [getCarRequest]: (state) => ({
      ...state,
      isGetCarSuccess: false,
      isGetCarError: false,
    }),
    [getCarSuccess]: (state, { payload }) => ({
      ...state,
      car: payload ?? {},
      isGetCarSuccess: true,
      isGetCarError: false,
    }),
    [getCarFailure]: (state) => ({
      ...state,
      isGetCarSuccess: false,
      isGetCarError: true,
    }),
    // update Car
    [updateCarRequest]: (state) => ({
      ...state,
      isUpdatedCarSuccess: false,
      isUpdatedCarError: false,
    }),
    [updateCarSuccess]: (state, { payload }) => ({
      ...state,
      car: payload || {},
      isUpdatedCarSuccess: true,
      isUpdatedCarError: false,
    }),
    [updateCarFailure]: (state) => ({
      ...state,
      isUpdatedCarSuccess: false,
      isUpdatedCarError: true,
    }),
    // delete Car
    [deleteCarRequest]: (state) => ({
      ...state,
      isDeletedCarSuccess: false,
      isDeletedCarError: false,
    }),
    [deleteCarSuccess]: (state) => ({
      ...state,
      isDeletedCarSuccess: true,
      isDeletedCarError: false,
    }),
    [deleteCarFailure]: (state) => ({
      ...state,
      isDeletedCarSuccess: false,
      isDeletedCarError: true,
    }),
    // create Car
    [createCarRequest]: (state) => ({
      ...state,
      isCreatedCarSuccess: false,
      isCreatedCarError: false,
    }),
    [createCarSuccess]: (state) => ({
      ...state,
      isCreatedCarSuccess: true,
      isCreatedCarError: false,
    }),
    [createCarFailure]: (state) => ({
      ...state,
      isCreatedCarSuccess: false,
      isCreatedCarError: true,
    }),
    // delete car photo
    [deleteCarPhotoRequest]: (state) => ({
      ...state,
      isDeleteCarPhotoSuccess: false,
      isDeleteCarPhotoError: false,
    }),
    [deleteCarPhotoSuccess]: (state) => ({
      ...state,
      isDeleteCarPhotoSuccess: true,
      isDeleteCarPhotoError: false,
    }),
    [deleteCarPhotoFailure]: (state) => ({
      ...state,
      isDeleteCarPhotoSuccess: false,
      isDeleteCarPhotoError: true,
    }),
  },
  initialState
);

export default reducer;
