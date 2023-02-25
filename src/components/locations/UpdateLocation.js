import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import {
  getLocationRequest,
  updateLocationRequest,
} from "../../redux/locations/actions";

const UpdateLocation = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetLocationSuccess,
    isGetLocationError,
    location,
    isUpdatedLocationSuccess,
    isUpdatedLocationError,
  } = useSelector((state) => state.locations);

  const prevIsLocationSuccess = usePrevious(isGetLocationSuccess);
  const prevIsLocationError = usePrevious(isGetLocationError);
  const prevIsUpdatedLocationSuccess = usePrevious(isUpdatedLocationSuccess);
  const prevIsUpdatedLocationError = usePrevious(isUpdatedLocationError);

  useEffect(() => {
    document.title = "Location";
    dispatch(getLocationRequest(id));
  }, []);

  useEffect(() => {
    if (isGetLocationSuccess && prevIsLocationSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetLocationSuccess]);

  useEffect(() => {
    if (
      (isGetLocationError && prevIsLocationError === false) ||
      (isUpdatedLocationError && prevIsUpdatedLocationError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetLocationError, isUpdatedLocationError]);

  useEffect(() => {
    if (isUpdatedLocationSuccess && prevIsUpdatedLocationSuccess === false) {
      setIsLoading(false);
      toast.success("Location Updated Successfully");
    }
  }, [isUpdatedLocationSuccess]);

  const updateLocation = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateLocationRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateLocation}>
        <SubHeader
          title="Location"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent data={location} />
      </form>
    </>
  );
};

export default UpdateLocation;
