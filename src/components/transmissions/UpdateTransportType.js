import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import {
  updateTransmissionRequest,
  getTransmissionRequest,
} from "../../redux/transmissions/actions";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const UpdateTransmission = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetTransmissionSuccess,
    isGetTransmissionError,
    transmission,
    isUpdatedTransmissionSuccess,
    isUpdatedTransmissionError,
  } = useSelector((state) => state.transmissions);

  const prevIsTransmissionSuccess = usePrevious(isGetTransmissionSuccess);
  const prevIsTransmissionError = usePrevious(isGetTransmissionError);
  const prevIsUpdatedTransmissionSuccess = usePrevious(
    isUpdatedTransmissionSuccess
  );
  const prevIsUpdatedTransmissionError = usePrevious(
    isUpdatedTransmissionError
  );

  useEffect(() => {
    document.title = "Transmission";
    dispatch(getTransmissionRequest(id));
  }, []);

  useEffect(() => {
    if (isGetTransmissionSuccess && prevIsTransmissionSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetTransmissionSuccess]);

  useEffect(() => {
    if (
      (isGetTransmissionError && prevIsTransmissionError === false) ||
      (isUpdatedTransmissionError && prevIsUpdatedTransmissionError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetTransmissionError, isUpdatedTransmissionError]);

  useEffect(() => {
    if (
      isUpdatedTransmissionSuccess &&
      prevIsUpdatedTransmissionSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Transmission updated successfully");
    }
  }, [isUpdatedTransmissionSuccess]);

  const updateTransmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateTransmissionRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateTransmission}>
        <SubHeader
          title="Transmission"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent data={transmission} />
      </form>
    </>
  );
};

export default UpdateTransmission;
