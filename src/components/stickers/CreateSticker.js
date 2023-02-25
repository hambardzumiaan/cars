import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { createStickerRequest } from "../../redux/stickers/actions";
import { toast } from "react-toastify";
import StickerContent from "./StickerContent";

const CreateSticker = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedStickerSuccess, isCreatedStickerError } = useSelector(
    (state) => state.stickers
  );

  const prevIsCreatedStickerSuccess = usePrevious(isCreatedStickerSuccess);
  const prevIsCreatedStickerError = usePrevious(isCreatedStickerError);

  useEffect(() => {
    document.title = "Sticker - create";
  }, []);

  useEffect(() => {
    if (isCreatedStickerSuccess && prevIsCreatedStickerSuccess === false) {
      toast.success("Sticker Created Successfully");
      setIsLoading(false);
      navigate("/stickers");
    }
  }, [isCreatedStickerSuccess]);

  useEffect(() => {
    if (isCreatedStickerError && prevIsCreatedStickerError === false) {
      setIsLoading(false);
    }
  }, [isCreatedStickerError]);

  const createSticker = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const text = e.target.text.value;
    const color = e.target.color.value;

    dispatch(
      createStickerRequest({
        text,
        color,
      })
    );
  };

  return (
    <>
      <form onSubmit={createSticker}>
        <SubHeader
          title="Sticker"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <StickerContent />
      </form>
    </>
  );
};

export default CreateSticker;
