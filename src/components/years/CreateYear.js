import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createYearRequest } from "../../redux/years/actions";
import FormContent from "../../components/FormContent";

const CreateYear = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedYearSuccess, isCreatedYearError } = useSelector(
    (state) => state.years
  );

  const prevIsCreatedYearSuccess = usePrevious(isCreatedYearSuccess);
  const prevIsCreatedYearError = usePrevious(isCreatedYearError);

  useEffect(() => {
    document.title = "Year - create";
  }, []);

  useEffect(() => {
    if (isCreatedYearSuccess && prevIsCreatedYearSuccess === false) {
      setIsLoading(false);
      toast.success("Year Created Successfully");
      navigate("/years");
    }
  }, [isCreatedYearSuccess]);

  useEffect(() => {
    if (isCreatedYearError && prevIsCreatedYearError === false) {
      setIsLoading(false);
    }
  }, [isCreatedYearError]);

  const createYear = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createYearRequest({
        year: name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createYear}>
        <SubHeader
          title="Year"
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

export default CreateYear;
