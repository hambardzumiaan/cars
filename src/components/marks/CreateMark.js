import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createMarkRequest } from "../../redux/marks/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import FormContent from "../FormContent";

const CreateMark = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedMarkSuccess, isCreatedMarkError } = useSelector(
    (state) => state.marks
  );

  const prevIsCreatedMarkSuccess = usePrevious(isCreatedMarkSuccess);
  const prevIsCreatedMarkError = usePrevious(isCreatedMarkError);

  useEffect(() => {
    document.title = "Марка автомобиля - создать";
  }, []);

  useEffect(() => {
    if (isCreatedMarkSuccess && prevIsCreatedMarkSuccess === false) {
      toast.success("Марка автомобиля успешно создана");
      setIsLoading(false);
      navigate("/marks");
    }
  }, [isCreatedMarkSuccess]);

  useEffect(() => {
    if (isCreatedMarkError && prevIsCreatedMarkError === false) {
      setIsLoading(false);
    }
  }, [isCreatedMarkError]);

  const createMark = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createMarkRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createMark}>
        <SubHeader
          title="Марка"
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

export default CreateMark;
