import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTransmissionRequest } from "../../redux/transmissions/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const CreateTransmission = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedTransmissionSuccess, isCreatedTransmissionError } =
    useSelector((state) => state.transmissions);

  const prevIsCreatedTransmissionSuccess = usePrevious(
    isCreatedTransmissionSuccess
  );
  const prevIsCreatedTransmissionError = usePrevious(
    isCreatedTransmissionError
  );

  useEffect(() => {
    document.title = "Передача - создать";
  }, []);

  useEffect(() => {
    if (
      isCreatedTransmissionSuccess &&
      prevIsCreatedTransmissionSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Передача успешно создана");
      navigate("/transmissions");
    }
  }, [isCreatedTransmissionSuccess]);

  useEffect(() => {
    if (
      isCreatedTransmissionError &&
      prevIsCreatedTransmissionError === false
    ) {
      setIsLoading(false);
    }
  }, [isCreatedTransmissionError]);

  const createTransmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createTransmissionRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createTransmission}>
        <SubHeader
          title="Передача инфекции"
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

export default CreateTransmission;
