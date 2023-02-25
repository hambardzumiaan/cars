import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createLocationFailure,
  createLocationRequest,
  createLocationSuccess,
  deleteLocationFailure,
  deleteLocationRequest,
  deleteLocationSuccess,
  getLocationSuccess,
  getLocationFailure,
  getLocationRequest,
  getLocationsFailure,
  getLocationsRequest,
  getLocationsSuccess,
  updateLocationFailure,
  updateLocationRequest,
  updateLocationSuccess,
} from "./actions";

function* getLocations() {
  try {
    const response = yield call(axios.get, "/car/location");
    if (response.status === 200) {
      yield put(getLocationsSuccess(response.data));
    }
  } catch (e) {
    yield put(getLocationsFailure("e.message"));
  }
}

function* getLocation({ payload }) {
  try {
    const url = `car/location/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getLocationSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getLocationFailure("e.message"));
  }
}

function* updateLocation({ payload }) {
  try {
    const url = `/car/location/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateLocationSuccess());
    }
  } catch (e) {
    yield put(updateLocationFailure("e.message"));
  }
}

function* deleteLocation({ payload }) {
  try {
    const url = `car/location/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteLocationSuccess());
    }
  } catch (e) {
    yield put(deleteLocationFailure("e.message"));
  }
}

function* createLocation({ payload }) {
  try {
    const response = yield call(axios.post, "/car/location", payload);
    if (response.status === 200) {
      yield put(createLocationSuccess());
    }
  } catch (e) {
    yield put(createLocationFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getLocationsRequest, getLocations);
  yield takeLatest(getLocationRequest, getLocation);
  yield takeLatest(updateLocationRequest, updateLocation);
  yield takeLatest(deleteLocationRequest, deleteLocation);
  yield takeLatest(createLocationRequest, createLocation);
}
