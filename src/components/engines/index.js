import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";
import {
  deleteEngineRequest,
  getEnginesRequest,
} from "../../redux/engines/actions";

const Engines = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    engines,
    isGetEnginesSuccess,
    isGetEnginesError,
    isDeletedEngineSuccess,
    isGetEngineError,
    isDeletedEngineError,
  } = useSelector((state) => state.engines);

  const prevIsGetEnginesSuccess = usePrevious(isGetEnginesSuccess);
  const prevIsDeletedEngineSuccess = usePrevious(isDeletedEngineSuccess);
  const prevIsGetEnginesError = usePrevious(isGetEnginesError);
  const prevIsGetEngineError = usePrevious(isGetEngineError);
  const prevIsDeletedEngineError = usePrevious(isDeletedEngineError);

  const [selectedEngine, setSelectedEngine] = useState({});
  const [isEngineDeleteModalOpen, setIsEngineDeleteModalOpen] = useState(false);
  const [enginesClone, setEnginesClone] = useState([]);

  useEffect(() => {
    document.title = "Двигатели";
    setIsLoading(true);
    dispatch(getEnginesRequest());
  }, []);

  useEffect(() => {
    if (isGetEnginesSuccess && prevIsGetEnginesSuccess === false) {
      setIsLoading(false);
      setEnginesClone(engines);
    }
  }, [isGetEnginesSuccess]);

  useEffect(() => {
    if (
      (isGetEnginesError && prevIsGetEnginesError === false) ||
      (isDeletedEngineError && prevIsDeletedEngineError === false) ||
      (isGetEngineError && prevIsGetEngineError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetEnginesError, isGetEngineError, isDeletedEngineError]);

  useEffect(() => {
    if (isDeletedEngineSuccess && prevIsDeletedEngineSuccess === false) {
      toast.success("Двигатель успешно удален");
      setIsLoading(false);
      setEnginesClone(
        enginesClone.filter((engine) => engine.id !== selectedEngine.id)
      );
    }
  }, [isDeletedEngineSuccess]);

  const handleShowDeleteModal = (Engine) => {
    setSelectedEngine(Engine);
    setIsEngineDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsEngineDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedEngine({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteEngineRequest(selectedEngine.id));
    setIsEngineDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Двигатели"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/engine">
              <button className="btn btn-outline-info" title="Добавить">
                Добавить
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={enginesClone}
        deletionModal={(Engine) => handleShowDeleteModal(Engine)}
        link="engines"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Удалить двигатель"
        message={
          <span>
            Вы хотите удалить <b>{selectedEngine.name}</b> двигатель?
          </span>
        }
        open={isEngineDeleteModalOpen}
      />
    </>
  );
};

export default Engines;
