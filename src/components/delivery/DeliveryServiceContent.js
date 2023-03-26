import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const DeliveryServiceContent = ({ deliveryService }) => {
  const { id } = useParams();

  return (
    <>
      <div className="row align-items-center">
        <div className="col-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>From</label>
          <input
            type="number"
            className="form-control"
            name="from"
            defaultValue={id ? deliveryService?.from : ""}
            key={deliveryService?.to}
            required
          />
        </div>
        <div className="col-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>To</label>
          <input
            type="number"
            className="form-control"
            name="to"
            defaultValue={id ? deliveryService?.to : ""}
            key={deliveryService?.to}
            required
          />
        </div>
        <div className="col-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Price (per mileage)</label>
          <input
            type="number"
            className="form-control"
            name="mile_price"
            step="any"
            defaultValue={id ? deliveryService?.mile_price : ""}
            key={deliveryService?.mile_price}
            required
          />
        </div>
        <div className="col-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Services price</label>
          <input
            type="number"
            className="form-control"
            name="services_price"
            step="any"
            defaultValue={id ? deliveryService?.services_price : ""}
            key={deliveryService?.services_price}
            required
          />
        </div>
        <div className="col-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Additional expenses</label>
          <input
            type="number"
            className="form-control"
            name="additional_expenses"
            step="any"
            defaultValue={id ? deliveryService?.additional_expenses : ""}
            key={deliveryService?.additional_expenses}
            required
          />
        </div>
      </div>
    </>
  );
};

DeliveryServiceContent.propTypes = {
  deliveryService: PropTypes.object,
};

export default DeliveryServiceContent;
