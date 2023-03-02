import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteFuelTypeRequest,
  getFuelTypesRequest,
} from "../../redux/fuelTypes/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";

const FuelTypes = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    fuelTypes,
    isGetFuelTypesSuccess,
    isDeletedFuelTypeSuccess,
    isGetFuelTypesError,
    isDeletedFuelTypeError,
    isGetFuelTypeError,
  } = useSelector((state) => state.fuelTypes);

  const prevIsGetFuelTypesSuccess = usePrevious(isGetFuelTypesSuccess);
  const prevIsDeletedFuelTypeSuccess = usePrevious(isDeletedFuelTypeSuccess);
  const prevIsGetFuelTypesError = usePrevious(isGetFuelTypesError);
  const prevIsGetFuelTypeError = usePrevious(isGetFuelTypeError);
  const prevIsDeletedFuelTypeError = usePrevious(isDeletedFuelTypeError);

  const [selectedFuelType, setSelectedFuelType] = useState({});
  const [isFuelTypeDeleteModalOpen, setIsFuelTypeDeleteModalOpen] =
    useState(false);
  const [fuelTypesClone, setFuelTypesClone] = useState([]);

  useEffect(() => {
    document.title = "Виды топлива - список";
    setIsLoading(true);
    dispatch(getFuelTypesRequest());
  }, []);

  useEffect(() => {
    if (isGetFuelTypesSuccess && prevIsGetFuelTypesSuccess === false) {
      setIsLoading(false);
      setFuelTypesClone(fuelTypes);
    }
  }, [isGetFuelTypesSuccess]);

  useEffect(() => {
    if (
      (isGetFuelTypesError && prevIsGetFuelTypesError === false) ||
      (isDeletedFuelTypeError && prevIsDeletedFuelTypeError === false) ||
      (isGetFuelTypeError && prevIsGetFuelTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetFuelTypesError, isDeletedFuelTypeError, isGetFuelTypeError]);

  useEffect(() => {
    if (isDeletedFuelTypeSuccess && prevIsDeletedFuelTypeSuccess === false) {
      toast.success("Тип топлива успешно удален");
      setIsLoading(false);
      setFuelTypesClone(
        fuelTypesClone.filter((fuelType) => fuelType.id !== selectedFuelType.id)
      );
    }
  }, [isDeletedFuelTypeSuccess]);

  const handleShowDeleteModal = (fuelType) => {
    setSelectedFuelType(fuelType);
    setIsFuelTypeDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsFuelTypeDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedFuelType({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteFuelTypeRequest(selectedFuelType.id));
    setIsFuelTypeDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Типы топлива"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/fuel-type">
              <button className="btn btn-outline-info" title="Добавить">
                Добавить
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={fuelTypesClone}
        deletionModal={(fuelType) => handleShowDeleteModal(fuelType)}
        link="fuel-types"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Удалить тип топлива"
        message={
          <span>
            Вы хотите удалить <b>{selectedFuelType.name}</b> тип топлива?
          </span>
        }
        open={isFuelTypeDeleteModalOpen}
      />
    </>
  );
};

export default FuelTypes;
