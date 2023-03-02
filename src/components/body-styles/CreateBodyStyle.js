import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBodyStyleRequest } from "../../redux/bodyStyles/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import FormContent from "../../components/FormContent";
import { toast } from "react-toastify";

const CreateBodyStyle = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedBodyStyleSuccess, isCreatedBodyStyleError } = useSelector(
    (state) => state.bodyStyles
  );

  const prevIsCreatedBodyStyleSuccess = usePrevious(isCreatedBodyStyleSuccess);
  const prevIsCreatedBodyStyleError = usePrevious(isCreatedBodyStyleError);

  useEffect(() => {
    document.title = "Стиль кузова - создать";
  }, []);

  useEffect(() => {
    if (isCreatedBodyStyleSuccess && prevIsCreatedBodyStyleSuccess === false) {
      setIsLoading(false);
      toast.success("Тип кузова успешно создан");
      navigate("/body-styles");
    }
  }, [isCreatedBodyStyleSuccess]);

  useEffect(() => {
    if (isCreatedBodyStyleError && prevIsCreatedBodyStyleError === false) {
      setIsLoading(false);
    }
  }, [isCreatedBodyStyleError]);

  const createBodyStyle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createBodyStyleRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createBodyStyle}>
        <SubHeader
          title="Тип кузова"
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

export default CreateBodyStyle;
