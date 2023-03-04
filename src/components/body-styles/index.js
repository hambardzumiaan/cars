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
  deleteBodyStyleRequest,
  getBodyStylesRequest,
} from "../../redux/bodyStyles/actions";

const BodyStyles = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    bodyStyles,
    isGetBodyStylesSuccess,
    isDeletedBodyStyleSuccess,
    isGetBodyStyleError,
    isDeletedBodyStyleError,
  } = useSelector((state) => state.bodyStyles);

  const prevIsGetBodyStylesSuccess = usePrevious(isGetBodyStylesSuccess);
  const prevIsDeletedBodyStyleSuccess = usePrevious(isDeletedBodyStyleSuccess);
  const prevIsGetBodyStyleError = usePrevious(isGetBodyStyleError);
  const prevIsDeletedBodyStyleError = usePrevious(isDeletedBodyStyleError);

  const [selectedBodyStyle, setSelectedBodyStyle] = useState({});
  const [isBodyStyleDeleteModalOpen, setIsBodyStyleDeleteModalOpen] =
    useState(false);
  const [bodyStylesClone, setBodyStylesClone] = useState([]);

  useEffect(() => {
    document.title = "Body styles - list";
    setIsLoading(true);
    dispatch(getBodyStylesRequest());
  }, []);

  useEffect(() => {
    if (isGetBodyStylesSuccess && prevIsGetBodyStylesSuccess === false) {
      setIsLoading(false);
      setBodyStylesClone(bodyStyles);
    }
  }, [isGetBodyStylesSuccess]);

  useEffect(() => {
    if (
      (isGetBodyStyleError && prevIsGetBodyStyleError === false) ||
      (isDeletedBodyStyleError && prevIsDeletedBodyStyleError === false) ||
      (isGetBodyStyleError && prevIsGetBodyStyleError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetBodyStyleError, isDeletedBodyStyleError, isGetBodyStyleError]);

  useEffect(() => {
    if (isDeletedBodyStyleSuccess && prevIsDeletedBodyStyleSuccess === false) {
      toast.success("Body style deleted successfully.");
      setIsLoading(false);
      setBodyStylesClone(
        bodyStylesClone.filter(
          (bodyStyle) => bodyStyle.id !== selectedBodyStyle.id
        )
      );
    }
  }, [isDeletedBodyStyleSuccess]);

  const handleShowDeleteModal = (bodyStyle) => {
    setSelectedBodyStyle(bodyStyle);
    setIsBodyStyleDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsBodyStyleDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedBodyStyle({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteBodyStyleRequest(selectedBodyStyle.id));
    setIsBodyStyleDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Body styles"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/body-style">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={bodyStylesClone}
        deletionModal={(bodyStyle) => handleShowDeleteModal(bodyStyle)}
        link="body-styles"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete body style"
        message={
          <span>
            Do you want to delete <b>{selectedBodyStyle.name}</b> body style?
          </span>
        }
        open={isBodyStyleDeleteModalOpen}
      />
    </>
  );
};

export default BodyStyles;
