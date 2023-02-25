import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createInteriorColorFailure,
  createInteriorColorRequest,
  createInteriorColorSuccess,
  deleteInteriorColorFailure,
  deleteInteriorColorRequest,
  deleteInteriorColorSuccess,
  getInteriorColorSuccess,
  getInteriorColorFailure,
  getInteriorColorRequest,
  getInteriorColorsFailure,
  getInteriorColorsRequest,
  getInteriorColorsSuccess,
  updateInteriorColorFailure,
  updateInteriorColorRequest,
  updateInteriorColorSuccess,
} from "./actions";

function* getInteriorColors() {
  try {
    const response = yield call(axios.get, "/car/interior/colors");
    if (response.status === 200) {
      yield put(getInteriorColorsSuccess(response.data));
    }
  } catch (e) {
    yield put(getInteriorColorsFailure("e.message"));
  }
}

function* getInteriorColor({ payload }) {
  try {
    const url = `car/interior/colors/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getInteriorColorSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getInteriorColorFailure("e.message"));
  }
}

function* updateInteriorColor({ payload }) {
  try {
    const url = `/car/interior/colors/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateInteriorColorSuccess());
    }
  } catch (e) {
    yield put(updateInteriorColorFailure("e.message"));
  }
}

function* deleteInteriorColor({ payload }) {
  try {
    const url = `car/interior/colors/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteInteriorColorSuccess());
    }
  } catch (e) {
    yield put(deleteInteriorColorFailure("e.message"));
  }
}

function* createInteriorColor({ payload }) {
  try {
    const response = yield call(axios.post, "/car/interior/colors", payload);
    if (response.status === 200) {
      yield put(createInteriorColorSuccess());
    }
  } catch (e) {
    yield put(createInteriorColorFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getInteriorColorsRequest, getInteriorColors);
  yield takeLatest(getInteriorColorRequest, getInteriorColor);
  yield takeLatest(updateInteriorColorRequest, updateInteriorColor);
  yield takeLatest(deleteInteriorColorRequest, deleteInteriorColor);
  yield takeLatest(createInteriorColorRequest, createInteriorColor);
}
