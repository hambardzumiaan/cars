import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CancelSvg from "../../assets/images/svgs/cancel";

const SortableItem = ({ id, item, deleteCarPhoto, name = "general" }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className="col-auto position-relative">
        <div className="active-radio">
          <input
            type="radio"
            name={`${name}-active`}
            data-id={id}
            defaultChecked={item.active}
            key={item.id}
          />
        </div>
        <div
          className="cancel-button"
          onClick={() => deleteCarPhoto(item.id, name)}
        >
          <CancelSvg />
        </div>
        <img
          {...listeners}
          className="mb-4"
          src={item.image}
          width={200}
          height={150}
          alt={item.image}
        />
      </div>
    </div>
  );
};

export default SortableItem;
