import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";
import DeleteConfirm from "../../components/modals/Delete";
import SubHeader from "../../components/SubHeader";
import { toast } from "react-toastify";
import {
  deleteDeliveryServiceRequest,
  getDeliveryServicesRequest,
} from "../../redux/delivery/actions";

const DeliveryServices = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();

  const {
    deliveryServices,
    isGetDeliveryServicesSuccess,
    isGetDeliveryServicesError,
    isDeletedDeliveryServiceSuccess,
    isGetDeliveryServiceError,
    isDeletedDeliveryServiceError,
  } = useSelector((state) => state.delivery);

  const prevIsGetDeliveryServicesSuccess = usePrevious(
    isGetDeliveryServicesSuccess
  );
  const prevIsDeletedDeliveryServiceSuccess = usePrevious(
    isDeletedDeliveryServiceSuccess
  );
  const prevIsGetDeliveryServicesError = usePrevious(
    isGetDeliveryServicesError
  );
  const prevIsGetDeliveryServiceError = usePrevious(isGetDeliveryServiceError);
  const prevIsDeletedDeliveryServiceError = usePrevious(
    isDeletedDeliveryServiceError
  );

  const [selectedDeliveryService, setSelectedDeliveryService] = useState({});
  const [
    isDeliveryServiceDeleteModalOpen,
    setIsDeliveryServiceDeleteModalOpen,
  ] = useState(false);
  const [deliveryServicesClone, setDeliveryServicesClone] = useState([]);

  useEffect(() => {
    document.title = "Delivery Services";
    setIsLoading(true);
    dispatch(getDeliveryServicesRequest());
  }, []);

  useEffect(() => {
    if (
      isGetDeliveryServicesSuccess &&
      prevIsGetDeliveryServicesSuccess === false
    ) {
      setIsLoading(false);
      setDeliveryServicesClone(deliveryServices);
    }
  }, [isGetDeliveryServicesSuccess]);

  useEffect(() => {
    if (
      (isGetDeliveryServicesError &&
        prevIsGetDeliveryServicesError === false) ||
      (isDeletedDeliveryServiceError &&
        prevIsDeletedDeliveryServiceError === false) ||
      (isGetDeliveryServiceError && prevIsGetDeliveryServiceError === false)
    ) {
      setIsLoading(false);
    }
  }, [
    isGetDeliveryServicesError,
    isGetDeliveryServiceError,
    isDeletedDeliveryServiceError,
  ]);

  useEffect(() => {
    if (
      isDeletedDeliveryServiceSuccess &&
      prevIsDeletedDeliveryServiceSuccess === false
    ) {
      toast.success("Delivery service deleted successfully");
      setIsLoading(false);
      setDeliveryServicesClone(
        deliveryServicesClone.filter(
          (deliveryService) => deliveryService.id !== selectedDeliveryService.id
        )
      );
    }
  }, [isDeletedDeliveryServiceSuccess]);

  const handleShowDeleteModal = (deliveryService) => {
    setSelectedDeliveryService(deliveryService);
    setIsDeliveryServiceDeleteModalOpen(true);
  };

  const handleClose = () => {
    setIsDeliveryServiceDeleteModalOpen(false);
    setTimeout(() => {
      setSelectedDeliveryService({});
    }, 100);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    dispatch(deleteDeliveryServiceRequest(selectedDeliveryService.id));
    setIsDeliveryServiceDeleteModalOpen(false);
  };

  return (
    <>
      <SubHeader
        title="Delivery services"
        actions={
          <div className="mb-3 mt-2 text-right">
            <Link to="/delivery-service">
              <button className="btn btn-outline-info" title="Add">
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
              <th>From</th>
              <th>To</th>
              <th>Price (per mileage)</th>
              <th>Services price</th>
              <th>Additional expenses</th>
              <th className="function-col text-right" />
            </tr>
          </thead>
          <tbody className="table-light">
            {deliveryServicesClone?.map((deliveryService) => {
              return (
                <tr key={deliveryService.id}>
                  <td>{deliveryService.from} mileage</td>
                  <td>{deliveryService.to} mileage</td>
                  <td>{deliveryService.mile_price} $</td>
                  <td>{deliveryService.services_price} $</td>
                  <td>{deliveryService.additional_expenses} $</td>
                  <td className="d-flex align-items-center justify-content-end">
                    <div>
                      <Link to={`/delivery-services/${deliveryService.id}`}>
                        <button
                          className="btn btn-outline-dark mr-3"
                          type="button"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-dark"
                        type="button"
                        onClick={() => handleShowDeleteModal(deliveryService)}
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
        title="Delete delivery service"
        message={
          <span>
            Do you want to delete <b>{selectedDeliveryService.name}</b> delivery
            service?
          </span>
        }
        open={isDeliveryServiceDeleteModalOpen}
      />
    </>
  );
};

export default DeliveryServices;
