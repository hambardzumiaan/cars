import { createAction } from "redux-actions";

export const getModelsRequest = createAction("GET_MODELS_REQUEST");
export const getModelsSuccess = createAction("GET_MODELS_SUCCESS");
export const getModelsFailure = createAction("GET_MODELS_FAILURE");

export const getModelRequest = createAction("GET_MODEL_REQUEST");
export const getModelSuccess = createAction("GET_MODEL_SUCCESS");
export const getModelFailure = createAction("GET_MODEL_FAILURE");

export const updateModelRequest = createAction("UPDATE_MODEL_REQUEST");
export const updateModelSuccess = createAction("UPDATE_MODEL_SUCCESS");
export const updateModelFailure = createAction("UPDATE_MODEL_FAILURE");

export const deleteModelRequest = createAction("DELETE_MODEL_REQUEST");
export const deleteModelSuccess = createAction("DELETE_MODEL_SUCCESS");
export const deleteModelFailure = createAction("DELETE_MODEL_FAILURE");

export const createModelRequest = createAction("CREATE_MODEL_REQUEST");
export const createModelSuccess = createAction("CREATE_MODEL_SUCCESS");
export const createModelFailure = createAction("CREATE_MODEL_FAILURE");
