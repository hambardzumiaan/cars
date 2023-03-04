import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const FormContent = ({ data = {}, name = "name" }) => {
  const { id } = useParams();

  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 col-lg">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={id ? data[name] : ""}
            key={data[name]}
            required
          />
        </div>
      </div>
    </>
  );
};

FormContent.propTypes = {
  data: PropTypes.object,
};

export default FormContent;
