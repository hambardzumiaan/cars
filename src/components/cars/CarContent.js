import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { createMarkRequest, getMarksRequest } from "../../redux/marks/actions";
import usePrevious from "../../utility/hooks/usePrevious";
import { getYearsRequest } from "../../redux/years/actions";
import {
  createModelRequest,
  getModelsRequest,
} from "../../redux/models/actions";
import { getBodyStylesRequest } from "../../redux/bodyStyles/actions";
import { getEnginesRequest } from "../../redux/engines/actions";
import { getExteriorColorsRequest } from "../../redux/exteriorColors/actions";
import { getFuelTypesRequest } from "../../redux/fuelTypes/actions";
import { getInteriorColorsRequest } from "../../redux/interiorColors/actions";
import { getStickersRequest } from "../../redux/stickers/actions";
import { getTransmissionsRequest } from "../../redux/transmissions/actions";
import { getTransportTypesRequest } from "../../redux/transportTypes/actions";
import { MainContext } from "../../context/contexts";
import { getDriveTypesRequest } from "../../redux/driveTypes/actions";
import { getSeatsRequest } from "../../redux/seats/actions";
import Select from "react-select";
import { deleteCarPhotoRequest, getCarRequest } from "../../redux/cars/actions";
import { toast } from "react-toastify";
import SortableItem from "./SortableItem";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CreatableSelect from "react-select/creatable";

// eslint-disable-next-line react/display-name
const CarContent = forwardRef((props, ref) => {
  const { isLoading, setIsLoading } = useContext(MainContext);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isGetCarSuccess, car, isUpdatedCarSuccess, isDeleteCarPhotoSuccess } =
    useSelector((state) => state.cars);

  console.log("car", car);

  const { marks, isGetMarksSuccess, isCreatedMarkSuccess, mark } = useSelector(
    (state) => state.marks
  );
  const { models, isGetModelsSuccess, isCreatedModelSuccess, model } =
    useSelector((state) => state.models);
  const { engines, isGetEnginesSuccess } = useSelector(
    (state) => state.engines
  );
  const { transmissions, isGetTransmissionsSuccess } = useSelector(
    (state) => state.transmissions
  );
  const { fuelTypes, isGetFuelTypesSuccess } = useSelector(
    (state) => state.fuelTypes
  );
  const { driveTypes, isGetDriveTypesSuccess } = useSelector(
    (state) => state.driveTypes
  );
  const { transportTypes, isGetTranportTypesSuccess } = useSelector(
    (state) => state.transportTypes
  );
  const { bodyStyles, isGetBodyStylesSuccess } = useSelector(
    (state) => state.bodyStyles
  );
  const { years, isGetYearsSuccess } = useSelector((state) => state.years);

  const { exteriorColors, isGetExteriorColorsSuccess } = useSelector(
    (state) => state.exteriorColors
  );
  const { interiorColors, isGetInteriorColorsSuccess } = useSelector(
    (state) => state.interiorColors
  );
  const { stickers, isGetStickersSuccess } = useSelector(
    (state) => state.stickers
  );
  const { seats, isGetSeatsSuccess } = useSelector((state) => state.seats);

  const prevIsUpdatedCarSuccess = usePrevious(isUpdatedCarSuccess);

  const [selectedCar, setSelectedCar] = useState({});

  const [carData, setCarData] = useState({
    car_mark_id: null,
    car_year_id: null,
    car_model_id: null,
    car_body_style_id: null,
    car_drive_type_id: null,
    car_exterior_color_id: null,
    car_interior_color_id: null,
    car_fuel_type_id: null,
    car_engine_id: null,
    car_sticker_id: null,
    car_transmission_id: null,
    car_type_id: null,
    car_seat_id: null,
    status: null,
    vin: null,
    city: null,
    price: null,
    hwy: null,
    description: null,
    general_photos: null,
    after_renovation_photos: null,
    before_renovation_photos: null,
    show_on_page: 0,
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [marksOptions, setMarksOptions] = useState([]);
  const [modelsOptions, setModelsOptions] = useState([]);
  const [enginesOptions, setEnginesOptions] = useState([]);
  const [transmissionOptions, setTransmissionOptions] = useState([]);
  const [fuelTypesOptions, setFuelTypesOptions] = useState([]);
  const [driveTypesOptions, setDriveTypesOptions] = useState([]);
  const [transportTypesOptions, setTransportTypesOptions] = useState([]);
  const [bodyStylesOptions, setBodyStylesOptions] = useState([]);
  const [yearsOptions, setYearsOptions] = useState([]);
  const [exteriorColorsOptions, setExteriorColorsOptions] = useState([]);
  const [interiorColorsOptions, setInteriorColorsOptions] = useState([]);
  const [stickersOptions, setStickersOptions] = useState([]);
  const [seatsOptions, setSeatsOptions] = useState([]);
  const [selectedMark, setSelectedMark] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageType, setSelectedImageType] = useState(null);

  const prevIsGetMarksSuccess = usePrevious(isGetMarksSuccess);
  const prevIsGetModelsSuccess = usePrevious(isGetModelsSuccess);
  const prevIsGetEnginesSuccess = usePrevious(isGetEnginesSuccess);
  const prevIsGetTransmissionsSuccess = usePrevious(isGetTransmissionsSuccess);
  const prevIsGetFuelTypesSuccess = usePrevious(isGetFuelTypesSuccess);
  const prevIsGetDriveTypesSuccess = usePrevious(isGetDriveTypesSuccess);
  const prevIsGetTransportTypesSuccess = usePrevious(isGetTranportTypesSuccess);
  const prevIsGetBodyStylesSuccess = usePrevious(isGetBodyStylesSuccess);
  const prevIsGetYearsSuccess = usePrevious(isGetYearsSuccess);
  const prevIsGetStickersSuccess = usePrevious(isGetStickersSuccess);
  const prevIsGetSeatsSuccess = usePrevious(isGetSeatsSuccess);
  const prevIsDeleteCarPhotoSuccess = usePrevious(isDeleteCarPhotoSuccess);
  const prevIsGetCarSuccess = usePrevious(isGetCarSuccess);
  const prevIsCreatedMarkSuccess = usePrevious(isCreatedMarkSuccess);
  const prevIsCreatedModelSuccess = usePrevious(isCreatedModelSuccess);
  const prevIsGetInteriorColorsSuccess = usePrevious(
    isGetInteriorColorsSuccess
  );
  const prevIsGetExteriorColorsSuccess = usePrevious(
    isGetExteriorColorsSuccess
  );

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return selectedCar;
    },
  }));

  useEffect(() => {
    if (prevIsGetCarSuccess === false && isGetCarSuccess) {
      const carData = structuredClone(car);
      if (carData.general_photos?.length) {
        carData.general_photos = carData.general_photos.sort(
          (a, b) => a.row_index - b.row_index
        );
      }

      if (carData.after_renovation_photos?.length) {
        carData.after_renovation_photos = carData.after_renovation_photos.sort(
          (a, b) => a.row_index - b.row_index
        );
      }

      if (carData.before_renovation_photos?.length) {
        carData.before_renovation_photos =
          carData.before_renovation_photos.sort(
            (a, b) => a.row_index - b.row_index
          );
      }
      setSelectedCar(carData);
    }
  }, [isGetCarSuccess]);

  useEffect(() => {
    if (isUpdatedCarSuccess && prevIsUpdatedCarSuccess === false) {
      setIsLoading(false);
      const carData = structuredClone(car);
      if (carData.general_photos?.length > 0) {
        carData.general_photos = carData.general_photos.sort(
          (a, b) => a.row_index - b.row_index
        );
      }
      if (carData.after_renovation_photos?.length) {
        carData.after_renovation_photos = carData.after_renovation_photos.sort(
          (a, b) => a.row_index - b.row_index
        );
      }

      if (carData.before_renovation_photos?.length) {
        carData.before_renovation_photos =
          carData.before_renovation_photos.sort(
            (a, b) => a.row_index - b.row_index
          );
      }
      setSelectedCar(carData);
      toast.success("Car Updated Successfully");
    }
  }, [isUpdatedCarSuccess]);

  useEffect(() => {
    if (id) {
      dispatch(getCarRequest(id));
    }
  }, []);

  useEffect(() => {
    if (isCreatedMarkSuccess && prevIsCreatedMarkSuccess === false) {
      setSelectedMark({
        value: mark.id,
        label: mark.name,
      });
      dispatch(getMarksRequest());
    }
  }, [isCreatedMarkSuccess]);

  useEffect(() => {
    if (isCreatedModelSuccess && prevIsCreatedModelSuccess === false) {
      setSelectedModel({
        value: model.id,
        label: model.name,
      });
      dispatch(getModelsRequest());
    }
  }, [isCreatedModelSuccess]);

  useEffect(() => {
    if (isGetMarksSuccess && prevIsGetMarksSuccess === false) {
      const marksClone = [...marks];
      const data = [];
      marksClone.map((mark) => {
        data.push({
          label: mark.name,
          value: mark.id,
        });
      });
      setSelectedMark({
        label: mark?.name || car?.mark?.name,
        value: mark?.id || car?.mark?.id,
      });
      setMarksOptions(data);
    }
  }, [isGetMarksSuccess, marks]);

  useEffect(() => {
    if (
      (selectedMark && isGetModelsSuccess) ||
      (isGetModelsSuccess && prevIsGetModelsSuccess === false)
    ) {
      const modelsClone = [...models];
      const data = [];
      const markId =
        Object.keys(selectedMark).length > 0
          ? selectedMark.value
          : car?.mark?.id;
      modelsClone
        .filter((model) => model.mark.id === markId)
        .map((model) => {
          data.push({
            label: model.name,
            value: model.id,
          });
        });

      setSelectedModel({
        label: selectedModel === null ? "" : car?.model?.name,
        value: selectedModel === null ? "" : car?.model?.id,
      });

      setModelsOptions(data);
    }
  }, [isGetModelsSuccess, selectedMark, car]);

  useEffect(() => {
    if (isGetEnginesSuccess && prevIsGetEnginesSuccess === false) {
      const enginesClone = [...engines];
      const data = [];
      enginesClone.map((engine) => {
        data.push({
          label: engine.name,
          value: engine.id,
        });
      });
      setEnginesOptions(data);
    }
  }, [isGetEnginesSuccess]);

  useEffect(() => {
    if (isGetTransmissionsSuccess && prevIsGetTransmissionsSuccess === false) {
      const transmissionsClone = [...transmissions];
      const data = [];
      transmissionsClone.map((transmission) => {
        data.push({
          label: transmission.name,
          value: transmission.id,
        });
      });
      setTransmissionOptions(data);
    }
  }, [isGetTransmissionsSuccess]);

  useEffect(() => {
    if (isGetFuelTypesSuccess && prevIsGetFuelTypesSuccess === false) {
      const fuelTypesClone = [...fuelTypes];
      const data = [];
      fuelTypesClone.map((fuelType) => {
        data.push({
          label: fuelType.name,
          value: fuelType.id,
        });
      });
      setFuelTypesOptions(data);
    }
  }, [isGetFuelTypesSuccess]);

  useEffect(() => {
    if (isGetDriveTypesSuccess && prevIsGetDriveTypesSuccess === false) {
      const driveTypesClone = [...driveTypes];
      const data = [];
      driveTypesClone.map((driveType) => {
        data.push({
          label: driveType.name,
          value: driveType.id,
        });
      });
      setDriveTypesOptions(data);
    }
  }, [isGetDriveTypesSuccess]);

  useEffect(() => {
    if (isGetTranportTypesSuccess && prevIsGetTransportTypesSuccess === false) {
      const transportTypesClone = [...transportTypes];
      const data = [];
      transportTypesClone.map((transportType) => {
        data.push({
          label: transportType.name,
          value: transportType.id,
        });
      });
      setTransportTypesOptions(data);
    }
  }, [isGetTranportTypesSuccess]);

  useEffect(() => {
    if (isGetBodyStylesSuccess && prevIsGetBodyStylesSuccess === false) {
      const bodyStylesClone = [...bodyStyles];
      const data = [];
      bodyStylesClone.map((bodyStyle) => {
        data.push({
          label: bodyStyle.name,
          value: bodyStyle.id,
        });
      });
      setBodyStylesOptions(data);
    }
  }, [isGetBodyStylesSuccess]);

  useEffect(() => {
    if (isGetYearsSuccess && prevIsGetYearsSuccess === false) {
      const yearsClone = [...years];
      const data = [];
      yearsClone.map((year) => {
        data.push({
          label: year.year,
          value: year.id,
        });
      });
      setYearsOptions(data);
    }
  }, [isGetYearsSuccess]);

  useEffect(() => {
    if (
      isGetInteriorColorsSuccess &&
      prevIsGetInteriorColorsSuccess === false
    ) {
      const interiorColorsClone = [...interiorColors];
      const data = [];
      interiorColorsClone.map((interiorColor) => {
        data.push({
          label: interiorColor.name,
          value: interiorColor.id,
        });
      });
      setInteriorColorsOptions(data);
    }
  }, [isGetInteriorColorsSuccess]);

  useEffect(() => {
    if (
      isGetExteriorColorsSuccess &&
      prevIsGetExteriorColorsSuccess === false
    ) {
      const exteriorColorsClone = [...exteriorColors];
      const data = [];
      exteriorColorsClone.map((exteriorColor) => {
        data.push({
          label: exteriorColor.name,
          value: exteriorColor.id,
        });
      });
      setExteriorColorsOptions(data);
    }
  }, [isGetExteriorColorsSuccess]);

  useEffect(() => {
    if (isGetStickersSuccess && prevIsGetStickersSuccess === false) {
      const stickersClone = [...stickers];
      const data = [];
      stickersClone.map((sticker) => {
        data.push({
          label: sticker.text,
          value: sticker.id,
        });
      });
      setStickersOptions(data);
    }
  }, [isGetStickersSuccess]);

  useEffect(() => {
    if (isGetSeatsSuccess && prevIsGetSeatsSuccess === false) {
      setIsLoading(false);
      const seatsClone = [...seats];
      const data = [];
      seatsClone.map((seat) => {
        data.push({
          label: seat.name,
          value: seat.id,
        });
      });
      setSeatsOptions(data);
    }
  }, [isGetSeatsSuccess]);

  useEffect(() => {
    if (isDeleteCarPhotoSuccess && prevIsDeleteCarPhotoSuccess === false) {
      const selectedCarCopy = { ...selectedCar };
      switch (selectedImageType) {
      case "general":
        const index = selectedCarCopy.general_photos.findIndex(
          (item) => item.id === selectedImageId
        );
        selectedCarCopy.general_photos.splice(index, 1);
        setSelectedCar(selectedCarCopy);
        break;
      case "after-renovation":
        const afterRenovationIndex =
            selectedCarCopy.after_renovation_photos.findIndex(
              (item) => item.id === selectedImageId
            );
        selectedCarCopy.after_renovation_photos.splice(
          afterRenovationIndex,
          1
        );
        setSelectedCar(selectedCarCopy);
        break;
      case "before-renovation":
        const beforeRenovationIndex =
            selectedCarCopy.after_renovation_photos.findIndex(
              (item) => item.id === selectedImageId
            );
        selectedCarCopy.before_renovation_photos.splice(
          beforeRenovationIndex,
          1
        );
        setSelectedCar(selectedCarCopy);
        break;
      }

      toast.success("Photo Deleted Successfully");
    }
  }, [isDeleteCarPhotoSuccess]);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      dispatch(getMarksRequest());
      dispatch(getModelsRequest());
      dispatch(getModelsRequest());
      dispatch(getEnginesRequest());
      dispatch(getTransmissionsRequest());
      dispatch(getFuelTypesRequest());
      dispatch(getDriveTypesRequest());
      dispatch(getTransportTypesRequest());
      dispatch(getBodyStylesRequest());
      dispatch(getYearsRequest());
      dispatch(getInteriorColorsRequest());
      dispatch(getExteriorColorsRequest());
      dispatch(getStickersRequest());
      dispatch(getSeatsRequest());
    }
  }, [id]);

  function loadOptions(type) {
    if (!id) {
      switch (type) {
      case "marks":
        dispatch(getMarksRequest());
        break;
      case "models":
        dispatch(getModelsRequest());
        break;
      case "engines":
        dispatch(getEnginesRequest());
        break;
      case "transmission":
        dispatch(getTransmissionsRequest());
        break;
      case "fuel-types":
        dispatch(getFuelTypesRequest());
        break;
      case "drive-types":
        dispatch(getDriveTypesRequest());
        break;
      case "transport-types":
        dispatch(getTransportTypesRequest());
        break;
      case "body-styles":
        dispatch(getBodyStylesRequest());
        break;
      case "years":
        dispatch(getYearsRequest());
        break;
      case "interior-colors":
        dispatch(getInteriorColorsRequest());
        break;
      case "exterior-colors":
        dispatch(getExteriorColorsRequest());
        break;
      case "stickers":
        dispatch(getStickersRequest());
        break;
      case "seats":
        dispatch(getSeatsRequest());
        break;
      }
    }
  }

  const handleChangeMark = (option) => {
    if (option) {
      setSelectedMark(option);
      setSelectedModel(null);
      handleChange("car_mark_id", option.value);
    }
  };

  const handleChange = (name, value) => {
    setCarData((prevCarData) => ({
      ...prevCarData,
      [name]: value,
    }));
  };

  const deleteCarPhoto = (id, name) => {
    setSelectedImageId(id);
    setSelectedImageType(name);
    dispatch(deleteCarPhotoRequest({ id, name }));
  };

  function handleDragEnd(event, type = "general_photos") {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setSelectedCar((prevSelectedCar) => {
        const oldIndex = prevSelectedCar[type]?.findIndex(
          (photo) => photo.id === active.id
        );
        const newIndex = prevSelectedCar[type]?.findIndex(
          (photo) => photo.id === over.id
        );
        const newItemsArray = arrayMove(
          prevSelectedCar[type],
          oldIndex,
          newIndex
        );
        return { ...prevSelectedCar, [type]: newItemsArray };
      });
    }
  }

  const handleCreate = (inputValue, isModel = false) => {
    const marksClone = [...marks];
    const modelsClone = [...models];

    if (
      marksClone.findIndex(
        (mark) => mark.name.toLowerCase() === inputValue.toLowerCase()
      ) === -1 &&
      !isModel
    ) {
      setSelectedModel(null);
      setSelectedMark(null);
      dispatch(
        createMarkRequest({
          name: inputValue,
        })
      );
    } else if (
      modelsClone.findIndex(
        (model) => model.name.toLowerCase() === inputValue.toLowerCase()
      ) === -1
    ) {
      setSelectedModel(null);
      dispatch(
        createModelRequest({
          name: inputValue,
          car_mark_id: selectedMark.value,
        })
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Marks">Marks</label>
            <CreatableSelect
              name="car_mark_id"
              onMenuOpen={() => loadOptions("marks")}
              onChange={handleChangeMark}
              onCreateOption={handleCreate}
              options={marksOptions}
              value={selectedMark}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Models">Models</label>
            <CreatableSelect
              name="car_model_id"
              onMenuOpen={() => loadOptions("models")}
              onChange={(option) => {
                setSelectedModel(option);
                handleChange("car_model_id", option.value);
              }}
              onCreateOption={(e) => handleCreate(e, true)}
              key={modelsOptions.length}
              options={modelsOptions}
              value={selectedModel}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Engines">Engines</label>
            <Select
              name="car_engine_id"
              options={enginesOptions}
              onMenuOpen={() => loadOptions("engines")}
              onChange={(option) => handleChange("car_engine_id", option.value)}
              defaultValue={enginesOptions.filter(
                (option) => option.value === car?.engine?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Transmission">Transmission</label>
            <Select
              name="car_transmission_id"
              options={transmissionOptions}
              onMenuOpen={() => loadOptions("transmission")}
              onChange={(option) =>
                handleChange("car_transmission_id", option.value)
              }
              defaultValue={transmissionOptions.filter(
                (option) => option.value === car?.transmission?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="fuel-types">Fuel Types</label>
            <Select
              name="car_fuel_type_id"
              options={fuelTypesOptions}
              onMenuOpen={() => loadOptions("fuel-types")}
              onChange={(option) =>
                handleChange("car_fuel_type_id", option.value)
              }
              defaultValue={fuelTypesOptions.filter(
                (option) => option.value === car?.fuelType?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="drive-types">Drive Types</label>
            <Select
              name="car_drive_type_id"
              options={driveTypesOptions}
              onMenuOpen={() => loadOptions("drive-types")}
              onChange={(option) =>
                handleChange("car_drive_type_id", option.value)
              }
              defaultValue={driveTypesOptions.filter(
                (option) => option.value === car?.driveType?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="transport-types">Transport Types</label>
            <Select
              name="car_type_id"
              options={transportTypesOptions}
              onMenuOpen={() => loadOptions("transport-types")}
              onChange={(option) => {
                handleChange("car_type_id", option.value);
              }}
              defaultValue={transportTypesOptions.filter(
                (option) => option.value === car?.type?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="body-styles">Body Styles</label>
            <Select
              name="car_body_style_id"
              options={bodyStylesOptions}
              onMenuOpen={() => loadOptions("body-styles")}
              onChange={(option) => {
                handleChange("car_body_style_id", option.value);
              }}
              defaultValue={bodyStylesOptions.filter(
                (option) => option.value === car?.bodyStyle?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Years">Years</label>
            <Select
              name="car_year_id"
              options={yearsOptions}
              onMenuOpen={() => loadOptions("years")}
              onChange={(option) => {
                handleChange("car_year_id", option.value);
              }}
              defaultValue={yearsOptions.filter(
                (option) => option.value === car?.year?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Interior colors">Interior Colors</label>
            <Select
              name="car_interior_color_id"
              options={interiorColorsOptions}
              onMenuOpen={() => loadOptions("interior-colors")}
              onChange={(option) => {
                handleChange("car_interior_color_id", option.value);
              }}
              defaultValue={interiorColorsOptions.filter(
                (option) => option.value === car?.interiorColor?.id
              )}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Exterior colors">Exterior Colors</label>
            <Select
              name="car_exterior_color_id"
              options={exteriorColorsOptions}
              onMenuOpen={() => loadOptions("exterior-colors")}
              onChange={(option) => {
                handleChange("car_exterior_color_id", option.value);
              }}
              defaultValue={exteriorColorsOptions.filter(
                (option) => option.value === car?.exteriorColor?.id
              )}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Stickers">Stickers</label>
            <Select
              name="car_sticker_id"
              options={stickersOptions}
              onMenuOpen={() => loadOptions("stickers")}
              onChange={(option) => {
                handleChange("car_sticker_id", option.value);
              }}
              defaultValue={stickersOptions.filter(
                (option) => option.value === car?.sticker?.id
              )}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Seats">Seats</label>
            <Select
              name="car_seat_id"
              options={seatsOptions}
              onMenuOpen={() => loadOptions("seats")}
              onChange={(option) => {
                handleChange("car_seat_id", option.value);
              }}
              defaultValue={seatsOptions.filter(
                (option) => option.value == car?.seat?.id
              )}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Vin">Vin</label>
            <input
              type="text"
              className="form-control"
              name="vin"
              defaultValue={id ? car?.vin : ""}
              onChange={(option) => {
                handleChange("vin", option.target.value);
              }}
              key={car?.vin}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Video">Video</label>
            <input
              type="text"
              className="form-control"
              name="video"
              defaultValue={id ? car?.video : ""}
              onChange={(option) => {
                handleChange("video", option.target.value);
              }}
              key={car?.video}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="City">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              defaultValue={id ? car?.city : ""}
              onChange={(option) => {
                handleChange("city", option.target.value);
              }}
              key={car?.city}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              defaultValue={id ? car?.description : ""}
              onChange={(option) => {
                handleChange("description", option.target.value);
              }}
              key={car?.description}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              defaultValue={id ? car?.price : ""}
              onChange={(option) => {
                handleChange("price", option.target.value);
              }}
              key={car?.price}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Hwy">Hwy</label>
            <input
              type="number"
              className="form-control"
              name="hwy"
              defaultValue={id ? car?.hwy : ""}
              onChange={(option) => {
                handleChange("hwy", option.target.value);
              }}
              key={car?.hwy}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <label htmlFor="Status">Status</label>
            <Select
              name="status"
              options={[
                {
                  label: "Наличии",
                  value: "Наличии",
                },
                {
                  label: "Под заказ",
                  value: "Под заказ",
                },
              ]}
              onChange={(option) => {
                handleChange("status", option.value);
              }}
              defaultValue={[
                {
                  label: "Наличии",
                  value: "Наличии",
                },
                {
                  label: "Под заказ",
                  value: "Под заказ",
                },
              ].filter((option) => option.value === car?.status)}
            />
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="Show on page">Show on page</label>
            <div className="custom-control custom-switch float-right align-middle">
              <input
                type="checkbox"
                className="custom-control-input w-100 z-index-100"
                name="show_on_page"
                defaultChecked={id ? car?.show_on_page : ""}
                key={car?.show_on_page}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor="show_on_page"
                className="custom-control-label"
              ></label>
            </div>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="General Photos">General Photos</label>
            <input
              type="file"
              className="form-control"
              name="general_photos[]"
              onChange={(option) => {
                handleChange("general_photos", option.target.files);
              }}
              multiple
            />
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={
                  Object.keys(selectedCar)?.length > 0
                    ? selectedCar?.general_photos?.map((photo) => photo.id)
                    : []
                }
                strategy={verticalListSortingStrategy}
              >
                {Object.keys(selectedCar)?.length > 0 ? (
                  <div className="row mt-4">
                    {selectedCar?.general_photos?.map((item) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        item={item}
                        deleteCarPhoto={deleteCarPhoto}
                        name="general"
                      />
                    ))}
                  </div>
                ) : null}
              </SortableContext>
            </DndContext>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="After Renovation Photos">
              After Renovation Photos
            </label>
            <input
              type="file"
              className="form-control"
              name="after_renovation_photos[]"
              onChange={(option) => {
                handleChange("after_renovation_photos", option.target.files);
              }}
              multiple
            />

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(e) => handleDragEnd(e, "after_renovation_photos")}
            >
              <SortableContext
                items={
                  Object.keys(selectedCar)?.length > 0
                    ? selectedCar?.after_renovation_photos?.map(
                      (photo) => photo.id
                    )
                    : []
                }
                strategy={verticalListSortingStrategy}
              >
                {Object.keys(selectedCar)?.length > 0 ? (
                  <div className="row mt-4">
                    {selectedCar?.after_renovation_photos?.map((item) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        item={item}
                        deleteCarPhoto={deleteCarPhoto}
                        name="after-renovation"
                      />
                    ))}
                  </div>
                ) : null}
              </SortableContext>
            </DndContext>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="Before Renovation Photos">
              Before Renovation Photos
            </label>
            <input
              type="file"
              className="form-control"
              name="before_renovation_photos[]"
              onChange={(option) => {
                handleChange("before_renovation_photos", option.target.files);
              }}
              multiple
            />
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(e) => handleDragEnd(e, "before_renovation_photos")}
            >
              <SortableContext
                items={
                  Object.keys(selectedCar)?.length > 0
                    ? selectedCar?.before_renovation_photos?.map(
                      (photo) => photo.id
                    )
                    : []
                }
                strategy={verticalListSortingStrategy}
              >
                {Object.keys(selectedCar)?.length > 0 ? (
                  <div className="row mt-4">
                    {selectedCar?.before_renovation_photos?.map((item) => (
                      <SortableItem
                        key={item.id}
                        id={item.id}
                        item={item}
                        deleteCarPhoto={deleteCarPhoto}
                        name="before-renovation"
                      />
                    ))}
                  </div>
                ) : null}
              </SortableContext>
            </DndContext>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="View 360">Просмотр 360</label>
            <input
              type="file"
              className="form-control"
              name="view_360"
              onChange={(option) => {
                handleChange("view_360", option.target.files);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
});

CarContent.propTypes = {
  car: PropTypes.object,
};

export default CarContent;
