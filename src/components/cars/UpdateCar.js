import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { getCarRequest, updateCarRequest } from "../../redux/cars/actions";
import CarContent from "./CarContent";

const UpdateCar = () => {
  // const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const ref = useRef();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Car";
  }, []);

  const updateCar = (e) => {
    e.preventDefault();
    // setIsLoading(true);

    const data = new FormData(e.target);
    data.set("show_on_page", e.target.show_on_page.checked === true ? 1 : 0);

    dispatch(
      updateCarRequest({
        id,
        data,
      })
    );
  };

  return (
    <>
      <form onSubmit={updateCar}>
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

export default UpdateCar;
