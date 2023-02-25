import { createAction } from "redux-actions";
export const getSeatsRequest = createAction("GET_SEATS_REQUEST");
export const getSeatsSuccess = createAction("GET_SEATS_SUCCESS");
export const getSeatsFailure = createAction("GET_SEATS_FAILURE");

export const getSeatRequest = createAction("GET_SEAT_REQUEST");
export const getSeatSuccess = createAction("GET_SEAT_SUCCESS");
export const getSeatFailure = createAction("GET_SEAT_FAILURE");

export const updateSeatRequest = createAction("UPDATE_SEAT_REQUEST");
export const updateSeatSuccess = createAction("UPDATE_SEAT_SUCCESS");
export const updateSeatFailure = createAction("UPDATE_SEAT_FAILURE");

export const deleteSeatRequest = createAction("DELETE_SEAT_REQUEST");
export const deleteSeatSuccess = createAction("DELETE_SEAT_SUCCESS");
export const deleteSeatFailure = createAction("DELETE_SEAT_FAILURE");

export const createSeatRequest = createAction("CREATE_SEAT_REQUEST");
export const createSeatSuccess = createAction("CREATE_SEAT_SUCCESS");
export const createSeatFailure = createAction("CREATE_SEAT_FAILURE");
