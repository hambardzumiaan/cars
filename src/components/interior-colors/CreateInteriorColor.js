import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { toast } from "react-toastify";
import { createInteriorColorRequest } from "../../redux/interiorColors/actions";
import FormContent from "../../components/FormContent";

const CreateInteriorColor = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedInteriorColorSuccess, isCreatedInteriorColorError } =
    useSelector((state) => state.interiorColors);

  const prevIsCreatedInteriorColorSuccess = usePrevious(
    isCreatedInteriorColorSuccess
  );
  const prevIsCreatedInteriorColorError = usePrevious(
    isCreatedInteriorColorError
  );

  useEffect(() => {
    document.title = "Interior color - create";
  }, []);

  useEffect(() => {
    if (
      isCreatedInteriorColorSuccess &&
      prevIsCreatedInteriorColorSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Interior color created successfully");
      navigate("/interior-colors");
    }
  }, [isCreatedInteriorColorSuccess]);

  useEffect(() => {
    if (
      isCreatedInteriorColorError &&
      prevIsCreatedInteriorColorError === false
    ) {
      setIsLoading(false);
    }
  }, [isCreatedInteriorColorError]);

  const createInteriorColor = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      createInteriorColorRequest({
        name,
      })
    );
  };

  return (
    <>
      <form onSubmit={createInteriorColor}>
        <SubHeader
          title="Interior color"
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

export default CreateInteriorColor;
