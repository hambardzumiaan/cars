import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createBodyStyleFailure,
  createBodyStyleRequest,
  createBodyStyleSuccess,
  deleteBodyStyleFailure,
  deleteBodyStyleRequest,
  deleteBodyStyleSuccess,
  getBodyStyleFailure,
  getBodyStyleRequest,
  getBodyStylesFailure,
  getBodyStylesRequest,
  getBodyStylesSuccess,
  getBodyStyleSuccess,
  updateBodyStyleFailure,
  updateBodyStyleRequest,
  updateBodyStyleSuccess,
} from "./actions.js";

function* getBodyStyles() {
  try {
    const response = yield call(axios.get, "/car/body/styles");
    if (response.status === 200) {
      yield put(getBodyStylesSuccess(response.data));
    }
  } catch (e) {
    yield put(getBodyStylesFailure("e.message"));
  }
}

function* getBodyStyle({ payload }) {
  try {
    const url = `/car/body/styles/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getBodyStyleSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getBodyStyleFailure("e.message"));
  }
}

function* updateBodyStyle({ payload }) {
  try {
    const url = `/car/body/styles/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateBodyStyleSuccess());
    }
  } catch (e) {
    yield put(updateBodyStyleFailure("e.message"));
  }
}

function* deleteBodyStyle({ payload }) {
  try {
    const url = `car/body/styles/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteBodyStyleSuccess());
    }
  } catch (e) {
    yield put(deleteBodyStyleFailure("e.message"));
  }
}

function* createBodyStyle({ payload }) {
  try {
    const response = yield call(axios.post, "/car/body/styles", payload);
    if (response.status === 200) {
      yield put(createBodyStyleSuccess());
    }
  } catch (e) {
    yield put(createBodyStyleFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getBodyStylesRequest, getBodyStyles);
  yield takeLatest(getBodyStyleRequest, getBodyStyle);
  yield takeLatest(updateBodyStyleRequest, updateBodyStyle);
  yield takeLatest(deleteBodyStyleRequest, deleteBodyStyle);
  yield takeLatest(createBodyStyleRequest, createBodyStyle);
}
