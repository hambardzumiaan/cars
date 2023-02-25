import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import {
  updateDriveTypeRequest,
  getDriveTypeRequest,
} from "../../redux/driveTypes/actions";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const UpdateDriveType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetDriveTypeSuccess,
    isGetDriveTypeError,
    driveType,
    isUpdatedDriveTypeSuccess,
    isUpdatedDriveTypeError,
  } = useSelector((state) => state.driveTypes);

  const prevIsDriveTypeSuccess = usePrevious(isGetDriveTypeSuccess);
  const prevIsDriveTypeError = usePrevious(isGetDriveTypeError);
  const prevIsUpdatedDriveTypeSuccess = usePrevious(isUpdatedDriveTypeSuccess);
  const prevIsUpdatedDriveTypeError = usePrevious(isUpdatedDriveTypeError);

  useEffect(() => {
    document.title = "Drive Type";
    dispatch(getDriveTypeRequest(id));
  }, []);

  useEffect(() => {
    if (isGetDriveTypeSuccess && prevIsDriveTypeSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetDriveTypeSuccess]);

  useEffect(() => {
    if (
      (isGetDriveTypeError && prevIsDriveTypeError === false) ||
      (isUpdatedDriveTypeError && prevIsUpdatedDriveTypeError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetDriveTypeError, isUpdatedDriveTypeError]);

  useEffect(() => {
    if (isUpdatedDriveTypeSuccess && prevIsUpdatedDriveTypeSuccess === false) {
      setIsLoading(false);
      toast.success("Drive Type Updated Successfully");
    }
  }, [isUpdatedDriveTypeSuccess]);

  const updateDriveType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateDriveTypeRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateDriveType}>
        <SubHeader
          title="Drive type"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent data={driveType} />
      </form>
    </>
  );
};

export default UpdateDriveType;
