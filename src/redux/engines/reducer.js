import { handleActions } from "redux-actions";
import {
  createEngineFailure,
  createEngineRequest,
  createEngineSuccess,
  deleteEngineFailure,
  deleteEngineRequest,
  deleteEngineSuccess,
  getEngineSuccess,
  getEngineFailure,
  getEngineRequest,
  getEnginesFailure,
  getEnginesRequest,
  getEnginesSuccess,
  updateEngineFailure,
  updateEngineRequest,
  updateEngineSuccess,
} from "./actions";

const initialState = {
  engines: [],
  engine: {},
  isGetEnginesSuccess: false,
  isGetEnginesError: false,
  isGetEngineSuccess: false,
  isGetEngineError: false,
  isUpdatedEngineSuccess: false,
  isUpdatedEngineError: false,
  isDeletedEngineSuccess: false,
  isDeletedEngineError: false,
  isCreatedEngineSuccess: false,
  isCreatedEngineError: false,
};

const reducer = handleActions(
  {
    // get Engine
    [getEnginesRequest]: (state) => ({
      ...state,
      isGetEnginesSuccess: false,
      isGetEnginesError: false,
    }),
    [getEnginesSuccess]: (state, { payload }) => ({
      ...state,
      engines: payload || [],
      isGetEnginesSuccess: true,
      isGetEnginesError: false,
    }),
    [getEnginesFailure]: (state) => ({
      ...state,
      isGetEnginesSuccess: false,
      isGetEnginesError: true,
    }),
    // get Engine
    [getEngineRequest]: (state) => ({
      ...state,
      isGetEngineSuccess: false,
      isGetEngineError: false,
    }),
    [getEngineSuccess]: (state, { payload }) => ({
      ...state,
      engine: payload ?? {},
      isGetEngineSuccess: true,
      isGetEngineError: false,
    }),
    [getEngineFailure]: (state) => ({
      ...state,
      isGetEngineSuccess: false,
      isGetEngineError: true,
    }),
    // update Engine
    [updateEngineRequest]: (state) => ({
      ...state,
      isUpdatedEngineSuccess: false,
      isUpdatedEngineError: false,
    }),
    [updateEngineSuccess]: (state) => ({
      ...state,
      isUpdatedEngineSuccess: true,
      isUpdatedEngineError: false,
    }),
    [updateEngineFailure]: (state) => ({
      ...state,
      isUpdatedEngineSuccess: false,
      isUpdatedEngineError: true,
    }),
    // delete Engine
    [deleteEngineRequest]: (state) => ({
      ...state,
      isDeletedEngineSuccess: false,
      isDeletedEngineError: false,
    }),
    [deleteEngineSuccess]: (state) => ({
      ...state,
      isDeletedEngineSuccess: true,
      isDeletedEngineError: false,
    }),
    [deleteEngineFailure]: (state) => ({
      ...state,
      isDeletedEngineSuccess: false,
      isDeletedEngineError: true,
    }),
    // create Engine
    [createEngineRequest]: (state) => ({
      ...state,
      isCreatedEngineSuccess: false,
      isCreatedEngineError: false,
    }),
    [createEngineSuccess]: (state) => ({
      ...state,
      isCreatedEngineSuccess: true,
      isCreatedEngineError: false,
    }),
    [createEngineFailure]: (state) => ({
      ...state,
      isCreatedEngineSuccess: false,
      isCreatedEngineError: true,
    }),
  },
  initialState
);

export default reducer;
