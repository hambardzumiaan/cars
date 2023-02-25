import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createTransmissionFailure,
  createTransmissionRequest,
  createTransmissionSuccess,
  deleteTransmissionFailure,
  deleteTransmissionRequest,
  deleteTransmissionSuccess,
  getTransmissionFailure,
  getTransmissionRequest,
  getTransmissionsFailure,
  getTransmissionsRequest,
  getTransmissionsSuccess,
  getTransmissionSuccess,
  updateTransmissionFailure,
  updateTransmissionRequest,
  updateTransmissionSuccess,
} from "./actions.js";

function* getTransmissions() {
  try {
    const response = yield call(axios.get, "/car/transmission");
    if (response.status === 200) {
      yield put(getTransmissionsSuccess(response.data));
    }
  } catch (e) {
    yield put(getTransmissionsFailure("e.message"));
  }
}

function* getTransmission({ payload }) {
  try {
    const url = `/car/transmission/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getTransmissionSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getTransmissionFailure("e.message"));
  }
}

function* updateTransmission({ payload }) {
  try {
    const url = `/car/transmission/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateTransmissionSuccess());
    }
  } catch (e) {
    yield put(updateTransmissionFailure("e.message"));
  }
}

function* deleteTransmission({ payload }) {
  try {
    const url = `car/transmission/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteTransmissionSuccess());
    }
  } catch (e) {
    yield put(deleteTransmissionFailure("e.message"));
  }
}

function* createTransmission({ payload }) {
  try {
    const response = yield call(axios.post, "/car/transmission", payload);
    if (response.status === 200) {
      yield put(createTransmissionSuccess());
    }
  } catch (e) {
    yield put(createTransmissionFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getTransmissionsRequest, getTransmissions);
  yield takeLatest(getTransmissionRequest, getTransmission);
  yield takeLatest(updateTransmissionRequest, updateTransmission);
  yield takeLatest(deleteTransmissionRequest, deleteTransmission);
  yield takeLatest(createTransmissionRequest, createTransmission);
}
