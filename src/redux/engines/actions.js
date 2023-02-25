import { createAction } from "redux-actions";

export const getEnginesRequest = createAction("GET_ENGINES_REQUEST");
export const getEnginesSuccess = createAction("GET_ENGINES_SUCCESS");
export const getEnginesFailure = createAction("GET_ENGINES_FAILURE");

export const getEngineRequest = createAction("GET_ENGINE_REQUEST");
export const getEngineSuccess = createAction("GET_ENGINE_SUCCESS");
export const getEngineFailure = createAction("GET_ENGINE_FAILURE");

export const updateEngineRequest = createAction("UPDATE_ENGINE_REQUEST");
export const updateEngineSuccess = createAction("UPDATE_ENGINE_SUCCESS");
export const updateEngineFailure = createAction("UPDATE_ENGINE_FAILURE");

export const deleteEngineRequest = createAction("DELETE_ENGINE_REQUEST");
export const deleteEngineSuccess = createAction("DELETE_ENGINE_SUCCESS");
export const deleteEngineFailure = createAction("DELETE_ENGINE_FAILURE");

export const createEngineRequest = createAction("CREATE_ENGINE_REQUEST");
export const createEngineSuccess = createAction("CREATE_ENGINE_SUCCESS");
export const createEngineFailure = createAction("CREATE_ENGINE_FAILURE");
