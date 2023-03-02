import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createFuelTypeRequest } from "../../redux/fuelTypes/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const CreateFuelType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedFuelTypeSuccess, isCreatedFuelTypeError } = useSelector(
    (state) => state.fuelTypes
  );

  const prevIsCreatedFuelTypeSuccess = usePrevious(isCreatedFuelTypeSuccess);
  const prevIsCreatedFuelTypeError = usePrevious(isCreatedFuelTypeError);

  useEffect(() => {
    document.title = "Тип топлива - создать";
  }, []);

  useEffect(() => {
    if (isCreatedFuelTypeSuccess && prevIsCreatedFuelTypeSuccess === false) {
      setIsLoading(false);
      toast.success("Тип топлива успешно создан");
      navigate("/fuel-types");
    }
  }, [isCreatedFuelTypeSuccess]);

  useEffect(() => {
    if (isCreatedFuelTypeError && prevIsCreatedFuelTypeError === false) {
      setIsLoading(false);
    }
  }, [isCreatedFuelTypeError]);

  const createFuelType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createFuelTypeRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createFuelType}>
        <SubHeader
          title="Тип топлива"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent />
      </form>
    </>
  );
};

export default CreateFuelType;
