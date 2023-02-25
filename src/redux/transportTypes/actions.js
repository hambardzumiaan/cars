import { createAction } from "redux-actions";

export const getTransportTypesRequest = createAction(
  "GET_TRANSPORT_TYPES_REQUEST"
);
export const getTransportTypesSuccess = createAction(
  "GET_TRANSPORT_TYPES_SUCCESS"
);
export const getTransportTypesFailure = createAction(
  "GET_TRANSPORT_TYPES_FAILURE"
);

export const getTransportTypeRequest = createAction(
  "GET_TRANSPORT_TYPE_REQUEST"
);
export const getTransportTypeSuccess = createAction(
  "GET_TRANSPORT_TYPE_SUCCESS"
);
export const getTransportTypeFailure = createAction(
  "GET_TRANSPORT_TYPE_FAILURE"
);

export const updateTransportTypeRequest = createAction(
  "UPDATE_TRANSPORT_TYPE_REQUEST"
);
export const updateTransportTypeSuccess = createAction(
  "UPDATE_TRANSPORT_TYPE_SUCCESS"
);
export const updateTransportTypeFailure = createAction(
  "UPDATE_TRANSPORT_TYPE_FAILURE"
);

export const deleteTransportTypeRequest = createAction(
  "DELETE_TRANSPORT_TYPE_REQUEST"
);
export const deleteTransportTypeSuccess = createAction(
  "DELETE_TRANSPORT_TYPE_SUCCESS"
);
export const deleteTransportTypeFailure = createAction(
  "DELETE_TRANSPORT_TYPE_FAILURE"
);

export const createTransportTypeRequest = createAction(
  "CREATE_TRANSPORT_TYPE_REQUEST"
);
export const createTransportTypeSuccess = createAction(
  "CREATE_TRANSPORT_TYPE_SUCCESS"
);
export const createTransportTypeFailure = createAction(
  "CREATE_TRANSPORT_TYPE_FAILURE"
);
