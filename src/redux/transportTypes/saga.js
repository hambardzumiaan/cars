import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createTransportTypeFailure,
  createTransportTypeRequest,
  createTransportTypeSuccess,
  deleteTransportTypeFailure,
  deleteTransportTypeRequest,
  deleteTransportTypeSuccess,
  getTransportTypeFailure,
  getTransportTypeRequest,
  getTransportTypesFailure,
  getTransportTypesRequest,
  getTransportTypesSuccess,
  getTransportTypeSuccess,
  updateTransportTypeFailure,
  updateTransportTypeRequest,
  updateTransportTypeSuccess,
} from "./actions.js";

function* getTransportTypes() {
  try {
    const response = yield call(axios.get, "/car/types");
    if (response.status === 200) {
      yield put(getTransportTypesSuccess(response.data));
    }
  } catch (e) {
    yield put(getTransportTypesFailure("e.message"));
  }
}

function* getTransportType({ payload }) {
  try {
    const url = `/car/types/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getTransportTypeSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getTransportTypeFailure("e.message"));
  }
}

function* updateTransportType({ payload }) {
  try {
    const url = `/car/types/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateTransportTypeSuccess());
    }
  } catch (e) {
    yield put(updateTransportTypeFailure("e.message"));
  }
}

function* deleteTransportType({ payload }) {
  try {
    const url = `car/types/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteTransportTypeSuccess());
    }
  } catch (e) {
    yield put(deleteTransportTypeFailure("e.message"));
  }
}

function* createTransportType({ payload }) {
  try {
    const response = yield call(axios.post, "/car/types", payload);
    if (response.status === 200) {
      yield put(createTransportTypeSuccess());
    }
  } catch (e) {
    yield put(createTransportTypeFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getTransportTypesRequest, getTransportTypes);
  yield takeLatest(getTransportTypeRequest, getTransportType);
  yield takeLatest(updateTransportTypeRequest, updateTransportType);
  yield takeLatest(deleteTransportTypeRequest, deleteTransportType);
  yield takeLatest(createTransportTypeRequest, createTransportType);
}
