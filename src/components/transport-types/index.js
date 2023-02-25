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
  deleteTransportTypeRequest,
  getTransportTypesRequest,
} from "../../redux/transportTypes/actions";

const TransportTypes = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    transportTypes,
    isGetTransportTypesSuccess,
    isDeletedTransportTypeSuccess,
    isGetTransportTypesError,
    isDeletedTransportTypeError,
    isGetTransportTypeError,
  } = useSelector((state) => state.transportTypes);

  const prevIsGetTransportTypesSuccess = usePrevious(
    isGetTransportTypesSuccess
  );
  const prevIsDeletedTransportTypeSuccess = usePrevious(
    isDeletedTransportTypeSuccess
  );
  const prevIsGetTransportTypesError = usePrevious(isGetTransportTypesError);
  const prevIsGetTransportTypeError = usePrevious(isGetTransportTypeError);
  const prevIsDeletedTransportTypeError = usePrevious(
    isDeletedTransportTypeError
  );

  const [selectedTransportType, setSelectedTransportType] = useState({});
  const [isTransportTypeDeleteModalOpen, setIsTransportTypeDeleteModalOpen] =
    useState(false);
  const [transportTypesClone, setTransportTypesClone] = useState([]);

  useEffect(() => {
    document.title = "Transport Types";
    setIsLoading(true);
    dispatch(getTransportTypesRequest());
  }, []);

  useEffect(() => {
    if (
      isGetTransportTypesSuccess &&
      prevIsGetTransportTypesSuccess === false
    ) {
      setIsLoading(false);
      setTransportTypesClone(transportTypes);
    }
  }, [isGetTransportTypesSuccess]);

  useEffect(() => {
    if (
      (isGetTransportTypesError && prevIsGetTransportTypesError === false) ||
      (isDeletedTransportTypeError &&
        prevIsDeletedTransportTypeError === false) ||
      (isGetTransportTypeError && prevIsGetTransportTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [
    isGetTransportTypesError,
    isDeletedTransportTypeError,
    isGetTransportTypeError,
  ]);

  useEffect(() => {
    if (
      isDeletedTransportTypeSuccess &&
      prevIsDeletedTransportTypeSuccess === false
    ) {
      toast.success("Transport Type Deleted Successfully");
      setIsLoading(false);
      setTransportTypesClone(
        transportTypesClone.filter(
          (transportType) => transportType.id !== selectedTransportType.id
        )
      );
    }
  }, [isDeletedTransportTypeSuccess]);

  const handleShowDeleteModal = (transportType) => {
    setSelectedTransportType(transportType);
    setIsTransportTypeDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsTransportTypeDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedTransportType({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteTransportTypeRequest(selectedTransportType.id));
    setIsTransportTypeDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Transport Types"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/transport-type">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={transportTypesClone}
        deletionModal={(transportType) => handleShowDeleteModal(transportType)}
        link="transport-types"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete transport type"
        message={
          <span>
            Do you want to delete <b>{selectedTransportType.name}</b> transport
            type?
          </span>
        }
        open={isTransportTypeDeleteModalOpen}
      />
    </>
  );
};

export default TransportTypes;
