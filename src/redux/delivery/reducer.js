import { handleActions } from "redux-actions";
import {
  createDeliveryServiceFailure,
  createDeliveryServiceRequest,
  createDeliveryServiceSuccess,
  deleteDeliveryServiceFailure,
  deleteDeliveryServiceRequest,
  deleteDeliveryServiceSuccess,
  getDeliveryServiceSuccess,
  getDeliveryServiceFailure,
  getDeliveryServiceRequest,
  getDeliveryServicesFailure,
  getDeliveryServicesRequest,
  getDeliveryServicesSuccess,
  updateDeliveryServiceFailure,
  updateDeliveryServiceRequest,
  updateDeliveryServiceSuccess,
  getDeliveryCalculateRequest,
  getDeliveryCalculateSuccess,
  getDeliveryCalculateFailure,
} from "./actions";

const initialState = {
  deliveryServices: [],
  deliveryService: {},
  calculatedDelivery: {},
  isGetDeliveryServicesSuccess: false,
  isGetDeliveryServicesError: false,
  isGetDeliveryServiceSuccess: false,
  isGetDeliveryServiceError: false,
  isUpdatedDeliveryServiceSuccess: false,
  isUpdatedDeliveryServiceError: false,
  isDeletedDeliveryServiceSuccess: false,
  isDeletedDeliveryServiceError: false,
  isCreatedDeliveryServiceSuccess: false,
  isCreatedDeliveryServiceError: false,
  isGetDeliveryCalculateSuccess: false,
  isGetDeliveryCalculateError: false,
};

const reducer = handleActions(
  {
    // get Delivery Service
    [getDeliveryServicesRequest]: (state) => ({
      ...state,
      isGetDeliveryServicesSuccess: false,
      isGetDeliveryServicesError: false,
    }),
    [getDeliveryServicesSuccess]: (state, { payload }) => ({
      ...state,
      deliveryServices: payload || [],
      isGetDeliveryServicesSuccess: true,
      isGetDeliveryServicesError: false,
    }),
    [getDeliveryServicesFailure]: (state) => ({
      ...state,
      isGetDeliveryServicesSuccess: false,
      isGetDeliveryServicesError: true,
    }),
    // get DeliveryService
    [getDeliveryServiceRequest]: (state) => ({
      ...state,
      isGetDeliveryServiceSuccess: false,
      isGetDeliveryServiceError: false,
    }),
    [getDeliveryServiceSuccess]: (state, { payload }) => ({
      ...state,
      deliveryService: payload ?? {},
      isGetDeliveryServiceSuccess: true,
      isGetDeliveryServiceError: false,
    }),
    [getDeliveryServiceFailure]: (state) => ({
      ...state,
      isGetDeliveryServiceSuccess: false,
      isGetDeliveryServiceError: true,
    }),
    // update DeliveryService
    [updateDeliveryServiceRequest]: (state) => ({
      ...state,
      isUpdatedDeliveryServiceSuccess: false,
      isUpdatedDeliveryServiceError: false,
    }),
    [updateDeliveryServiceSuccess]: (state) => ({
      ...state,
      isUpdatedDeliveryServiceSuccess: true,
      isUpdatedDeliveryServiceError: false,
    }),
    [updateDeliveryServiceFailure]: (state) => ({
      ...state,
      isUpdatedDeliveryServiceSuccess: false,
      isUpdatedDeliveryServiceError: true,
    }),
    // delete DeliveryService
    [deleteDeliveryServiceRequest]: (state) => ({
      ...state,
      isDeletedDeliveryServiceSuccess: false,
      isDeletedDeliveryServiceError: false,
    }),
    [deleteDeliveryServiceSuccess]: (state) => ({
      ...state,
      isDeletedDeliveryServiceSuccess: true,
      isDeletedDeliveryServiceError: false,
    }),
    [deleteDeliveryServiceFailure]: (state) => ({
      ...state,
      isDeletedDeliveryServiceSuccess: false,
      isDeletedDeliveryServiceError: true,
    }),
    // create DeliveryService
    [createDeliveryServiceRequest]: (state) => ({
      ...state,
      isCreatedDeliveryServiceSuccess: false,
      isCreatedDeliveryServiceError: false,
    }),
    [createDeliveryServiceSuccess]: (state) => ({
      ...state,
      isCreatedDeliveryServiceSuccess: true,
      isCreatedDeliveryServiceError: false,
    }),
    [createDeliveryServiceFailure]: (state) => ({
      ...state,
      isCreatedDeliveryServiceSuccess: false,
      isCreatedDeliveryServiceError: true,
    }),
    // get Delivery calc
    [getDeliveryCalculateRequest]: (state) => ({
      ...state,
      isGetDeliveryCalculateSuccess: false,
      isGetDeliveryCalculateError: false,
    }),
    [getDeliveryCalculateSuccess]: (state, { payload }) => ({
      ...state,
      calculatedDelivery: payload,
      isGetDeliveryCalculateSuccess: true,
      isGetDeliveryCalculateError: false,
    }),
    [getDeliveryCalculateFailure]: (state) => ({
      ...state,
      isGetDeliveryCalculateSuccess: false,
      isGetDeliveryCalculateError: true,
    }),
  },
  initialState
);

export default reducer;
