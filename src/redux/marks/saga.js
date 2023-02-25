import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createMarkFailure,
  createMarkRequest,
  createMarkSuccess,
  deleteMarkFailure,
  deleteMarkRequest,
  deleteMarkSuccess,
  getMarkFailure,
  getMarkRequest,
  getMarksFailure,
  getMarksRequest,
  getMarksSuccess,
  getMarkSuccess,
  updateMarkFailure,
  updateMarkRequest,
  updateMarkSuccess,
} from "./actions.js";

function* getMarks() {
  try {
    const response = yield call(axios.get, "/car/marks");
    if (response.status === 200) {
      yield put(getMarksSuccess(response.data));
    }
  } catch (e) {
    yield put(getMarksFailure("e.message"));
  }
}

function* getMark({ payload }) {
  try {
    const url = `/car/marks/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getMarkSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getMarkFailure("e.message"));
  }
}

function* updateMark({ payload }) {
  try {
    const url = `/car/marks/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateMarkSuccess());
    }
  } catch (e) {
    yield put(updateMarkFailure("e.message"));
  }
}

function* deleteMark({ payload }) {
  try {
    const url = `car/marks/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteMarkSuccess());
    }
  } catch (e) {
    yield put(deleteMarkFailure("e.message"));
  }
}

function* createMark({ payload }) {
  try {
    const response = yield call(axios.post, "/car/marks", payload);
    if (response.status === 200) {
      yield put(createMarkSuccess());
    }
  } catch (e) {
    yield put(createMarkFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getMarksRequest, getMarks);
  yield takeLatest(getMarkRequest, getMark);
  yield takeLatest(updateMarkRequest, updateMark);
  yield takeLatest(deleteMarkRequest, deleteMark);
  yield takeLatest(createMarkRequest, createMark);
}
