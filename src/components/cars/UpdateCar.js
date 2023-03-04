import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrevious from "../../utility/hooks/usePrevious";
import SubHeader from "../SubHeader";
import { MainContext } from "../../context/contexts";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { getCarRequest, updateCarRequest } from "../../redux/cars/actions";
import CarContent from "./CarContent";

const UpdateCar = () => {
  // const { setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const ref = useRef();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Car";
  }, []);

  const updateCar = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    let generalActiveId = null;
    const generalActive = e.target["general-active"];
    if (generalActive?.length > 0) {
      generalActive.forEach((item) => {
        if (item.checked) {
          generalActiveId = +item.dataset.id;
        }
      });
    }

    let afterActiveId = null;
    const afterActive = e.target["after-renovation-active"];
    if (afterActive?.length > 0) {
      afterActive.forEach((item) => {
        if (item.checked) {
          afterActiveId = +item.dataset.id;
        }
      });
    }

    let beforeActiveId = null;
    const beforeActive = e.target["before-renovation-active"];
    if (beforeActive?.length > 0) {
      beforeActive.forEach((item) => {
        if (item.checked) {
          beforeActiveId = +item.dataset.id;
        }
      });
    }

    const carData = ref.current?.getFormData();
    const general_photos = carData.general_photos?.map(({ id }, index) => {
      return {
        id,
        row_index: index,
        active: generalActiveId === id ? 1 : 0,
      };
    });
    const after_renovation_photos = carData.after_renovation_photos?.map(
      ({ id }, index) => {
        return {
          id,
          row_index: index,
          active: afterActiveId === id ? 1 : 0,
        };
      }
    );
    const before_renovation_photos = carData.before_renovation_photos?.map(
      ({ id }, index) => {
        return {
          id,
          row_index: index,
          active: beforeActiveId === id ? 1 : 0,
        };
      }
    );

    const data = new FormData(e.target);
    data.set("description", carData.description);
    data.set("show_on_page", e.target.show_on_page.checked === true ? 1 : 0);
    if (carData?.general_photos?.length > 0) {
      data.set("general_photos_ids", JSON.stringify(general_photos));
    }

    if (carData?.after_renovation_photos?.length > 0) {
      data.set(
        "after_renovation_photos_ids",
        JSON.stringify(after_renovation_photos)
      );
    }

    if (carData?.before_renovation_photos?.length > 0) {
      data.set(
        "before_renovation_photos_ids",
        JSON.stringify(before_renovation_photos)
      );
    }

    dispatch(
      updateCarRequest({
        id,
        data,
      })
    );

    e.target["before_renovation_photos[]"].value = "";
    e.target["after_renovation_photos[]"].value = "";
    e.target["general_photos[]"].value = "";
  };

  return (
    <>
      <form onSubmit={updateCar}>
        <SubHeader
          title="Car"
          actions={
            <button className="btn btn-outline-info mr-2" type="submit">
              Сохранить
            </button>
          }
        />
        <CarContent ref={ref} />
      </form>
    </>
  );
};

export default UpdateCar;
