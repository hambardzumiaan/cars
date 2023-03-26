import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
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

function* getDeliveryServices() {
  try {
    const response = yield call(axios.get, "delivery/plans");
    if (response.status === 200) {
      yield put(getDeliveryServicesSuccess(response.data));
    }
  } catch (e) {
    yield put(getDeliveryServicesFailure("e.message"));
  }
}

function* getDeliveryService({ payload }) {
  try {
    const url = `delivery/plans/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getDeliveryServiceSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getDeliveryServiceFailure("e.message"));
  }
}

function* updateDeliveryService({ payload }) {
  try {
    const url = `delivery/plans/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateDeliveryServiceSuccess());
    }
  } catch (e) {
    yield put(updateDeliveryServiceFailure("e.message"));
  }
}

function* deleteDeliveryService({ payload }) {
  try {
    const url = `delivery/plans/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteDeliveryServiceSuccess());
    }
  } catch (e) {
    yield put(deleteDeliveryServiceFailure("e.message"));
  }
}

function* createDeliveryService({ payload }) {
  try {
    const response = yield call(axios.post, "delivery/plans", payload);
    if (response.status === 200) {
      yield put(createDeliveryServiceSuccess());
    }
  } catch (e) {
    yield put(createDeliveryServiceFailure("e.message"));
  }
}

function* getDeliveryCalculate({ payload }) {
  try {
    const response = yield call(axios.post, "delivery/calculate", payload);
    if (response.status === 200) {
      yield put(getDeliveryCalculateSuccess(response.data));
    }
  } catch (e) {
    yield put(getDeliveryCalculateFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getDeliveryServicesRequest, getDeliveryServices);
  yield takeLatest(getDeliveryServiceRequest, getDeliveryService);
  yield takeLatest(updateDeliveryServiceRequest, updateDeliveryService);
  yield takeLatest(deleteDeliveryServiceRequest, deleteDeliveryService);
  yield takeLatest(createDeliveryServiceRequest, createDeliveryService);
  yield takeLatest(getDeliveryCalculateRequest, getDeliveryCalculate);
}
