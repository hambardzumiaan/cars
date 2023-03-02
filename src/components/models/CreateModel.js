import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { createModelRequest } from "../../redux/models/actions";
import { toast } from "react-toastify";
import ModelContent from "./ModelContent";

const CreateModel = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedModelSuccess, isCreatedModelError } = useSelector(
    (state) => state.models
  );

  const prevIsCreatedModelSuccess = usePrevious(isCreatedModelSuccess);
  const prevIsCreatedModelError = usePrevious(isCreatedModelError);

  useEffect(() => {
    document.title = "Модель - создать";
  }, []);

  useEffect(() => {
    if (isCreatedModelSuccess && prevIsCreatedModelSuccess === false) {
      toast.success("Модель успешно создана");
      setIsLoading(false);
      navigate("/models");
    }
  }, [isCreatedModelSuccess]);

  useEffect(() => {
    if (isCreatedModelError && prevIsCreatedModelError === false) {
      setIsLoading(false);
    }
  }, [isCreatedModelError]);

  const createModel = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;
    const car_mark_id = e.target.car_mark_id.value;

    dispatch(
      createModelRequest({
        name,
        car_mark_id,
      })
    );
  };

  return (
    <>
      <form onSubmit={createModel}>
        <SubHeader
          title="Модель"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <ModelContent />
      </form>
    </>
  );
};

export default CreateModel;
