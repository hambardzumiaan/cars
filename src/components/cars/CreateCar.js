import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import CarContent from "../cars/CarContent";
import { createCarRequest } from "../../redux/cars/actions";

const CreateCar = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();

  const { isCreatedCarSuccess, isCreatedCarError } = useSelector(
    (state) => state.cars
  );

  const prevIsCreatedCarSuccess = usePrevious(isCreatedCarSuccess);
  const prevIsCreatedCarError = usePrevious(isCreatedCarError);

  useEffect(() => {
    document.title = "Car - create";
  }, []);

  useEffect(() => {
    if (isCreatedCarSuccess && prevIsCreatedCarSuccess === false) {
      setIsLoading(false);
      toast.success("Car Created Successfully");
      navigate("/cars");
    }
  }, [isCreatedCarSuccess]);

  useEffect(() => {
    if (isCreatedCarError && prevIsCreatedCarError === false) {
      setIsLoading(false);
    }
  }, [isCreatedCarError]);

  const createCar = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const carData = ref.current?.getFormData();
    const data = new FormData(e.target);
    data.set("description", carData?.description);
    data.set("show_on_page", e.target.show_on_page.checked === true ? 1 : 0);

    dispatch(createCarRequest(data));
  };

  return (
    <>
      <form onSubmit={createCar}>
        <SubHeader
          title="Car"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <CarContent ref={ref} />
      </form>
    </>
  );
};

export default CreateCar;
