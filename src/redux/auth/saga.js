import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../api/axios";
import { getLoginFailure, getLoginRequest } from "./action";
import { getModelsRequest } from "../models/actions";

function* login({ payload }) {
  try {
    const response = yield call(axios.post, "/login", payload);
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      yield put(getModelsRequest());
    }
  } catch (e) {
    yield put(getLoginFailure(e.message));
  }
}

export default function* saga() {
  yield takeLatest(getLoginRequest, login);
}
