import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createExteriorColorRequest } from "../../redux/exteriorColors/actions";
import FormContent from "../../components/FormContent";

const CreateExteriorColor = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedExteriorColorSuccess, isCreatedExteriorColorError } =
    useSelector((state) => state.exteriorColors);

  const prevIsCreatedExteriorColorSuccess = usePrevious(
    isCreatedExteriorColorSuccess
  );
  const prevIsCreatedExteriorColorError = usePrevious(
    isCreatedExteriorColorError
  );

  useEffect(() => {
    document.title = "Exterior color - create";
  }, []);

  useEffect(() => {
    if (
      isCreatedExteriorColorSuccess &&
      prevIsCreatedExteriorColorSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Exterior color created successfully");
      navigate("/exterior-colors");
    }
  }, [isCreatedExteriorColorSuccess]);

  useEffect(() => {
    if (
      isCreatedExteriorColorError &&
      prevIsCreatedExteriorColorError === false
    ) {
      setIsLoading(false);
    }
  }, [isCreatedExteriorColorError]);

  const createExteriorColor = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createExteriorColorRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createExteriorColor}>
        <SubHeader
          title="Exterior color"
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

export default CreateExteriorColor;
