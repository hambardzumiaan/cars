import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import {
  updateTransportTypeRequest,
  getTransportTypeRequest,
} from "../../redux/transportTypes/actions";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const UpdateTransportType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetTransportTypeSuccess,
    isGetTransportTypeError,
    transportType,
    isUpdatedTransportTypeSuccess,
    isUpdatedTransportTypeError,
  } = useSelector((state) => state.transportTypes);

  const prevIsTransportTypeSuccess = usePrevious(isGetTransportTypeSuccess);
  const prevIsTransportTypeError = usePrevious(isGetTransportTypeError);
  const prevIsUpdatedTransportTypeSuccess = usePrevious(
    isUpdatedTransportTypeSuccess
  );
  const prevIsUpdatedTransportTypeError = usePrevious(
    isUpdatedTransportTypeError
  );

  useEffect(() => {
    document.title = "Тип транспорта";
    dispatch(getTransportTypeRequest(id));
  }, []);

  useEffect(() => {
    if (isGetTransportTypeSuccess && prevIsTransportTypeSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetTransportTypeSuccess]);

  useEffect(() => {
    if (
      (isGetTransportTypeError && prevIsTransportTypeError === false) ||
      (isUpdatedTransportTypeError && prevIsUpdatedTransportTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetTransportTypeError, isUpdatedTransportTypeError]);

  useEffect(() => {
    if (
      isUpdatedTransportTypeSuccess &&
      prevIsUpdatedTransportTypeSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Тип транспорта успешно обновлен");
    }
  }, [isUpdatedTransportTypeSuccess]);

  const updateTransportType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateTransportTypeRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateTransportType}>
        <SubHeader
          title="Тип транспорта"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={transportType} />
      </form>
    </>
  );
};

export default UpdateTransportType;
