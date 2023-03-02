import { createAction } from "redux-actions";

export const getCarsRequest = createAction("GET_CARS_REQUEST");
export const getCarsSuccess = createAction("GET_CARS_SUCCESS");
export const getCarsFailure = createAction("GET_CARS_FAILURE");

export const getCarRequest = createAction("GET_CAR_REQUEST");
export const getCarSuccess = createAction("GET_CAR_SUCCESS");
export const getCarFailure = createAction("GET_CAR_FAILURE");

export const updateCarRequest = createAction("UPDATE_CAR_REQUEST");
export const updateCarSuccess = createAction("UPDATE_CAR_SUCCESS");
export const updateCarFailure = createAction("UPDATE_CAR_FAILURE");

export const deleteCarRequest = createAction("DELETE_CAR_REQUEST");
export const deleteCarSuccess = createAction("DELETE_CAR_SUCCESS");
export const deleteCarFailure = createAction("DELETE_CAR_FAILURE");

export const createCarRequest = createAction("CREATE_CAR_REQUEST");
export const createCarSuccess = createAction("CREATE_CAR_SUCCESS");
export const createCarFailure = createAction("CREATE_CAR_FAILURE");

export const deleteCarPhotoRequest = createAction("DELETE_CAR_PHOTO_REQUEST");
export const deleteCarPhotoSuccess = createAction("DELETE_CAR_PHOTO_SUCCESS");
export const deleteCarPhotoFailure = createAction("DELETE_CAR_PHOTO_FAILURE");
