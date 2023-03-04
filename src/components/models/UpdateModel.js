import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { updateModelRequest } from "../../redux/models/actions";
import { useParams } from "react-router";
import { getModelRequest } from "../../redux/models/actions";
import { toast } from "react-toastify";
import ModelContent from "./ModelContent";

const UpdateModel = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetModelSuccess,
    isGetModelError,
    isUpdatedModelSuccess,
    isUpdatedModelError,
    model,
  } = useSelector((state) => state.models);

  const prevIsModelSuccess = usePrevious(isGetModelSuccess);
  const prevIsModelError = usePrevious(isGetModelError);
  const prevIsUpdatedModelError = usePrevious(isUpdatedModelError);
  const prevIsUpdatedModelSuccess = usePrevious(isUpdatedModelSuccess);

  useEffect(() => {
    document.title = "Model";
    dispatch(getModelRequest(id));
  }, []);

  useEffect(() => {
    if (isGetModelSuccess && prevIsModelSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetModelSuccess]);

  useEffect(() => {
    if (isUpdatedModelSuccess && prevIsUpdatedModelSuccess === false) {
      setIsLoading(false);
      toast.success("Model updated successfully");
    }
  }, [isUpdatedModelSuccess]);

  useEffect(() => {
    if (isUpdatedModelError && prevIsUpdatedModelError === false) {
      setIsLoading(false);
    }
  }, [isUpdatedModelError]);

  useEffect(() => {
    if (isGetModelError && prevIsModelError === false) {
      setIsLoading(false);
    }
  }, [isGetModelError]);

  const updateModel = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;
    const car_mark_id = e.target.car_mark_id.value;

    dispatch(
      updateModelRequest({
        id,
        data: {
          name,
          car_mark_id,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateModel}>
        <SubHeader
          title="Model"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <ModelContent model={model} />
      </form>
    </>
  );
};

export default UpdateModel;
