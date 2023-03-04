import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";
import { deleteYearRequest, getYearsRequest } from "../../redux/years/actions";

const Years = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    years,
    isGetYearsSuccess,
    isGetYearsError,
    isDeletedYearSuccess,
    isGetYearError,
    isDeletedYearError,
  } = useSelector((state) => state.years);

  const prevIsGetYearsSuccess = usePrevious(isGetYearsSuccess);
  const prevIsDeletedYearSuccess = usePrevious(isDeletedYearSuccess);
  const prevIsGetYearsError = usePrevious(isGetYearsError);
  const prevIsGetYearError = usePrevious(isGetYearError);
  const prevIsDeletedYearError = usePrevious(isDeletedYearError);

  const [selectedYear, setSelectedYear] = useState({});
  const [isYearDeleteModalOpen, setIsYearDeleteModalOpen] = useState(false);
  const [yearsClone, setYearsClone] = useState([]);

  useEffect(() => {
    document.title = "Years - list";
    setIsLoading(true);
    dispatch(getYearsRequest());
  }, []);

  useEffect(() => {
    if (isGetYearsSuccess && prevIsGetYearsSuccess === false) {
      setIsLoading(false);
      setYearsClone(years);
    }
  }, [isGetYearsSuccess]);

  useEffect(() => {
    if (
      (isGetYearsError && prevIsGetYearsError === false) ||
      (isDeletedYearError && prevIsDeletedYearError === false) ||
      (isGetYearError && prevIsGetYearError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetYearsError, isGetYearError, isDeletedYearError]);

  useEffect(() => {
    if (isDeletedYearSuccess && prevIsDeletedYearSuccess === false) {
      toast.success("Year deleted successfully");
      setIsLoading(false);
      setYearsClone(yearsClone.filter((year) => year.id !== selectedYear.id));
    }
  }, [isDeletedYearSuccess]);

  const handleShowDeleteModal = (year) => {
    setSelectedYear(year);
    setIsYearDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsYearDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedYear({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteYearRequest(selectedYear.id));
    setIsYearDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Years"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/year">
              <button className="btn btn-outline-info" title="Add">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={yearsClone}
        name="year"
        deletionModal={(year) => handleShowDeleteModal(year)}
        link="years"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete year"
        message={
          <span>
            Do you want to delete <b>{selectedYear.year}</b> year?
          </span>
        }
        open={isYearDeleteModalOpen}
      />
    </>
  );
};

export default Years;
