import { createAction } from "redux-actions";

export const getTransmissionsRequest = createAction(
  "GET_TRANSMISSIONS_REQUEST"
);
export const getTransmissionsSuccess = createAction(
  "GET_TRANSMISSIONS_SUCCESS"
);
export const getTransmissionsFailure = createAction(
  "GET_TRANSMISSIONS_FAILURE"
);

export const getTransmissionRequest = createAction("GET_TRANSMISSION_REQUEST");
export const getTransmissionSuccess = createAction("GET_TRANSMISSION_SUCCESS");
export const getTransmissionFailure = createAction("GET_TRANSMISSION_FAILURE");

export const updateTransmissionRequest = createAction(
  "UPDATE_TRANSMISSION_REQUEST"
);
export const updateTransmissionSuccess = createAction(
  "UPDATE_TRANSMISSION_SUCCESS"
);
export const updateTransmissionFailure = createAction(
  "UPDATE_TRANSMISSION_FAILURE"
);

export const deleteTransmissionRequest = createAction(
  "DELETE_TRANSMISSION_REQUEST"
);
export const deleteTransmissionSuccess = createAction(
  "DELETE_TRANSMISSION_SUCCESS"
);
export const deleteTransmissionFailure = createAction(
  "DELETE_TRANSMISSION_FAILURE"
);

export const createTransmissionRequest = createAction(
  "CREATE_TRANSMISSION_REQUEST"
);
export const createTransmissionSuccess = createAction(
  "CREATE_TRANSMISSION_SUCCESS"
);
export const createTransmissionFailure = createAction(
  "CREATE_TRANSMISSION_FAILURE"
);
