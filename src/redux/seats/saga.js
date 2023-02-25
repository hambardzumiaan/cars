import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createSeatFailure,
  createSeatRequest,
  createSeatSuccess,
  deleteSeatFailure,
  deleteSeatRequest,
  deleteSeatSuccess,
  getSeatSuccess,
  getSeatFailure,
  getSeatRequest,
  getSeatsFailure,
  getSeatsRequest,
  getSeatsSuccess,
  updateSeatFailure,
  updateSeatRequest,
  updateSeatSuccess,
} from "./actions";

function* getSeats() {
  try {
    const response = yield call(axios.get, "/car/seats");
    if (response.status === 200) {
      yield put(getSeatsSuccess(response.data));
    }
  } catch (e) {
    yield put(getSeatsFailure("e.message"));
  }
}

function* getSeat({ payload }) {
  try {
    const url = `car/seats/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getSeatSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getSeatFailure("e.message"));
  }
}

function* updateSeat({ payload }) {
  try {
    const url = `/car/seats/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateSeatSuccess());
    }
  } catch (e) {
    yield put(updateSeatFailure("e.message"));
  }
}

function* deleteSeat({ payload }) {
  try {
    const url = `car/seats/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteSeatSuccess());
    }
  } catch (e) {
    yield put(deleteSeatFailure("e.message"));
  }
}

function* createSeat({ payload }) {
  try {
    const response = yield call(axios.post, "/car/seats", payload);
    if (response.status === 200) {
      yield put(createSeatSuccess());
    }
  } catch (e) {
    yield put(createSeatFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getSeatsRequest, getSeats);
  yield takeLatest(getSeatRequest, getSeat);
  yield takeLatest(updateSeatRequest, updateSeat);
  yield takeLatest(deleteSeatRequest, deleteSeat);
  yield takeLatest(createSeatRequest, createSeat);
}
