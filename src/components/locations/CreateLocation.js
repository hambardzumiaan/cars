import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createLocationRequest } from "../../redux/locations/actions";
import FormContent from "../../components/FormContent";

const CreateLocation = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedLocationSuccess, isCreatedLocationError } = useSelector(
    (state) => state.locations
  );

  const prevIsCreatedLocationSuccess = usePrevious(isCreatedLocationSuccess);
  const prevIsCreatedLocationError = usePrevious(isCreatedLocationError);

  useEffect(() => {
    document.title = "Location - create";
  }, []);

  useEffect(() => {
    if (isCreatedLocationSuccess && prevIsCreatedLocationSuccess === false) {
      setIsLoading(false);
      toast.success("Location Created Successfully");
      navigate("/locations");
    }
  }, [isCreatedLocationSuccess]);

  useEffect(() => {
    if (isCreatedLocationError && prevIsCreatedLocationError === false) {
      setIsLoading(false);
    }
  }, [isCreatedLocationError]);

  const createLocation = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createLocationRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createLocation}>
        <SubHeader
          title="Location"
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

export default CreateLocation;
