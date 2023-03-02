import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkRequest } from "../../redux/marks/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { updateMarkRequest } from "../../redux/marks/actions";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import FormContent from "../FormContent";

const UpdateMark = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetMarkSuccess,
    isGetMarkError,
    mark,
    isUpdatedMarkSuccess,
    isUpdatedMarkError,
  } = useSelector((state) => state.marks);

  const prevIsMarkSuccess = usePrevious(isGetMarkSuccess);
  const prevIsMarkError = usePrevious(isGetMarkError);
  const prevIsUpdatedMarkSuccess = usePrevious(isUpdatedMarkSuccess);
  const prevIsUpdatedMarkError = usePrevious(isUpdatedMarkError);

  useEffect(() => {
    document.title = "Марк";
    dispatch(getMarkRequest(id));
  }, []);

  useEffect(() => {
    if (isGetMarkSuccess && prevIsMarkSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetMarkSuccess]);

  useEffect(() => {
    if (isGetMarkError && prevIsMarkError === false) {
      setIsLoading(false);
    }
  }, [isGetMarkError]);

  useEffect(() => {
    if (isUpdatedMarkSuccess && prevIsUpdatedMarkSuccess === false) {
      setIsLoading(false);
      toast.success("Марка успешно обновлена");
    }
  }, [isUpdatedMarkSuccess]);

  useEffect(() => {
    if (isUpdatedMarkError && prevIsUpdatedMarkError === false) {
      setIsLoading(false);
    }
  }, [isUpdatedMarkError]);

  const updateMark = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;

    dispatch(
      updateMarkRequest({
        id,
        data: {
          name,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateMark}>
        <SubHeader
          title="Марк"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <FormContent data={mark} />
      </form>
    </>
  );
};

export default UpdateMark;
