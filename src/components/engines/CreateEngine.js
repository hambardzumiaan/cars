import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createEngineRequest } from "../../redux/engines/actions";
import FormContent from "../../components/FormContent";

const CreateEngine = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedEngineSuccess, isCreatedEngineError } = useSelector(
    (state) => state.engines
  );

  const prevIsCreatedEngineSuccess = usePrevious(isCreatedEngineSuccess);
  const prevIsCreatedEngineError = usePrevious(isCreatedEngineError);

  useEffect(() => {
    document.title = "Двигатель - создать";
  }, []);

  useEffect(() => {
    if (isCreatedEngineSuccess && prevIsCreatedEngineSuccess === false) {
      setIsLoading(false);
      toast.success("Двигатель успешно создан");
      navigate("/engines");
    }
  }, [isCreatedEngineSuccess]);

  useEffect(() => {
    if (isCreatedEngineError && prevIsCreatedEngineError === false) {
      setIsLoading(false);
    }
  }, [isCreatedEngineError]);

  const createEngine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createEngineRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createEngine}>
        <SubHeader
          title="Двигатель"
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

export default CreateEngine;
