import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import { deleteCarRequest, getCarsRequest } from "../../redux/cars/actions";

const Cars = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    cars,
    isGetCarsSuccess,
    isGetCarsError,
    isDeletedCarSuccess,
    isGetCarError,
    isDeletedCarError,
  } = useSelector((state) => state.cars);

  const prevIsGetCarsSuccess = usePrevious(isGetCarsSuccess);
  const prevIsDeletedCarSuccess = usePrevious(isDeletedCarSuccess);
  const prevIsGetCarsError = usePrevious(isGetCarsError);
  const prevIsGetCarError = usePrevious(isGetCarError);
  const prevIsDeletedCarError = usePrevious(isDeletedCarError);

  const [selectedCar, setSelectedCar] = useState({});
  const [isCarDeleteModalOpen, setIsCarDeleteModalOpen] = useState(false);
  const [carsClone, setCarsClone] = useState([]);

  useEffect(() => {
    document.title = "Cars";
    setIsLoading(true);
    dispatch(getCarsRequest());
  }, []);

  useEffect(() => {
    if (isGetCarsSuccess && prevIsGetCarsSuccess === false) {
      setIsLoading(false);
      setCarsClone(cars);
    }
  }, [isGetCarsSuccess]);

  useEffect(() => {
    if (
      (isGetCarsError && prevIsGetCarsError === false) ||
      (isDeletedCarError && prevIsDeletedCarError === false) ||
      (isGetCarError && prevIsGetCarError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetCarsError, isGetCarError, isDeletedCarError]);

  useEffect(() => {
    if (isDeletedCarSuccess && prevIsDeletedCarSuccess === false) {
      toast.success("Car Deleted Successfully");
      setIsLoading(false);
      setCarsClone(carsClone.filter((car) => car.id !== selectedCar.id));
    }
  }, [isDeletedCarSuccess]);

  const handleShowDeleteModal = (Car) => {
    setSelectedCar(Car);
    setIsCarDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsCarDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedCar({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteCarRequest(selectedCar.id));
    setIsCarDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Cars"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/car">
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
              <th>Mark</th>
              <th>Model</th>
              <th>Year</th>
              <th className="function-col text-right" />
            </tr>
          </thead>
          <tbody className="table-light">
            {carsClone?.map((car) => {
              return (
                <tr key={car.id}>
                  <td>
                    <Link to={`/marks/${car.mark?.id}`}>{car.mark?.name}</Link>
                  </td>
                  <td>
                    <Link to={`/model/${car.model?.id}`}>
                      {car.model?.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/years/${car.year?.id}`}>{car.year?.year}</Link>
                  </td>
                  <td className="d-flex align-items-center justify-content-end">
                    <div>
                      <Link className="d-inline-block" to={`/cars/${car.id}`}>
                        <button
                          className="btn btn-outline-dark mr-2"
                          type="button"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={() => handleShowDeleteModal(car)}
                      >
                        Удалить
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
        title="Delete car"
        message={
          <span>
            Do you want to delete <b>{selectedCar.name}</b> car?
          </span>
        }
        open={isCarDeleteModalOpen}
      />
    </>
  );
};

export default Cars;
