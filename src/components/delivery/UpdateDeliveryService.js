import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { updateDeliveryServiceRequest } from "../../redux/delivery/actions";
import { useParams } from "react-router";
import { getDeliveryServiceRequest } from "../../redux/delivery/actions";
import { toast } from "react-toastify";
import DeliveryServiceContent from "./DeliveryServiceContent";

const UpdateDeliveryService = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    isGetDeliveryServiceSuccess,
    isGetDeliveryServiceError,
    isUpdatedDeliveryServiceSuccess,
    isUpdatedDeliveryServiceError,
    deliveryService,
  } = useSelector((state) => state.delivery);

  const prevIsDeliveryServiceSuccess = usePrevious(isGetDeliveryServiceSuccess);
  const prevIsDeliveryServiceError = usePrevious(isGetDeliveryServiceError);
  const prevIsUpdatedDeliveryServiceError = usePrevious(
    isUpdatedDeliveryServiceError
  );
  const prevIsUpdatedDeliveryServiceSuccess = usePrevious(
    isUpdatedDeliveryServiceSuccess
  );

  useEffect(() => {
    document.title = "Delivery service";
    dispatch(getDeliveryServiceRequest(id));
  }, []);

  useEffect(() => {
    if (isGetDeliveryServiceSuccess && prevIsDeliveryServiceSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetDeliveryServiceSuccess]);

  useEffect(() => {
    if (
      isUpdatedDeliveryServiceSuccess &&
      prevIsUpdatedDeliveryServiceSuccess === false
    ) {
      setIsLoading(false);
      toast.success("Delivery service updated successfully");
    }
  }, [isUpdatedDeliveryServiceSuccess]);

  useEffect(() => {
    if (
      isUpdatedDeliveryServiceError &&
      prevIsUpdatedDeliveryServiceError === false
    ) {
      setIsLoading(false);
    }
  }, [isUpdatedDeliveryServiceError]);

  useEffect(() => {
    if (isGetDeliveryServiceError && prevIsDeliveryServiceError === false) {
      setIsLoading(false);
    }
  }, [isGetDeliveryServiceError]);

  const updateDeliveryService = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const from = e.target.from.value;
    const to = e.target.to.value;
    const mile_price = e.target.mile_price.value;
    const services_price = e.target.services_price.value;
    const additional_expenses = e.target.additional_expenses.value;

    if (parseInt(from) > parseInt(to)) {
      setIsLoading(false);
      return toast.error("The From field must be greater than the To field.");
    }

    dispatch(
      updateDeliveryServiceRequest({
        id,
        data: {
          from,
          to,
          mile_price,
          services_price,
          additional_expenses,
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={updateDeliveryService}>
        <SubHeader
          title="Delivery service"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <DeliveryServiceContent deliveryService={deliveryService} />
      </form>
    </>
  );
};

export default UpdateDeliveryService;
