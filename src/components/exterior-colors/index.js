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
  deleteExteriorColorRequest,
  getExteriorColorsRequest,
} from "../../redux/exteriorColors/actions";

const ExteriorColors = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    exteriorColors,
    isGetExteriorColorsSuccess,
    isDeletedExteriorColorSuccess,
    isGetExteriorColorError,
    isDeletedExteriorColorError,
  } = useSelector((state) => state.exteriorColors);

  const prevIsGetExteriorColorsSuccess = usePrevious(
    isGetExteriorColorsSuccess
  );
  const prevIsDeletedExteriorColorSuccess = usePrevious(
    isDeletedExteriorColorSuccess
  );
  const prevIsGetExteriorColorError = usePrevious(isGetExteriorColorError);
  const prevIsDeletedExteriorColorError = usePrevious(
    isDeletedExteriorColorError
  );

  const [selectedExteriorColor, setSelectedExteriorColor] = useState({});
  const [isExteriorColorDeleteModalOpen, setIsExteriorColorDeleteModalOpen] =
    useState(false);
  const [exteriorColorsClone, setExteriorColorsClone] = useState([]);

  useEffect(() => {
    document.title = "Exterior colors - list";
    setIsLoading(true);
    dispatch(getExteriorColorsRequest());
  }, []);

  useEffect(() => {
    if (
      isGetExteriorColorsSuccess &&
      prevIsGetExteriorColorsSuccess === false
    ) {
      setIsLoading(false);
      setExteriorColorsClone(exteriorColors);
    }
  }, [isGetExteriorColorsSuccess]);

  useEffect(() => {
    if (
      (isGetExteriorColorError && prevIsGetExteriorColorError === false) ||
      (isDeletedExteriorColorError &&
        prevIsDeletedExteriorColorError === false) ||
      (isGetExteriorColorError && prevIsGetExteriorColorError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetExteriorColorError, isDeletedExteriorColorError]);

  useEffect(() => {
    if (
      isDeletedExteriorColorSuccess &&
      prevIsDeletedExteriorColorSuccess === false
    ) {
      toast.success("Exterior Color Deleted Successfully");
      setIsLoading(false);
      setExteriorColorsClone(
        exteriorColorsClone.filter(
          (exteriorColor) => exteriorColor.id !== selectedExteriorColor.id
        )
      );
    }
  }, [isDeletedExteriorColorSuccess]);

  const handleShowDeleteModal = (ExteriorColor) => {
    setSelectedExteriorColor(ExteriorColor);
    setIsExteriorColorDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsExteriorColorDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedExteriorColor({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteExteriorColorRequest(selectedExteriorColor.id));
    setIsExteriorColorDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Exterior color"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/exterior-color">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={exteriorColorsClone}
        deletionModal={(exteriorColor) => handleShowDeleteModal(exteriorColor)}
        link="exterior-colors"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete Exterior color"
        message={
          <span>
            Do you want to delete <b>{selectedExteriorColor.name}</b> exterior
            color?
          </span>
        }
        open={isExteriorColorDeleteModalOpen}
      />
    </>
  );
};

export default ExteriorColors;
