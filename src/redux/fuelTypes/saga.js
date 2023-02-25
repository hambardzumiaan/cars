import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createFuelTypeFailure,
  createFuelTypeRequest,
  createFuelTypeSuccess,
  deleteFuelTypeFailure,
  deleteFuelTypeRequest,
  deleteFuelTypeSuccess,
  getFuelTypeFailure,
  getFuelTypeRequest,
  getFuelTypesFailure,
  getFuelTypesRequest,
  getFuelTypesSuccess,
  getFuelTypeSuccess,
  updateFuelTypeFailure,
  updateFuelTypeRequest,
  updateFuelTypeSuccess,
} from "./actions.js";

function* getFuelTypes() {
  try {
    const response = yield call(axios.get, "/car/fuel/types");
    if (response.status === 200) {
      yield put(getFuelTypesSuccess(response.data));
    }
  } catch (e) {
    yield put(getFuelTypesFailure("e.message"));
  }
}

function* getFuelType({ payload }) {
  try {
    const url = `/car/fuel/types/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getFuelTypeSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getFuelTypeFailure("e.message"));
  }
}

function* updateFuelType({ payload }) {
  try {
    const url = `/car/fuel/types/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateFuelTypeSuccess());
    }
  } catch (e) {
    yield put(updateFuelTypeFailure("e.message"));
  }
}

function* deleteFuelType({ payload }) {
  try {
    const url = `car/fuel/types/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteFuelTypeSuccess());
    }
  } catch (e) {
    yield put(deleteFuelTypeFailure("e.message"));
  }
}

function* createFuelType({ payload }) {
  try {
    const response = yield call(axios.post, "/car/fuel/types", payload);
    if (response.status === 200) {
      yield put(createFuelTypeSuccess());
    }
  } catch (e) {
    yield put(createFuelTypeFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getFuelTypesRequest, getFuelTypes);
  yield takeLatest(getFuelTypeRequest, getFuelType);
  yield takeLatest(updateFuelTypeRequest, updateFuelType);
  yield takeLatest(deleteFuelTypeRequest, deleteFuelType);
  yield takeLatest(createFuelTypeRequest, createFuelType);
}
