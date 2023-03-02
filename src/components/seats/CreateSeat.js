import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createSeatRequest } from "../../redux/seats/actions";
import FormContent from "../../components/FormContent";

const CreateSeat = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedSeatSuccess, isCreatedSeatError } = useSelector(
    (state) => state.seats
  );

  const prevIsCreatedSeatSuccess = usePrevious(isCreatedSeatSuccess);
  const prevIsCreatedSeatError = usePrevious(isCreatedSeatError);

  useEffect(() => {
    document.title = "Сиденье - создать";
  }, []);

  useEffect(() => {
    if (isCreatedSeatSuccess && prevIsCreatedSeatSuccess === false) {
      setIsLoading(false);
      toast.success("Место успешно создано");
      navigate("/seats");
    }
  }, [isCreatedSeatSuccess]);

  useEffect(() => {
    if (isCreatedSeatError && prevIsCreatedSeatError === false) {
      setIsLoading(false);
    }
  }, [isCreatedSeatError]);

  const createSeat = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createSeatRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createSeat}>
        <SubHeader
          title="Сиденье"
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

export default CreateSeat;
