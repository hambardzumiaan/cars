import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createYearFailure,
  createYearRequest,
  createYearSuccess,
  deleteYearFailure,
  deleteYearRequest,
  deleteYearSuccess,
  getYearSuccess,
  getYearFailure,
  getYearRequest,
  getYearsFailure,
  getYearsRequest,
  getYearsSuccess,
  updateYearFailure,
  updateYearRequest,
  updateYearSuccess,
} from "./actions";

function* getYears() {
  try {
    const response = yield call(axios.get, "/car/years");
    if (response.status === 200) {
      yield put(getYearsSuccess(response.data));
    }
  } catch (e) {
    yield put(getYearsFailure("e.message"));
  }
}

function* getYear({ payload }) {
  try {
    const url = `car/years/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getYearSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getYearFailure("e.message"));
  }
}

function* updateYear({ payload }) {
  try {
    const url = `/car/years/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateYearSuccess());
    }
  } catch (e) {
    yield put(updateYearFailure("e.message"));
  }
}

function* deleteYear({ payload }) {
  try {
    const url = `car/years/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteYearSuccess());
    }
  } catch (e) {
    yield put(deleteYearFailure("e.message"));
  }
}

function* createYear({ payload }) {
  try {
    const response = yield call(axios.post, "/car/years", payload);
    if (response.status === 200) {
      yield put(createYearSuccess());
    }
  } catch (e) {
    yield put(createYearFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getYearsRequest, getYears);
  yield takeLatest(getYearRequest, getYear);
  yield takeLatest(updateYearRequest, updateYear);
  yield takeLatest(deleteYearRequest, deleteYear);
  yield takeLatest(createYearRequest, createYear);
}
