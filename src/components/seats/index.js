import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";
import { deleteSeatRequest, getSeatsRequest } from "../../redux/seats/actions";

const Seats = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    seats,
    isGetSeatsSuccess,
    isGetSeatsError,
    isDeletedSeatSuccess,
    isGetSeatError,
    isDeletedSeatError,
  } = useSelector((state) => state.seats);

  const prevIsGetSeatsSuccess = usePrevious(isGetSeatsSuccess);
  const prevIsDeletedSeatSuccess = usePrevious(isDeletedSeatSuccess);
  const prevIsGetSeatsError = usePrevious(isGetSeatsError);
  const prevIsGetSeatError = usePrevious(isGetSeatError);
  const prevIsDeletedSeatError = usePrevious(isDeletedSeatError);

  const [selectedSeat, setSelectedSeat] = useState({});
  const [isSeatDeleteModalOpen, setIsSeatDeleteModalOpen] = useState(false);
  const [seatsClone, setSeatsClone] = useState([]);

  useEffect(() => {
    document.title = "Seats - list";
    setIsLoading(true);
    dispatch(getSeatsRequest());
  }, []);

  useEffect(() => {
    if (isGetSeatsSuccess && prevIsGetSeatsSuccess === false) {
      setIsLoading(false);
      setSeatsClone(seats);
    }
  }, [isGetSeatsSuccess]);

  useEffect(() => {
    if (
      (isGetSeatsError && prevIsGetSeatsError === false) ||
      (isDeletedSeatError && prevIsDeletedSeatError === false) ||
      (isGetSeatError && prevIsGetSeatError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetSeatsError, isGetSeatError, isDeletedSeatError]);

  useEffect(() => {
    if (isDeletedSeatSuccess && prevIsDeletedSeatSuccess === false) {
      toast.success("Seat deleted successfully");
      setIsLoading(false);
      setSeatsClone(seatsClone.filter((seat) => seat.id !== selectedSeat.id));
    }
  }, [isDeletedSeatSuccess]);

  const handleShowDeleteModal = (seat) => {
    setSelectedSeat(seat);
    setIsSeatDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsSeatDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedSeat({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteSeatRequest(selectedSeat.id));
    setIsSeatDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Seats"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/seat">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={seatsClone}
        deletionModal={(seat) => handleShowDeleteModal(seat)}
        link="seats"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete seat"
        message={
          <span>
            Do you want to delete <b>{selectedSeat.name}</b> seat?
          </span>
        }
        open={isSeatDeleteModalOpen}
      />
    </>
  );
};

export default Seats;
