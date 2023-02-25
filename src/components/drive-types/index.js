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
  deleteDriveTypeRequest,
  getDriveTypesRequest,
} from "../../redux/driveTypes/actions";

const DriveTypes = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    driveTypes,
    isGetDriveTypesSuccess,
    isDeletedDriveTypeSuccess,
    isGetDriveTypesError,
    isDeletedDriveTypeError,
    isGetDriveTypeError,
  } = useSelector((state) => state.driveTypes);

  const prevIsGetDriveTypesSuccess = usePrevious(isGetDriveTypesSuccess);
  const prevIsDeletedDriveTypeSuccess = usePrevious(isDeletedDriveTypeSuccess);
  const prevIsGetDriveTypesError = usePrevious(isGetDriveTypesError);
  const prevIsGetDriveTypeError = usePrevious(isGetDriveTypeError);
  const prevIsDeletedDriveTypeError = usePrevious(isDeletedDriveTypeError);

  const [selectedDriveType, setSelectedDriveType] = useState({});
  const [isDriveTypeDeleteModalOpen, setIsDriveTypeDeleteModalOpen] =
    useState(false);
  const [driveTypesClone, setDriveTypesClone] = useState([]);

  useEffect(() => {
    document.title = "Drive Types - list";
    setIsLoading(true);
    dispatch(getDriveTypesRequest());
  }, []);

  useEffect(() => {
    if (isGetDriveTypesSuccess && prevIsGetDriveTypesSuccess === false) {
      setIsLoading(false);
      setDriveTypesClone(driveTypes);
    }
  }, [isGetDriveTypesSuccess]);

  useEffect(() => {
    if (
      (isGetDriveTypesError && prevIsGetDriveTypesError === false) ||
      (isDeletedDriveTypeError && prevIsDeletedDriveTypeError === false) ||
      (isGetDriveTypeError && prevIsGetDriveTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetDriveTypesError, isDeletedDriveTypeError, isGetDriveTypeError]);

  useEffect(() => {
    if (isDeletedDriveTypeSuccess && prevIsDeletedDriveTypeSuccess === false) {
      toast.success("Drive Type Deleted Successfully");
      setIsLoading(false);
      setDriveTypesClone(
        driveTypesClone.filter(
          (driveType) => driveType.id !== selectedDriveType.id
        )
      );
    }
  }, [isDeletedDriveTypeSuccess]);

  const handleShowDeleteModal = (DriveType) => {
    setSelectedDriveType(DriveType);
    setIsDriveTypeDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsDriveTypeDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedDriveType({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteDriveTypeRequest(selectedDriveType.id));
    setIsDriveTypeDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Drive Types"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/drive-type">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={driveTypesClone}
        deletionModal={(driveType) => handleShowDeleteModal(driveType)}
        link="drive-types"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete drive type"
        message={
          <span>
            Do you want to delete <b>{selectedDriveType.name}</b> drive type?
          </span>
        }
        open={isDriveTypeDeleteModalOpen}
      />
    </>
  );
};

export default DriveTypes;
