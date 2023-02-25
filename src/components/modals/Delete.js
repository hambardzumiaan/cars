import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = (props) => {
  const {
    open,
    handleClose,
    handleConfirm,
    message = "Do you want to delete this item?",
    title = "Delete item",
    variantCancel = "secondary",
    variantDelete = "danger",
  } = props;

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant={variantCancel} onClick={handleClose}>
            Close
          </Button>
          <Button variant={variantDelete} type="submit" onClick={handleConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.any,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func,
  message: PropTypes.any,
  variantCancel: PropTypes.string,
  variantDelete: PropTypes.string,
  title: PropTypes.string,
};

export default DeleteModal;
