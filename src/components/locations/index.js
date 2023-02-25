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
  deleteLocationRequest,
  getLocationsRequest,
} from "../../redux/locations/actions";

const Locations = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    locations,
    isGetLocationsSuccess,
    isGetLocationsError,
    isDeletedLocationSuccess,
    isGetLocationError,
    isDeletedLocationError,
  } = useSelector((state) => state.locations);

  const prevIsGetLocationsSuccess = usePrevious(isGetLocationsSuccess);
  const prevIsDeletedLocationSuccess = usePrevious(isDeletedLocationSuccess);
  const prevIsGetLocationsError = usePrevious(isGetLocationsError);
  const prevIsGetLocationError = usePrevious(isGetLocationError);
  const prevIsDeletedLocationError = usePrevious(isDeletedLocationError);

  const [selectedLocation, setSelectedLocation] = useState({});
  const [isLocationDeleteModalOpen, setIsLocationDeleteModalOpen] =
    useState(false);
  const [locationsClone, setLocationsClone] = useState([]);

  useEffect(() => {
    document.title = "Locations";
    setIsLoading(true);
    dispatch(getLocationsRequest());
  }, []);

  useEffect(() => {
    if (isGetLocationsSuccess && prevIsGetLocationsSuccess === false) {
      setIsLoading(false);
      setLocationsClone(locations);
    }
  }, [isGetLocationsSuccess]);

  useEffect(() => {
    if (
      (isGetLocationsError && prevIsGetLocationsError === false) ||
      (isDeletedLocationError && prevIsDeletedLocationError === false) ||
      (isGetLocationError && prevIsGetLocationError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetLocationsError, isGetLocationError, isDeletedLocationError]);

  useEffect(() => {
    if (isDeletedLocationSuccess && prevIsDeletedLocationSuccess === false) {
      toast.success("Location Deleted Successfully");
      setIsLoading(false);
      setLocationsClone(
        locationsClone.filter((location) => location.id !== selectedLocation.id)
      );
    }
  }, [isDeletedLocationSuccess]);

  const handleShowDeleteModal = (location) => {
    setSelectedLocation(location);
    setIsLocationDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsLocationDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedLocation({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteLocationRequest(selectedLocation.id));
    setIsLocationDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Location"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/location">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={locationsClone}
        deletionModal={(location) => handleShowDeleteModal(location)}
        link="locations"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete location"
        message={
          <span>
            Do you want to delete <b>{selectedLocation.name}</b> location?
          </span>
        }
        open={isLocationDeleteModalOpen}
      />
    </>
  );
};

export default Locations;
