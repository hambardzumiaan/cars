import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import {
  getExteriorColorRequest,
  updateExteriorColorRequest,
} from "../../redux/exteriorColors/actions";

const UpdateExteriorColor = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetExteriorColorSuccess,
    isGetExteriorColorError,
    exteriorColor,
    isUpdatedExteriorColorSuccess,
    isUpdatedExteriorColorError,
  } = useSelector((state) => state.exteriorColors);

  const prevIsExteriorColorSuccess = usePrevious(isGetExteriorColorSuccess);
  const prevIsExteriorColorError = usePrevious(isGetExteriorColorError);
  const prevIsUpdatedExteriorColorSuccess = usePrevious(
    isUpdatedExteriorColorSuccess
  );
  const prevIsUpdatedExteriorColorError = usePrevious(
    isUpdatedExteriorColorError
  );

  useEffect(() => {
    document.title = "Внешний цвет";
    dispatch(getExteriorColorRequest(id));
  }, []);

  useEffect(() => {
    if (isGetExteriorColorSuccess && prevIsExteriorColorSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetExteriorColorSuccess]);

  useEffect(() => {
    if (
      (isGetExteriorColorError && prevIsExteriorColorError === false) ||
      (isUpdatedExteriorColorError && prevIsUpdatedExteriorColorError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetExteriorColorError, isUpdatedExteriorColorError]);

  useEffect(() => {
    if (
      isUpdatedExteriorColorSuccess &&
      prevIsUpdatedExteriorColorSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Внешний цвет успешно обновлен");
    }
  }, [isUpdatedExteriorColorSuccess]);

  const updateExteriorColor = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateExteriorColorRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateExteriorColor}>
        <SubHeader
          title="Внешний цвет"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={exteriorColor} />
      </form>
    </>
  );
};

export default UpdateExteriorColor;
