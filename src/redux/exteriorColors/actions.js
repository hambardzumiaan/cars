import { createAction } from "redux-actions";

export const getExteriorColorsRequest = createAction(
  "GET_EXTERIOR_COLORS_REQUEST"
);
export const getExteriorColorsSuccess = createAction(
  "GET_EXTERIOR_COLORS_SUCCESS"
);
export const getExteriorColorsFailure = createAction(
  "GET_EXTERIOR_COLORS_FAILURE"
);

export const getExteriorColorRequest = createAction(
  "GET_EXTERIOR_COLOR_REQUEST"
);
export const getExteriorColorSuccess = createAction(
  "GET_EXTERIOR_COLOR_SUCCESS"
);
export const getExteriorColorFailure = createAction(
  "GET_EXTERIOR_COLOR_FAILURE"
);

export const updateExteriorColorRequest = createAction(
  "UPDATE_EXTERIOR_COLOR_REQUEST"
);
export const updateExteriorColorSuccess = createAction(
  "UPDATE_EXTERIOR_COLOR_SUCCESS"
);
export const updateExteriorColorFailure = createAction(
  "UPDATE_EXTERIOR_COLOR_FAILURE"
);

export const deleteExteriorColorRequest = createAction(
  "DELETE_EXTERIOR_COLOR_REQUEST"
);
export const deleteExteriorColorSuccess = createAction(
  "DELETE_EXTERIOR_COLOR_SUCCESS"
);
export const deleteExteriorColorFailure = createAction(
  "DELETE_EXTERIOR_COLOR_FAILURE"
);

export const createExteriorColorRequest = createAction(
  "CREATE_EXTERIOR_COLOR_REQUEST"
);
export const createExteriorColorSuccess = createAction(
  "CREATE_EXTERIOR_COLOR_SUCCESS"
);
export const createExteriorColorFailure = createAction(
  "CREATE_EXTERIOR_COLOR_FAILURE"
);
