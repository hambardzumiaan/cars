import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDriveTypeRequest } from "../../redux/driveTypes/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";

const CreateDriveType = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedDriveTypeSuccess, isCreatedDriveTypeError } = useSelector(
    (state) => state.driveTypes
  );

  const prevIsCreatedDriveTypeSuccess = usePrevious(isCreatedDriveTypeSuccess);
  const prevIsCreatedDriveTypeError = usePrevious(isCreatedDriveTypeError);

  useEffect(() => {
    document.title = "Drive type - create";
  }, []);

  useEffect(() => {
    if (isCreatedDriveTypeSuccess && prevIsCreatedDriveTypeSuccess === false) {
      setIsLoading(false);
      toast.success("Drive Type Created Successfully");
      navigate("/drive-types");
    }
  }, [isCreatedDriveTypeSuccess]);

  useEffect(() => {
    if (isCreatedDriveTypeError && prevIsCreatedDriveTypeError === false) {
      setIsLoading(false);
    }
  }, [isCreatedDriveTypeError]);

  const createDriveType = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createDriveTypeRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createDriveType}>
        <SubHeader
          title="Drive Type"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent />
      </form>
    </>
  );
};

export default CreateDriveType;
