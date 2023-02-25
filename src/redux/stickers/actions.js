import { createAction } from "redux-actions";
export const getStickersRequest = createAction("GET_STICKERS_REQUEST");
export const getStickersSuccess = createAction("GET_STICKERS_SUCCESS");
export const getStickersFailure = createAction("GET_STICKERS_FAILURE");

export const getStickerRequest = createAction("GET_STICKER_REQUEST");
export const getStickerSuccess = createAction("GET_STICKER_SUCCESS");
export const getStickerFailure = createAction("GET_STICKER_FAILURE");

export const updateStickerRequest = createAction("UPDATE_STICKER_REQUEST");
export const updateStickerSuccess = createAction("UPDATE_STICKER_SUCCESS");
export const updateStickerFailure = createAction("UPDATE_STICKER_FAILURE");

export const deleteStickerRequest = createAction("DELETE_STICKER_REQUEST");
export const deleteStickerSuccess = createAction("DELETE_STICKER_SUCCESS");
export const deleteStickerFailure = createAction("DELETE_STICKER_FAILURE");

export const createStickerRequest = createAction("CREATE_STICKER_REQUEST");
export const createStickerSuccess = createAction("CREATE_STICKER_SUCCESS");
export const createStickerFailure = createAction("CREATE_STICKER_FAILURE");
