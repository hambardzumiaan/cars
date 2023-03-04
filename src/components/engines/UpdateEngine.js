import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import {
  getEngineRequest,
  updateEngineRequest,
} from "../../redux/engines/actions";

const UpdateEngine = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetEngineSuccess,
    isGetEngineError,
    engine,
    isUpdatedEngineSuccess,
    isUpdatedEngineError,
  } = useSelector((state) => state.engines);

  const prevIsEngineSuccess = usePrevious(isGetEngineSuccess);
  const prevIsEngineError = usePrevious(isGetEngineError);
  const prevIsUpdatedEngineSuccess = usePrevious(isUpdatedEngineSuccess);
  const prevIsUpdatedEngineError = usePrevious(isUpdatedEngineError);

  useEffect(() => {
    document.title = "Engine";
    dispatch(getEngineRequest(id));
  }, []);

  useEffect(() => {
    if (isGetEngineSuccess && prevIsEngineSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetEngineSuccess]);

  useEffect(() => {
    if (
      (isGetEngineError && prevIsEngineError === false) ||
      (isUpdatedEngineError && prevIsUpdatedEngineError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetEngineError, isUpdatedEngineError]);

  useEffect(() => {
    if (isUpdatedEngineSuccess && prevIsUpdatedEngineSuccess === false) {
      setIsLoading(false);
      toast.success("Engine updated successfully");
    }
  }, [isUpdatedEngineSuccess]);

  const updateEngine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateEngineRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateEngine}>
        <SubHeader
          title="Engine"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent data={engine} />
      </form>
    </>
  );
};

export default UpdateEngine;
