import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import { getSeatRequest, updateSeatRequest } from "../../redux/seats/actions";

const UpdateSeat = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetSeatSuccess,
    isGetSeatError,
    seat,
    isUpdatedSeatSuccess,
    isUpdatedSeatError,
  } = useSelector((state) => state.seats);

  const prevIsSeatSuccess = usePrevious(isGetSeatSuccess);
  const prevIsSeatError = usePrevious(isGetSeatError);
  const prevIsUpdatedSeatSuccess = usePrevious(isUpdatedSeatSuccess);
  const prevIsUpdatedSeatError = usePrevious(isUpdatedSeatError);

  useEffect(() => {
    document.title = "Сиденье";
    dispatch(getSeatRequest(id));
  }, []);

  useEffect(() => {
    if (isGetSeatSuccess && prevIsSeatSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetSeatSuccess]);

  useEffect(() => {
    if (
      (isGetSeatError && prevIsSeatError === false) ||
      (isUpdatedSeatError && prevIsUpdatedSeatError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetSeatError, isUpdatedSeatError]);

  useEffect(() => {
    if (isUpdatedSeatSuccess && prevIsUpdatedSeatSuccess === false) {
      setIsLoading(false);
      toast.success("Сиденье успешно обновлено");
    }
  }, [isUpdatedSeatSuccess]);

  const updateSeat = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateSeatRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateSeat}>
        <SubHeader
          title="Сиденье"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={seat} />
      </form>
    </>
  );
};

export default UpdateSeat;
