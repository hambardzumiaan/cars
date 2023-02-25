import { handleActions } from "redux-actions";
import {
  createSeatFailure,
  createSeatRequest,
  createSeatSuccess,
  deleteSeatFailure,
  deleteSeatRequest,
  deleteSeatSuccess,
  getSeatSuccess,
  getSeatFailure,
  getSeatRequest,
  getSeatsFailure,
  getSeatsRequest,
  getSeatsSuccess,
  updateSeatFailure,
  updateSeatRequest,
  updateSeatSuccess,
} from "./actions";

const initialState = {
  seats: [],
  seat: {},
  isGetSeatsSuccess: false,
  isGetSeatsError: false,
  isGetSeatSuccess: false,
  isGetSeatError: false,
  isUpdatedSeatSuccess: false,
  isUpdatedSeatError: false,
  isDeletedSeatSuccess: false,
  isDeletedSeatError: false,
  isCreatedSeatSuccess: false,
  isCreatedSeatError: false,
};

const reducer = handleActions(
  {
    // get Seat
    [getSeatsRequest]: (state) => ({
      ...state,
      isGetSeatsSuccess: false,
      isGetSeatsError: false,
    }),
    [getSeatsSuccess]: (state, { payload }) => ({
      ...state,
      seats: payload || [],
      isGetSeatsSuccess: true,
      isGetSeatsError: false,
    }),
    [getSeatsFailure]: (state) => ({
      ...state,
      isGetSeatsSuccess: false,
      isGetSeatsError: true,
    }),
    // get Seat
    [getSeatRequest]: (state) => ({
      ...state,
      isGetSeatSuccess: false,
      isGetSeatError: false,
    }),
    [getSeatSuccess]: (state, { payload }) => ({
      ...state,
      seat: payload ?? {},
      isGetSeatSuccess: true,
      isGetSeatError: false,
    }),
    [getSeatFailure]: (state) => ({
      ...state,
      isGetSeatSuccess: false,
      isGetSeatError: true,
    }),
    // update Seat
    [updateSeatRequest]: (state) => ({
      ...state,
      isUpdatedSeatSuccess: false,
      isUpdatedSeatError: false,
    }),
    [updateSeatSuccess]: (state) => ({
      ...state,
      isUpdatedSeatSuccess: true,
      isUpdatedSeatError: false,
    }),
    [updateSeatFailure]: (state) => ({
      ...state,
      isUpdatedSeatSuccess: false,
      isUpdatedSeatError: true,
    }),
    // delete Seat
    [deleteSeatRequest]: (state) => ({
      ...state,
      isDeletedSeatSuccess: false,
      isDeletedSeatError: false,
    }),
    [deleteSeatSuccess]: (state) => ({
      ...state,
      isDeletedSeatSuccess: true,
      isDeletedSeatError: false,
    }),
    [deleteSeatFailure]: (state) => ({
      ...state,
      isDeletedSeatSuccess: false,
      isDeletedSeatError: true,
    }),
    // create Seat
    [createSeatRequest]: (state) => ({
      ...state,
      isCreatedSeatSuccess: false,
      isCreatedSeatError: false,
    }),
    [createSeatSuccess]: (state) => ({
      ...state,
      isCreatedSeatSuccess: true,
      isCreatedSeatError: false,
    }),
    [createSeatFailure]: (state) => ({
      ...state,
      isCreatedSeatSuccess: false,
      isCreatedSeatError: true,
    }),
  },
  initialState
);

export default reducer;
