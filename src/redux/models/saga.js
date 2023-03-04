import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createModelFailure,
  createModelRequest,
  createModelSuccess,
  deleteModelFailure,
  deleteModelRequest,
  deleteModelSuccess,
  getModelFailure,
  getModelRequest,
  getModelsFailure,
  getModelsRequest,
  getModelsSuccess,
  getModelSuccess,
  updateModelFailure,
  updateModelRequest,
  updateModelSuccess,
} from "./actions.js";

function* getModels() {
  try {
    const response = yield call(axios.get, "/car/models");
    if (response.status === 200) {
      yield put(getModelsSuccess(response.data));
    }
  } catch (e) {
    yield put(getModelsFailure("e.message"));
  }
}

function* getModel({ payload }) {
  try {
    const url = `/car/models/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getModelSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getModelFailure("e.message"));
  }
}

function* updateModel({ payload }) {
  try {
    const url = `/car/models/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateModelSuccess());
    }
  } catch (e) {
    yield put(updateModelFailure("e.message"));
  }
}

function* deleteModel({ payload }) {
  try {
    const url = `/car/models/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteModelSuccess());
    }
  } catch (e) {
    yield put(deleteModelFailure("e.message"));
  }
}

function* createModel({ payload }) {
  try {
    const response = yield call(axios.post, "/car/models", payload);
    if (response.status === 200) {
      yield put(createModelSuccess(response.data));
    }
  } catch (e) {
    yield put(createModelFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getModelsRequest, getModels);
  yield takeLatest(getModelRequest, getModel);
  yield takeLatest(updateModelRequest, updateModel);
  yield takeLatest(deleteModelRequest, deleteModel);
  yield takeLatest(createModelRequest, createModel);
}
