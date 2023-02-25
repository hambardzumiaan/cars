import { handleActions } from "redux-actions";
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

const initialState = {
  stickers: [],
  sticker: {},
  isGetStickersSuccess: false,
  isGetStickersError: false,
  isGetStickerSuccess: false,
  isGetStickerError: false,
  isUpdatedStickerSuccess: false,
  isUpdatedStickerError: false,
  isDeletedStickerSuccess: false,
  isDeletedStickerError: false,
  isCreatedStickerSuccess: false,
  isCreatedStickerError: false,
};

const reducer = handleActions(
  {
    // get Sticker
    [getStickersRequest]: (state) => ({
      ...state,
      isGetStickersSuccess: false,
      isGetStickersError: false,
    }),
    [getStickersSuccess]: (state, { payload }) => ({
      ...state,
      stickers: payload || [],
      isGetStickersSuccess: true,
      isGetStickersError: false,
    }),
    [getStickersFailure]: (state) => ({
      ...state,
      isGetStickersSuccess: false,
      isGetStickersError: true,
    }),
    // get Sticker
    [getStickerRequest]: (state) => ({
      ...state,
      isGetStickerSuccess: false,
      isGetStickerError: false,
    }),
    [getStickerSuccess]: (state, { payload }) => ({
      ...state,
      sticker: payload ?? {},
      isGetStickerSuccess: true,
      isGetStickerError: false,
    }),
    [getStickerFailure]: (state) => ({
      ...state,
      isGetStickerSuccess: false,
      isGetStickerError: true,
    }),
    // update Sticker
    [updateStickerRequest]: (state) => ({
      ...state,
      isUpdatedStickerSuccess: false,
      isUpdatedStickerError: false,
    }),
    [updateStickerSuccess]: (state) => ({
      ...state,
      isUpdatedStickerSuccess: true,
      isUpdatedStickerError: false,
    }),
    [updateStickerFailure]: (state) => ({
      ...state,
      isUpdatedStickerSuccess: false,
      isUpdatedStickerError: true,
    }),
    // delete Sticker
    [deleteStickerRequest]: (state) => ({
      ...state,
      isDeletedStickerSuccess: false,
      isDeletedStickerError: false,
    }),
    [deleteStickerSuccess]: (state) => ({
      ...state,
      isDeletedStickerSuccess: true,
      isDeletedStickerError: false,
    }),
    [deleteStickerFailure]: (state) => ({
      ...state,
      isDeletedStickerSuccess: false,
      isDeletedStickerError: true,
    }),
    // create Sticker
    [createStickerRequest]: (state) => ({
      ...state,
      isCreatedStickerSuccess: false,
      isCreatedStickerError: false,
    }),
    [createStickerSuccess]: (state) => ({
      ...state,
      isCreatedStickerSuccess: true,
      isCreatedStickerError: false,
    }),
    [createStickerFailure]: (state) => ({
      ...state,
      isCreatedStickerSuccess: false,
      isCreatedStickerError: true,
    }),
  },
  initialState
);

export default reducer;
