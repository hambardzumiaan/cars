import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const StickerContent = ({ sticker }) => {
  const { id } = useParams();

  return (
    <>
      <div className="row align-items-center">
        <div className="col-6 col-lg">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Текст</label>
          <input
            type="text"
            className="form-control"
            name="text"
            defaultValue={id ? sticker?.text : ""}
            key={sticker?.text}
            required
          />
        </div>
        <div className="col-6 col-lg">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Цвет</label>
          <input
            type="text"
            className="form-control"
            name="color"
            defaultValue={id ? sticker?.color : ""}
            key={sticker?.color}
            required
          />
        </div>
      </div>
    </>
  );
};

StickerContent.propTypes = {
  sticker: PropTypes.object,
};

export default StickerContent;
