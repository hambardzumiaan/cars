import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createEngineFailure,
  createEngineRequest,
  createEngineSuccess,
  deleteEngineFailure,
  deleteEngineRequest,
  deleteEngineSuccess,
  getEngineSuccess,
  getEngineFailure,
  getEngineRequest,
  getEnginesFailure,
  getEnginesRequest,
  getEnginesSuccess,
  updateEngineFailure,
  updateEngineRequest,
  updateEngineSuccess,
} from "./actions";

function* getEngines() {
  try {
    const response = yield call(axios.get, "/car/engines");
    if (response.status === 200) {
      yield put(getEnginesSuccess(response.data));
    }
  } catch (e) {
    yield put(getEnginesFailure("e.message"));
  }
}

function* getEngine({ payload }) {
  try {
    const url = `car/engines/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getEngineSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getEngineFailure("e.message"));
  }
}

function* updateEngine({ payload }) {
  try {
    const url = `/car/engines/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateEngineSuccess());
    }
  } catch (e) {
    yield put(updateEngineFailure("e.message"));
  }
}

function* deleteEngine({ payload }) {
  try {
    const url = `car/engines/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteEngineSuccess());
    }
  } catch (e) {
    yield put(deleteEngineFailure("e.message"));
  }
}

function* createEngine({ payload }) {
  try {
    const response = yield call(axios.post, "/car/engines", payload);
    if (response.status === 200) {
      yield put(createEngineSuccess());
    }
  } catch (e) {
    yield put(createEngineFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getEnginesRequest, getEngines);
  yield takeLatest(getEngineRequest, getEngine);
  yield takeLatest(updateEngineRequest, updateEngine);
  yield takeLatest(deleteEngineRequest, deleteEngine);
  yield takeLatest(createEngineRequest, createEngine);
}
