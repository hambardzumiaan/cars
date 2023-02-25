import { createAction } from "redux-actions";

export const getInteriorColorsRequest = createAction(
  "GET_INTERIOR_COLORS_REQUEST"
);
export const getInteriorColorsSuccess = createAction(
  "GET_INTERIOR_COLORS_SUCCESS"
);
export const getInteriorColorsFailure = createAction(
  "GET_INTERIOR_COLORS_FAILURE"
);

export const getInteriorColorRequest = createAction(
  "GET_INTERIOR_COLOR_REQUEST"
);
export const getInteriorColorSuccess = createAction(
  "GET_INTERIOR_COLOR_SUCCESS"
);
export const getInteriorColorFailure = createAction(
  "GET_INTERIOR_COLOR_FAILURE"
);

export const updateInteriorColorRequest = createAction(
  "UPDATE_INTERIOR_COLOR_REQUEST"
);
export const updateInteriorColorSuccess = createAction(
  "UPDATE_INTERIOR_COLOR_SUCCESS"
);
export const updateInteriorColorFailure = createAction(
  "UPDATE_INTERIOR_COLOR_FAILURE"
);

export const deleteInteriorColorRequest = createAction(
  "DELETE_INTERIOR_COLOR_REQUEST"
);
export const deleteInteriorColorSuccess = createAction(
  "DELETE_INTERIOR_COLOR_SUCCESS"
);
export const deleteInteriorColorFailure = createAction(
  "DELETE_INTERIOR_COLOR_FAILURE"
);

export const createInteriorColorRequest = createAction(
  "CREATE_INTERIOR_COLOR_REQUEST"
);
export const createInteriorColorSuccess = createAction(
  "CREATE_INTERIOR_COLOR_SUCCESS"
);
export const createInteriorColorFailure = createAction(
  "CREATE_INTERIOR_COLOR_FAILURE"
);
