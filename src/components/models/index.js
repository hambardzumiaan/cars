import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteModelRequest,
  getModelsRequest,
} from "../../redux/models/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";

const Models = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    models,
    isGetModelsSuccess,
    isDeletedModelSuccess,
    isGetModelsError,
    isDeletedModelError,
    isGetModelError,
  } = useSelector((state) => state.models);

  const prevIsGetModelsSuccess = usePrevious(isGetModelsSuccess);
  const prevIsDeletedModelSuccess = usePrevious(isDeletedModelSuccess);
  const prevIsGetModelsError = usePrevious(isGetModelsError);
  const prevIsGetModelError = usePrevious(isGetModelError);
  const prevIsDeletedModelError = usePrevious(isDeletedModelError);

  const [selectedModel, setSelectedModel] = useState({});
  const [isModelDeleteModalOpen, setIsModelDeleteModalOpen] = useState(false);
  const [modelsClone, setModelsClone] = useState([]);

  useEffect(() => {
    document.title = "Models - list";
    setIsLoading(true);
    dispatch(getModelsRequest());
  }, []);

  useEffect(() => {
    if (isGetModelsSuccess && prevIsGetModelsSuccess === false) {
      setIsLoading(false);
      setModelsClone(models);
    }
  }, [isGetModelsSuccess]);

  useEffect(() => {
    if (
      (isGetModelsError && prevIsGetModelsError === false) ||
      (isDeletedModelError && prevIsDeletedModelError === false) ||
      (isGetModelError && prevIsGetModelError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetModelsError, isDeletedModelError, isGetModelError]);

  useEffect(() => {
    if (isDeletedModelSuccess && prevIsDeletedModelSuccess === false) {
      setIsLoading(false);
      setModelsClone(
        modelsClone.filter((model) => model.id !== selectedModel.id)
      );
    }
  }, [isDeletedModelSuccess]);

  const handleShowDeleteModal = (model) => {
    setSelectedModel(model);
    setIsModelDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsModelDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedModel({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteModelRequest(selectedModel.id));
    setIsModelDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Models"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/model">
              <button className="btn btn-outline-info" title="Add model">
                Add
              </button>
            </Link>
          </div>
        }
      />
      <div className="table-responsive mb-3">
        <table className="border table table-light table-striped">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Mark</th>
              <th className="function-col text-right" />
            </tr>
          </thead>
          <tbody className="table-light">
            {modelsClone?.map((model) => {
              return (
                <tr key={model.id}>
                  <td>
                    <Link to={`/models/${model.id}`}>{model.name}</Link>
                  </td>
                  <td>
                    <Link to={`/marks/${model.mark.id}`}>
                      {model.mark.name}
                    </Link>
                  </td>
                  <td className="d-flex align-items-center justify-content-end">
                    <div>
                      <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={() => handleShowDeleteModal(model)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Delete model"
        message={
          <span>
            Do you want to delete <b>{selectedModel.name}</b> model?
          </span>
        }
        open={isModelDeleteModalOpen}
      />
    </>
  );
};

export default Models;
