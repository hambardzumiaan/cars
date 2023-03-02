import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  getBodyStyleRequest,
  updateBodyStyleRequest,
} from "../../redux/bodyStyles/actions";
import FormContent from "../../components/FormContent";

const UpdateBodyStyle = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetBodyStyleSuccess,
    isGetBodyStyleError,
    bodyStyle,
    isUpdatedBodyStyleSuccess,
    isUpdatedBodyStyleError,
  } = useSelector((state) => state.bodyStyles);

  const prevIsBodyStyleSuccess = usePrevious(isGetBodyStyleSuccess);
  const prevIsBodyStyleError = usePrevious(isGetBodyStyleError);
  const prevIsUpdatedBodyStyleSuccess = usePrevious(isUpdatedBodyStyleSuccess);
  const prevIsUpdatedBodyStyleError = usePrevious(isUpdatedBodyStyleError);

  useEffect(() => {
    document.title = "Тип кузова";
    dispatch(getBodyStyleRequest(id));
  }, []);

  useEffect(() => {
    if (
      (isGetBodyStyleError && prevIsBodyStyleError === false) ||
      (isUpdatedBodyStyleError && prevIsUpdatedBodyStyleError === false) ||
      (isGetBodyStyleSuccess && prevIsBodyStyleSuccess === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetBodyStyleSuccess, isGetBodyStyleError, isUpdatedBodyStyleError]);

  useEffect(() => {
    if (isUpdatedBodyStyleSuccess && prevIsUpdatedBodyStyleSuccess === false) {
      setIsLoading(false);
      toast.success("Тип кузова успешно обновлен");
    }
  }, [isUpdatedBodyStyleSuccess]);

  const updateBodyStyle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateBodyStyleRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateBodyStyle}>
        <SubHeader
          title="Тип кузова"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={bodyStyle} />
      </form>
    </>
  );
};

export default UpdateBodyStyle;
