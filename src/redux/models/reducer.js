import { handleActions } from "redux-actions";
import {
  createModelFailure,
  createModelRequest,
  createModelSuccess,
  deleteModelFailure,
  deleteModelRequest,
  deleteModelSuccess,
  getModelSuccess,
  getModelFailure,
  getModelRequest,
  getModelsFailure,
  getModelsRequest,
  getModelsSuccess,
  updateModelFailure,
  updateModelRequest,
  updateModelSuccess,
} from "./actions";

const initialState = {
  models: [],
  model: {},
  isGetModelsSuccess: false,
  isGetModelsError: false,
  isGetModelSuccess: false,
  isGetModelError: false,
  isUpdatedModelSuccess: false,
  isUpdatedModelError: false,
  isDeletedModelSuccess: false,
  isDeletedModelError: false,
  isCreatedModelSuccess: false,
  isCreatedModelError: false,
  newModelId: "",
};

const reducer = handleActions(
  {
    // get models
    [getModelsRequest]: (state) => ({
      ...state,
      isGetModelsSuccess: false,
      isGetModelsError: false,
    }),
    [getModelsSuccess]: (state, { payload }) => ({
      ...state,
      models: payload || [],
      isGetModelsSuccess: true,
      isGetModelsError: false,
    }),
    [getModelsFailure]: (state) => ({
      ...state,
      isGetModelsSuccess: false,
      isGetModelsError: true,
    }),
    // get model
    [getModelRequest]: (state) => ({
      ...state,
      isGetModelSuccess: false,
      isGetModelError: false,
    }),
    [getModelSuccess]: (state, { payload }) => ({
      ...state,
      model: payload ?? {},
      isGetModelSuccess: true,
      isGetModelError: false,
    }),
    [getModelFailure]: (state) => ({
      ...state,
      isGetModelSuccess: false,
      isGetModelError: true,
    }),
    // update model
    [updateModelRequest]: (state) => ({
      ...state,
      isUpdatedModelSuccess: false,
      isUpdatedModelError: false,
    }),
    [updateModelSuccess]: (state) => ({
      ...state,
      isUpdatedModelSuccess: true,
      isUpdatedModelError: false,
    }),
    [updateModelFailure]: (state) => ({
      ...state,
      isUpdatedModelSuccess: false,
      isUpdatedModelError: true,
    }),
    // delete model
    [deleteModelRequest]: (state) => ({
      ...state,
      isDeletedModelSuccess: false,
      isDeletedModelError: false,
    }),
    [deleteModelSuccess]: (state) => ({
      ...state,
      isDeletedModelSuccess: true,
      isDeletedModelError: false,
    }),
    [deleteModelFailure]: (state) => ({
      ...state,
      isDeletedModelSuccess: false,
      isDeletedModelError: true,
    }),
    // create model
    [createModelRequest]: (state) => ({
      ...state,
      isCreatedModelSuccess: false,
      isCreatedModelError: false,
    }),
    [createModelSuccess]: (state, { payload }) => ({
      ...state,
      newModelId: payload ?? "",
      isCreatedModelSuccess: true,
      isCreatedModelError: false,
    }),
    [createModelFailure]: (state) => ({
      ...state,
      isCreatedModelSuccess: false,
      isCreatedModelError: true,
    }),
  },
  initialState
);

export default reducer;
