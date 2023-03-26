import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { createDeliveryServiceRequest } from "../../redux/delivery/actions";
import { toast } from "react-toastify";
import DeliveryServiceContent from "./DeliveryServiceContent";

const DeliveryService = () => {
  const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCreatedDeliveryServiceSuccess, isCreatedDeliveryServiceError } =
    useSelector((state) => state.delivery);

  const prevIsCreatedDeliveryServiceSuccess = usePrevious(
    isCreatedDeliveryServiceSuccess
  );
  const prevIsCreatedDeliveryServiceError = usePrevious(
    isCreatedDeliveryServiceError
  );

  useEffect(() => {
    document.title = "Delivery service - create";
  }, []);

  useEffect(() => {
    if (
      isCreatedDeliveryServiceSuccess &&
      prevIsCreatedDeliveryServiceSuccess === false
    ) {
      toast.success("Delivery service created successfully");
      setIsLoading(false);
      navigate("/delivery-services");
    }
  }, [isCreatedDeliveryServiceSuccess]);

  useEffect(() => {
    if (
      isCreatedDeliveryServiceError &&
      prevIsCreatedDeliveryServiceError === false
    ) {
      setIsLoading(false);
    }
  }, [isCreatedDeliveryServiceError]);

  const createDeliveryService = (e) => {
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
      createDeliveryServiceRequest({
        from,
        to,
        mile_price,
        services_price,
        additional_expenses,
      })
    );
  };

  return (
    <>
      <form onSubmit={createDeliveryService}>
        <SubHeader
          title="Delivery service"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Save
            </button>
          }
        />
        <DeliveryServiceContent />
      </form>
    </>
  );
};

export default DeliveryService;
