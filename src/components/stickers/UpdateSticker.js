import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { updateStickerRequest } from "../../redux/stickers/actions";
import { useParams } from "react-router";
import { getStickerRequest } from "../../redux/stickers/actions";
import { toast } from "react-toastify";
import StickerContent from "./StickerContent";

const UpdateSticker = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetStickerSuccess,
    isGetStickerError,
    isUpdatedStickerSuccess,
    isUpdatedStickerError,
    sticker,
  } = useSelector((state) => state.stickers);

  const prevIsStickerSuccess = usePrevious(isGetStickerSuccess);
  const prevIsStickerError = usePrevious(isGetStickerError);
  const prevIsUpdatedStickerError = usePrevious(isUpdatedStickerError);
  const prevIsUpdatedStickerSuccess = usePrevious(isUpdatedStickerSuccess);

  useEffect(() => {
    document.title = "Наклейка";
    dispatch(getStickerRequest(id));
  }, []);

  useEffect(() => {
    if (isGetStickerSuccess && prevIsStickerSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetStickerSuccess]);

  useEffect(() => {
    if (isUpdatedStickerSuccess && prevIsUpdatedStickerSuccess === false) {
      setIsLoading(false);
      toast.success("Стикер успешно обновлен");
    }
  }, [isUpdatedStickerSuccess]);

  useEffect(() => {
    if (isUpdatedStickerError && prevIsUpdatedStickerError === false) {
      setIsLoading(false);
    }
  }, [isUpdatedStickerError]);

  useEffect(() => {
    if (isGetStickerError && prevIsStickerError === false) {
      setIsLoading(false);
    }
  }, [isGetStickerError]);

  const updateSticker = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const text = e.target.text.value;
    const color = e.target.color.value;

    dispatch(
      updateStickerRequest({
        id,
        data: {
          text,
          color,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateSticker}>
        <SubHeader
          title="Стикер"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <StickerContent sticker={sticker} />
      </form>
    </>
  );
};

export default UpdateSticker;
