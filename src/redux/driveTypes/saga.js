import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createDriveTypeFailure,
  createDriveTypeRequest,
  createDriveTypeSuccess,
  deleteDriveTypeFailure,
  deleteDriveTypeRequest,
  deleteDriveTypeSuccess,
  getDriveTypeFailure,
  getDriveTypeRequest,
  getDriveTypesFailure,
  getDriveTypesRequest,
  getDriveTypesSuccess,
  getDriveTypeSuccess,
  updateDriveTypeFailure,
  updateDriveTypeRequest,
  updateDriveTypeSuccess,
} from "./actions.js";

function* getDriveTypes() {
  try {
    const response = yield call(axios.get, "/car/drive/types");
    if (response.status === 200) {
      yield put(getDriveTypesSuccess(response.data));
    }
  } catch (e) {
    yield put(getDriveTypesFailure("e.message"));
  }
}

function* getDriveType({ payload }) {
  try {
    const url = `/car/drive/types/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getDriveTypeSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getDriveTypeFailure("e.message"));
  }
}

function* updateDriveType({ payload }) {
  try {
    const url = `/car/drive/types/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateDriveTypeSuccess());
    }
  } catch (e) {
    yield put(updateDriveTypeFailure("e.message"));
  }
}

function* deleteDriveType({ payload }) {
  try {
    const url = `car/drive/types/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteDriveTypeSuccess());
    }
  } catch (e) {
    yield put(deleteDriveTypeFailure("e.message"));
  }
}

function* createDriveType({ payload }) {
  try {
    const response = yield call(axios.post, "/car/drive/types", payload);
    if (response.status === 200) {
      yield put(createDriveTypeSuccess());
    }
  } catch (e) {
    yield put(createDriveTypeFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getDriveTypesRequest, getDriveTypes);
  yield takeLatest(getDriveTypeRequest, getDriveType);
  yield takeLatest(updateDriveTypeRequest, updateDriveType);
  yield takeLatest(deleteDriveTypeRequest, deleteDriveType);
  yield takeLatest(createDriveTypeRequest, createDriveType);
}
