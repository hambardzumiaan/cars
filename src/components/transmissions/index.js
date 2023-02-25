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
  deleteTransmissionRequest,
  getTransmissionsRequest,
} from "../../redux/transmissions/actions";

const Transmissions = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    transmissions,
    isGetTransmissionsSuccess,
    isDeletedTransmissionSuccess,
    isGetTransmissionsError,
    isDeletedTransmissionError,
    isGetTransmissionError,
  } = useSelector((state) => state.transmissions);

  const prevIsGetTransmissionsSuccess = usePrevious(isGetTransmissionsSuccess);
  const prevIsDeletedTransmissionSuccess = usePrevious(
    isDeletedTransmissionSuccess
  );
  const prevIsGetTransmissionsError = usePrevious(isGetTransmissionsError);
  const prevIsGetTransmissionError = usePrevious(isGetTransmissionError);
  const prevIsDeletedTransmissionError = usePrevious(
    isDeletedTransmissionError
  );

  const [selectedTransmission, setSelectedTransmission] = useState({});
  const [isTransmissionDeleteModalOpen, setIsTransmissionDeleteModalOpen] =
    useState(false);
  const [transmissionsClone, setTransmissionsClone] = useState([]);

  useEffect(() => {
    document.title = "Transmissions - list";
    setIsLoading(true);
    dispatch(getTransmissionsRequest());
  }, []);

  useEffect(() => {
    if (isGetTransmissionsSuccess && prevIsGetTransmissionsSuccess === false) {
      setIsLoading(false);
      setTransmissionsClone(transmissions);
    }
  }, [isGetTransmissionsSuccess]);

  useEffect(() => {
    if (
      (isGetTransmissionsError && prevIsGetTransmissionsError === false) ||
      (isDeletedTransmissionError &&
        prevIsDeletedTransmissionError === false) ||
      (isGetTransmissionError && prevIsGetTransmissionError === false)
    ) {
      setIsLoading(false);
    }
  }, [
    isGetTransmissionsError,
    isDeletedTransmissionError,
    isGetTransmissionError,
  ]);

  useEffect(() => {
    if (
      isDeletedTransmissionSuccess &&
      prevIsDeletedTransmissionSuccess === false
    ) {
      toast.success("Transmission Deleted Successfully");
      setIsLoading(false);
      setTransmissionsClone(
        transmissionsClone.filter(
          (transmission) => transmission.id !== selectedTransmission.id
        )
      );
    }
  }, [isDeletedTransmissionSuccess]);

  const handleShowDeleteModal = (Transmission) => {
    setSelectedTransmission(Transmission);
    setIsTransmissionDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsTransmissionDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedTransmission({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteTransmissionRequest(selectedTransmission.id));
    setIsTransmissionDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Transmissions"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/transmission">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={transmissionsClone}
        deletionModal={(transmission) => handleShowDeleteModal(transmission)}
        link="transmissions"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete transmission"
        message={
          <span>
            Do you want to delete <b>{selectedTransmission.name}</b>{" "}
            transmission?
          </span>
        }
        open={isTransmissionDeleteModalOpen}
      />
    </>
  );
};

export default Transmissions;
