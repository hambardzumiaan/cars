import { all } from "redux-saga/effects";
import saga from "../redux/auth/saga";
import models from "../redux/models/saga";
import marks from "../redux/marks/saga";
import fuelTypes from "../redux/fuelTypes/saga";
import bodyStyles from "../redux/bodyStyles/saga";
import interiorColors from "./interiorColors/saga";
import exteriorColors from "./exteriorColors/saga";
import transportTypes from "./transportTypes/saga";
import driveTypes from "./driveTypes/saga";
import transmissions from "./transmissions/saga";
import engines from "./engines/saga";
import years from "./years/saga";
import seats from "./seats/saga";
import stickers from "./stickers/saga";
import cars from "./cars/saga";

export default function* rootSaga() {
  yield all([
    saga(),
    models(),
    marks(),
    fuelTypes(),
    bodyStyles(),
    interiorColors(),
    exteriorColors(),
    cars(),
    transportTypes(),
    driveTypes(),
    transmissions(),
    engines(),
    years(),
    seats(),
    stickers(),
  ]);
}
