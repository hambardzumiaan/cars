import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createExteriorColorFailure,
  createExteriorColorRequest,
  createExteriorColorSuccess,
  deleteExteriorColorFailure,
  deleteExteriorColorRequest,
  deleteExteriorColorSuccess,
  getExteriorColorSuccess,
  getExteriorColorFailure,
  getExteriorColorRequest,
  getExteriorColorsFailure,
  getExteriorColorsRequest,
  getExteriorColorsSuccess,
  updateExteriorColorFailure,
  updateExteriorColorRequest,
  updateExteriorColorSuccess,
} from "./actions";

function* getExteriorColors() {
  try {
    const response = yield call(axios.get, "/car/exterior/colors");
    if (response.status === 200) {
      yield put(getExteriorColorsSuccess(response.data));
    }
  } catch (e) {
    yield put(getExteriorColorsFailure("e.message"));
  }
}

function* getExteriorColor({ payload }) {
  try {
    const url = `car/exterior/colors/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getExteriorColorSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getExteriorColorFailure("e.message"));
  }
}

function* updateExteriorColor({ payload }) {
  try {
    const url = `/car/exterior/colors/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateExteriorColorSuccess());
    }
  } catch (e) {
    yield put(updateExteriorColorFailure("e.message"));
  }
}

function* deleteExteriorColor({ payload }) {
  try {
    const url = `car/exterior/colors/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteExteriorColorSuccess());
    }
  } catch (e) {
    yield put(deleteExteriorColorFailure("e.message"));
  }
}

function* createExteriorColor({ payload }) {
  try {
    const response = yield call(axios.post, "/car/exterior/colors", payload);
    if (response.status === 200) {
      yield put(createExteriorColorSuccess());
    }
  } catch (e) {
    yield put(createExteriorColorFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getExteriorColorsRequest, getExteriorColors);
  yield takeLatest(getExteriorColorRequest, getExteriorColor);
  yield takeLatest(updateExteriorColorRequest, updateExteriorColor);
  yield takeLatest(deleteExteriorColorRequest, deleteExteriorColor);
  yield takeLatest(createExteriorColorRequest, createExteriorColor);
}
