import { combineReducers } from "redux";
import auth from "../redux/auth/reducer";
import models from "../redux/models/reducer";
import marks from "../redux/marks/reducer";
import fuelTypes from "../redux/fuelTypes/reducer";
import bodyStyles from "../redux/bodyStyles/reducer";
import interiorColors from "./interiorColors/reducer";
import exteriorColors from "./exteriorColors/reducer";
import locations from "./locations/reducer";
import transportTypes from "./transportTypes/reducer";
import driveTypes from "./driveTypes/reducer";
import transmissions from "./transmissions/reducer";

const rootReducer = combineReducers({
  auth,
  models,
  marks,
  fuelTypes,
  transportTypes,
  bodyStyles,
  interiorColors,
  exteriorColors,
  locations,
  transmissions,
  driveTypes,
});

export default rootReducer;
