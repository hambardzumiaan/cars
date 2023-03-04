import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";
import {
  deleteInteriorColorRequest,
  getInteriorColorsRequest,
} from "../../redux/interiorColors/actions";

const InteriorColors = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    interiorColors,
    isGetInteriorColorsSuccess,
    isDeletedInteriorColorSuccess,
    isGetInteriorColorError,
    isDeletedInteriorColorError,
  } = useSelector((state) => state.interiorColors);

  const prevIsGetInteriorColorsSuccess = usePrevious(
    isGetInteriorColorsSuccess
  );
  const prevIsDeletedInteriorColorSuccess = usePrevious(
    isDeletedInteriorColorSuccess
  );
  const prevIsGetInteriorColorError = usePrevious(isGetInteriorColorError);
  const prevIsDeletedInteriorColorError = usePrevious(
    isDeletedInteriorColorError
  );

  const [selectedInteriorColor, setSelectedInteriorColor] = useState({});
  const [isInteriorColorDeleteModalOpen, setIsInteriorColorDeleteModalOpen] =
    useState(false);
  const [interiorColorsClone, setInteriorColorsClone] = useState([]);

  useEffect(() => {
    document.title = "Interior color - list";
    setIsLoading(true);
    dispatch(getInteriorColorsRequest());
  }, []);

  useEffect(() => {
    if (
      isGetInteriorColorsSuccess &&
      prevIsGetInteriorColorsSuccess === false
    ) {
      setIsLoading(false);
      setInteriorColorsClone(interiorColors);
    }
  }, [isGetInteriorColorsSuccess]);

  useEffect(() => {
    if (
      (isGetInteriorColorError && prevIsGetInteriorColorError === false) ||
      (isDeletedInteriorColorError &&
        prevIsDeletedInteriorColorError === false) ||
      (isGetInteriorColorError && prevIsGetInteriorColorError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetInteriorColorError, isDeletedInteriorColorError]);

  useEffect(() => {
    if (
      isDeletedInteriorColorSuccess &&
      prevIsDeletedInteriorColorSuccess === false
    ) {
      toast.success("Interior color deleted successfully");
      setIsLoading(false);
      setInteriorColorsClone(
        interiorColorsClone.filter(
          (interiorColor) => interiorColor.id !== selectedInteriorColor.id
        )
      );
    }
  }, [isDeletedInteriorColorSuccess]);

  const handleShowDeleteModal = (interiorColor) => {
    setSelectedInteriorColor(interiorColor);
    setIsInteriorColorDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsInteriorColorDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedInteriorColor({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteInteriorColorRequest(selectedInteriorColor.id));
    setIsInteriorColorDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Interior color"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/interior-color">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={interiorColorsClone}
        deletionModal={(interiorColor) => handleShowDeleteModal(interiorColor)}
        link="interior-colors"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete interior color"
        message={
          <span>
            Do you want to delete <b>{selectedInteriorColor.name}</b> interior
            color?
          </span>
        }
        open={isInteriorColorDeleteModalOpen}
      />
    </>
  );
};

export default InteriorColors;
