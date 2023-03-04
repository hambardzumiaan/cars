import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getMarksRequest } from "../../redux/marks/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";

const ModelContent = ({ model }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { setIsLoading } = useContext(MainContext);

  const { marks, isGetMarksSuccess } = useSelector((state) => state.marks);

  const prevIsGetMarksSuccess = usePrevious(isGetMarksSuccess);

  useEffect(() => {
    dispatch(getMarksRequest());
  }, []);

  useEffect(() => {
    if (isGetMarksSuccess && prevIsGetMarksSuccess === false) {
      setIsLoading(false);
    }
  }, [isGetMarksSuccess]);

  return (
    <>
      <div className="row align-items-center">
        <div className="col-6 col-lg">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={id ? model?.name : ""}
            key={model?.name}
            required
          />
        </div>
        <div className="col-6 col-lg">
          <label htmlFor="mark">Mark</label>
          <select
            className="form-control"
            name="car_mark_id"
            defaultValue={id ? model?.mark?.id : ""}
            key={model?.name}
          >
            {marks?.map((mark) => {
              return (
                <option key={mark.id} value={mark.id}>
                  {mark.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

ModelContent.propTypes = {
  model: PropTypes.object,
};

export default ModelContent;
