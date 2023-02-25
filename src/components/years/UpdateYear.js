import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../../components/FormContent";
import { getYearRequest, updateYearRequest } from "../../redux/years/actions";

const UpdateYear = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetYearSuccess,
    isGetYearError,
    year,
    isUpdatedYearSuccess,
    isUpdatedYearError,
  } = useSelector((state) => state.years);

  const prevIsYearSuccess = usePrevious(isGetYearSuccess);
  const prevIsYearError = usePrevious(isGetYearError);
  const prevIsUpdatedYearSuccess = usePrevious(isUpdatedYearSuccess);
  const prevIsUpdatedYearError = usePrevious(isUpdatedYearError);

  useEffect(() => {
    document.title = "Year";
    dispatch(getYearRequest(id));
  }, []);

  useEffect(() => {
    if (isGetYearSuccess && prevIsYearSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetYearSuccess]);

  useEffect(() => {
    if (
      (isGetYearError && prevIsYearError === false) ||
      (isUpdatedYearError && prevIsUpdatedYearError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetYearError, isUpdatedYearError]);

  useEffect(() => {
    if (isUpdatedYearSuccess && prevIsUpdatedYearSuccess === false) {
      setIsLoading(false);
      toast.success("Year Updated Successfully");
    }
  }, [isUpdatedYearSuccess]);

  const updateYear = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateYearRequest({
        id,
        data: {
          year: name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateYear}>
        <SubHeader
          title="Year"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <FormContent data={year} name="year" />
      </form>
    </>
  );
};

export default UpdateYear;
