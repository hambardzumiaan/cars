import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import {
  createStickerFailure,
  createStickerRequest,
  createStickerSuccess,
  deleteStickerFailure,
  deleteStickerRequest,
  deleteStickerSuccess,
  getStickerSuccess,
  getStickerFailure,
  getStickerRequest,
  getStickersFailure,
  getStickersRequest,
  getStickersSuccess,
  updateStickerFailure,
  updateStickerRequest,
  updateStickerSuccess,
} from "./actions";

function* getStickers() {
  try {
    const response = yield call(axios.get, "/car/stickers");
    if (response.status === 200) {
      yield put(getStickersSuccess(response.data));
    }
  } catch (e) {
    yield put(getStickersFailure("e.message"));
  }
}

function* getSticker({ payload }) {
  try {
    const url = `car/stickers/${payload}`;
    const response = yield call(axios.get, url);
    if (response.status === 200) {
      yield put(getStickerSuccess(response.data));
    }
  } catch (e) {
    if (e.response.status === 404) {
      window.location.href = "/page-not-found";
    }
    yield put(getStickerFailure("e.message"));
  }
}

function* updateSticker({ payload }) {
  try {
    const url = `/car/stickers/${payload.id}`;
    const response = yield call(axios.put, url, payload.data);
    if (response.status === 200) {
      yield put(updateStickerSuccess());
    }
  } catch (e) {
    yield put(updateStickerFailure("e.message"));
  }
}

function* deleteSticker({ payload }) {
  try {
    const url = `car/stickers/${payload}`;
    const response = yield call(axios.delete, url);
    if (response.status === 200) {
      yield put(deleteStickerSuccess());
    }
  } catch (e) {
    yield put(deleteStickerFailure("e.message"));
  }
}

function* createSticker({ payload }) {
  try {
    const response = yield call(axios.post, "/car/stickers", payload);
    if (response.status === 200) {
      yield put(createStickerSuccess());
    }
  } catch (e) {
    yield put(createStickerFailure("e.message"));
  }
}

export default function* saga() {
  yield takeLatest(getStickersRequest, getStickers);
  yield takeLatest(getStickerRequest, getSticker);
  yield takeLatest(updateStickerRequest, updateSticker);
  yield takeLatest(deleteStickerRequest, deleteSticker);
  yield takeLatest(createStickerRequest, createSticker);
}
