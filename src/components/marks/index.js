import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMarkRequest, getMarksRequest } from "../../redux/marks/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import Table from "../table";

const Marks = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    marks,
    isGetMarksSuccess,
    isDeletedMarkSuccess,
    isGetMarksError,
    isDeletedMarkError,
    isGetMarkError,
  } = useSelector((state) => state.marks);

  const prevIsGetMarksSuccess = usePrevious(isGetMarksSuccess);
  const prevIsDeletedMarkSuccess = usePrevious(isDeletedMarkSuccess);
  const prevIsGetMarksError = usePrevious(isGetMarksError);
  const prevIsGetMarkError = usePrevious(isGetMarkError);
  const prevIsDeletedMarkError = usePrevious(isDeletedMarkError);

  const [selectedMark, setSelectedMark] = useState({});
  const [isModelDeleteModalOpen, setIsModelDeleteModalOpen] = useState(false);
  const [marksClone, setMarksClone] = useState([]);

  useEffect(() => {
    document.title = "Марки - список";
    setIsLoading(true);
    dispatch(getMarksRequest());
  }, []);

  useEffect(() => {
    if (isGetMarksSuccess && prevIsGetMarksSuccess === false) {
      setIsLoading(false);
      setMarksClone(marks);
    }
  }, [isGetMarksSuccess]);

  useEffect(() => {
    if (
      (isGetMarksError && prevIsGetMarksError === false) ||
      (isDeletedMarkError && prevIsDeletedMarkError === false) ||
      (isGetMarkError && prevIsGetMarkError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetMarksError, isDeletedMarkError, isGetMarkError]);

  useEffect(() => {
    if (isDeletedMarkSuccess && prevIsDeletedMarkSuccess === false) {
      toast.success("Марк автомобиля успешно удалена");
      setIsLoading(false);
      setMarksClone(marksClone.filter((mark) => mark.id !== selectedMark.id));
    }
  }, [isDeletedMarkSuccess]);

  const handleShowDeleteModal = (mark) => {
    setSelectedMark(mark);
    setIsModelDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsModelDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedMark({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteMarkRequest(selectedMark.id));
    setIsModelDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Марки"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/mark">
              <button className="btn btn-outline-info" title="Добавить">
                Добавить
              </button>
            </Link>
          </div>
        }
      />
      <Table
        data={marksClone}
        deletionModal={(mark) => handleShowDeleteModal(mark)}
        link="marks"
      />
      <DeleteConfirm
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Удалить марку"
        message={
          <span>
            Вы хотите удалить <b>{selectedMark.name}</b> марку?
          </span>
        }
        open={isModelDeleteModalOpen}
      />
    </>
  );
};

export default Marks;
