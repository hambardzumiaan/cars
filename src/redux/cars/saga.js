import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createCarFailure,
  createCarRequest,
  createCarSuccess,
  deleteCarFailure,
  deleteCarRequest,
  deleteCarSuccess,
  getCarSuccess,
  getCarFailure,
  getCarRequest,
  getCarsFailure,
  getCarsRequest,
  getCarsSuccess,
  updateCarFailure,
  updateCarRequest,
  updateCarSuccess,
  deleteCarPhotoRequest,
  deleteCarPhotoSuccess,
  deleteCarPhotoFailure,
} from "./actions";

function* getCars() {
  try {
    const response = yield call(axios.get, "/cars");
    if (response.status === 200) {
      yield put(getCarsSuccess(response.data));
    }
  } catch (e) {
    yield put(getCarsFailure("e.message"));
  }
}

function* getCar({ payload }) {
  try {
    const url = `cars/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getCarSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getCarFailure("e.message"));
  }
}

function* updateCar({ payload }) {
  try {
    const url = `/cars/${payload.id}`;
    payload.data.append("_method", "PUT");
    const response = yield call(axios.post, url, payload.data);
    if (response.status === 200) {
      yield put(updateCarSuccess(response.data));
    }
  } catch (e) {
    yield put(updateCarFailure("e.message"));
  }
}

function* deleteCar({ payload }) {
  try {
    const url = `cars/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteCarSuccess());
    }
  } catch (e) {
    yield put(deleteCarFailure("e.message"));
  }
}

function* createCar({ payload }) {
  try {
    const response = yield call(axios.post, "/cars", payload);
    if (response.status === 200) {
      yield put(createCarSuccess());
    }
  } catch (e) {
    yield put(createCarFailure("e.message"));
  }
}

function* deleteCarPhoto({ payload }) {
  try {
    const response = yield call(axios.post, `/delete/image/${payload.id}`, {
      name: payload.name,
    });
    if (response.status === 200) {
      yield put(deleteCarPhotoSuccess());
    }
  } catch (e) {
    yield put(deleteCarPhotoFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getCarsRequest, getCars);
  yield takeLatest(getCarRequest, getCar);
  yield takeLatest(updateCarRequest, updateCar);
  yield takeLatest(deleteCarRequest, deleteCar);
  yield takeLatest(createCarRequest, createCar);
  yield takeLatest(deleteCarPhotoRequest, deleteCarPhoto);
}
