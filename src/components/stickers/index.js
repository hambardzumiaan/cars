import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteStickerRequest,
  getStickersRequest,
} from "../../redux/stickers/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";

const Stickers = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    stickers,
    isGetStickersSuccess,
    isDeletedStickerSuccess,
    isGetStickersError,
    isDeletedStickerError,
    isGetStickerError,
  } = useSelector((state) => state.stickers);

  const prevIsGetStickersSuccess = usePrevious(isGetStickersSuccess);
  const prevIsDeletedStickerSuccess = usePrevious(isDeletedStickerSuccess);
  const prevIsGetStickersError = usePrevious(isGetStickersError);
  const prevIsGetStickerError = usePrevious(isGetStickerError);
  const prevIsDeletedStickerError = usePrevious(isDeletedStickerError);

  const [selectedSticker, setSelectedSticker] = useState({});
  const [isStickerDeleteModalOpen, setIsStickerDeleteModalOpen] =
    useState(false);
  const [stickersClone, setStickersClone] = useState([]);

  useEffect(() => {
    document.title = "Stickers - list";
    setIsLoading(true);
    dispatch(getStickersRequest());
  }, []);

  useEffect(() => {
    if (isGetStickersSuccess && prevIsGetStickersSuccess === false) {
      setIsLoading(false);
      setStickersClone(stickers);
    }
  }, [isGetStickersSuccess]);

  useEffect(() => {
    if (
      (isGetStickersError && prevIsGetStickersError === false) ||
      (isDeletedStickerError && prevIsDeletedStickerError === false) ||
      (isGetStickerError && prevIsGetStickerError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetStickersError, isDeletedStickerError, isGetStickerError]);

  useEffect(() => {
    if (isDeletedStickerSuccess && prevIsDeletedStickerSuccess === false) {
      setIsLoading(false);
      toast.success("Sticker deleted successfully");
      setStickersClone(
        stickersClone.filter((sticker) => sticker.id !== selectedSticker.id)
      );
    }
  }, [isDeletedStickerSuccess]);

  const handleShowDeleteModal = (sticker) => {
    setSelectedSticker(sticker);
    setIsStickerDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsStickerDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedSticker({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteStickerRequest(selectedSticker.id));
    setIsStickerDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Stickers"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/sticker">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <div className="table-responsive mb-3">
        <table className="border table table-light table-striped">
          <thead className="table-light">
            <tr>
              <th>Text</th>
              <th>Color</th>
              <th className="function-col text-right" />
            </tr>
          </thead>
          <tbody className="table-light">
            {stickersClone?.map((sticker) => {
              return (
                <tr key={sticker.id}>
                  <td>{sticker.text}</td>
                  <td>{sticker.color}</td>
                  <td className="d-flex align-items-center justify-content-end">
                    <div>
                      <Link to={`/stickers/${sticker.id}`}>
                        <button
                          className="btn btn-outline-dark mr-3"
                          type="button"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={() => handleShowDeleteModal(sticker)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete sticker"
        message={
          <span>
            Do you want to delete <b>{selectedSticker.name}</b> sticker?
          </span>
        }
        open={isStickerDeleteModalOpen}
      />
    </>
  );
};

export default Stickers;
