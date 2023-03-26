import { createAction } from "redux-actions";

export const getDeliveryServicesRequest = createAction(
  "GET_DELIVERY_SERVICES_REQUEST"
);
export const getDeliveryServicesSuccess = createAction(
  "GET_DELIVERY_SERVICES_SUCCESS"
);
export const getDeliveryServicesFailure = createAction(
  "GET_DELIVERY_SERVICES_FAILURE"
);

export const getDeliveryServiceRequest = createAction(
  "GET_DELIVERY_SERVICE_REQUEST"
);
export const getDeliveryServiceSuccess = createAction(
  "GET_DELIVERY_SERVICE_SUCCESS"
);
export const getDeliveryServiceFailure = createAction(
  "GET_DELIVERY_SERVICE_FAILURE"
);

export const updateDeliveryServiceRequest = createAction(
  "UPDATE_DELIVERY_SERVICE_REQUEST"
);
export const updateDeliveryServiceSuccess = createAction(
  "UPDATE_DELIVERY_SERVICE_SUCCESS"
);
export const updateDeliveryServiceFailure = createAction(
  "UPDATE_DELIVERY_SERVICE_FAILURE"
);

export const deleteDeliveryServiceRequest = createAction(
  "DELETE_DELIVERY_SERVICE_REQUEST"
);
export const deleteDeliveryServiceSuccess = createAction(
  "DELETE_DELIVERY_SERVICE_SUCCESS"
);
export const deleteDeliveryServiceFailure = createAction(
  "DELETE_DELIVERY_SERVICE_FAILURE"
);

export const createDeliveryServiceRequest = createAction(
  "CREATE_DELIVERY_SERVICE_REQUEST"
);
export const createDeliveryServiceSuccess = createAction(
  "CREATE_DELIVERY_SERVICE_SUCCESS"
);
export const createDeliveryServiceFailure = createAction(
  "CREATE_DELIVERY_SERVICE_FAILURE"
);

export const getDeliveryCalculateRequest = createAction(
  "GET_DELIVERY_CALCULATE_REQUEST"
);
export const getDeliveryCalculateSuccess = createAction(
  "GET_DELIVERY_CALCULATE_SUCCESS"
);
export const getDeliveryCalculateFailure = createAction(
  "GET_DELIVERY_CALCULATE_FAILURE"
);
