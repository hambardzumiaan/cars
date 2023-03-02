import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import {
  getInteriorColorRequest,
  updateInteriorColorRequest,
} from "../../redux/interiorColors/actions";

const UpdateInteriorColor = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetInteriorColorSuccess,
    isGetInteriorColorError,
    interiorColor,
    isUpdatedInteriorColorSuccess,
    isUpdatedInteriorColorError,
  } = useSelector((state) => state.interiorColors);

  const prevIsInteriorColorSuccess = usePrevious(isGetInteriorColorSuccess);
  const prevIsInteriorColorError = usePrevious(isGetInteriorColorError);
  const prevIsUpdatedInteriorColorSuccess = usePrevious(
    isUpdatedInteriorColorSuccess
  );
  const prevIsUpdatedInteriorColorError = usePrevious(
    isUpdatedInteriorColorError
  );

  useEffect(() => {
    document.title = "Цвет салона";
    dispatch(getInteriorColorRequest(id));
  }, []);

  useEffect(() => {
    if (isGetInteriorColorSuccess && prevIsInteriorColorSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetInteriorColorSuccess]);

  useEffect(() => {
    if (
      (isGetInteriorColorError && prevIsInteriorColorError === false) ||
      (isUpdatedInteriorColorError && prevIsUpdatedInteriorColorError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetInteriorColorError, isUpdatedInteriorColorError]);

  useEffect(() => {
    if (
      isUpdatedInteriorColorSuccess &&
      prevIsUpdatedInteriorColorSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Цвет салона успешно обновлен");
    }
  }, [isUpdatedInteriorColorSuccess]);

  const updateInteriorColor = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateInteriorColorRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateInteriorColor}>
        <SubHeader
          title="Цвет салона"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={interiorColor} />
      </form>
    </>
  );
};

export default UpdateInteriorColor;
