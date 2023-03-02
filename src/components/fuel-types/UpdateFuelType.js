import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFuelTypeRequest } from "../../redux/fuelTypes/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { updateFuelTypeRequest } from "../../redux/fuelTypes/actions";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const UpdateFuelType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetFuelTypeSuccess,
    isGetFuelTypeError,
    fuelType,
    isUpdatedFuelTypeSuccess,
    isUpdatedFuelTypeError,
  } = useSelector((state) => state.fuelTypes);

  const prevIsFuelTypeSuccess = usePrevious(isGetFuelTypeSuccess);
  const prevIsFuelTypeError = usePrevious(isGetFuelTypeError);
  const prevIsUpdatedFuelTypeSuccess = usePrevious(isUpdatedFuelTypeSuccess);
  const prevIsUpdatedFuelTypeError = usePrevious(isUpdatedFuelTypeError);

  useEffect(() => {
    document.title = "Тип топлива";
    dispatch(getFuelTypeRequest(id));
  }, []);

  useEffect(() => {
    if (isGetFuelTypeSuccess && prevIsFuelTypeSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetFuelTypeSuccess]);

  useEffect(() => {
    if (
      (isGetFuelTypeError && prevIsFuelTypeError === false) ||
      (isUpdatedFuelTypeError && prevIsUpdatedFuelTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetFuelTypeError, isUpdatedFuelTypeError]);

  useEffect(() => {
    if (isUpdatedFuelTypeSuccess && prevIsUpdatedFuelTypeSuccess === false) {
      setIsLoading(false);
      toast.success("Тип топлива успешно обновлен");
    }
  }, [isUpdatedFuelTypeSuccess]);

  const updateFuelType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateFuelTypeRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateFuelType}>
        <SubHeader
          title="Тип топлива"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={fuelType} />
      </form>
    </>
  );
};

export default UpdateFuelType;
