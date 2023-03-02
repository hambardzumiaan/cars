import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTransportTypeRequest } from "../../redux/transportTypes/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const CreateTransportType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedTransportTypeSuccess, isCreatedTransportTypeError } =
    useSelector((state) => state.transportTypes);

  const prevIsCreatedTransportTypeSuccess = usePrevious(
    isCreatedTransportTypeSuccess
  );
  const prevIsCreatedTransportTypeError = usePrevious(
    isCreatedTransportTypeError
  );

  useEffect(() => {
    document.title = "Тип транспорта - создать";
  }, []);

  useEffect(() => {
    if (
      isCreatedTransportTypeSuccess &&
      prevIsCreatedTransportTypeSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Тип транспорта успешно создан");
      navigate("/transport-types");
    }
  }, [isCreatedTransportTypeSuccess]);

  useEffect(() => {
    if (
      isCreatedTransportTypeError &&
      prevIsCreatedTransportTypeError === false
    ) {
      setIsLoading(false);
    }
  }, [isCreatedTransportTypeError]);

  const createTransportType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createTransportTypeRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createTransportType}>
        <SubHeader
          title="Тип транспорта"
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

export default CreateTransportType;
