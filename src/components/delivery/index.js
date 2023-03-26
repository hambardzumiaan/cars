import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContext } from "../../context/contexts";
import usePrevious from "../../utility/hooks/usePrevious";
import { getDeliveryCalculateRequest } from "../../redux/delivery/actions";

const Delivery = () => {
  const { setIsLoading } = useContext(MainContext);
  const refFrom = useRef();
  const refTo = useRef();
  const dispatch = useDispatch();
  const {
    calculatedDelivery,
    isGetDeliveryCalculateSuccess,
    isGetDeliveryCalculateError,
  } = useSelector((state) => state.delivery);

  const prevIsGetDeliveryCalculateSuccess = usePrevious(
    isGetDeliveryCalculateSuccess
  );
  const prevIsGetDeliveryCalculateError = usePrevious(
    isGetDeliveryCalculateError
  );

  const [map, setMap] = useState(null);
  const [result, setResult] = useState({});
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  const myLatLng = { lat: 38.346, lng: -0.4907 };
  const mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  useEffect(() => {
    setIsLoading(false);
    document.title = "Delivery";
  }, []);

  useEffect(() => {
    if (
      (isGetDeliveryCalculateSuccess &&
        prevIsGetDeliveryCalculateSuccess === false) ||
      (isGetDeliveryCalculateError && prevIsGetDeliveryCalculateError === false)
    ) {
      setIsLoading(false);
    }
  }, [isGetDeliveryCalculateSuccess, isGetDeliveryCalculateError]);

  useEffect(() => {
    const googleMap = new google.maps.Map(
      document.getElementById("googleMap"),
      mapOptions
    );
    new google.maps.places.Autocomplete(document.getElementById("from"), {
      types: ["(cities)"],
      componentRestrictions: { country: "us" },
    });
    new google.maps.places.Autocomplete(document.getElementById("to"), {
      types: ["(cities)"],
      componentRestrictions: { country: "us" },
    });

    setMap(googleMap);
  }, [document.getElementById("googleMap")]);

  function calcRoute() {
    setIsLoading(true);
    var request = {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    };

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        setResult({
          distance: result.routes[0].legs[0].distance,
          duration: result.routes[0].legs[0].duration.text,
        });
        dispatch(
          getDeliveryCalculateRequest({
            mile: result.routes[0].legs[0].distance.text
              .replace("mi", "")
              .replace(" ", "")
              .replace(",", ""),
          })
        );
        directionsDisplay.setDirections(result);
      } else {
        setIsLoading(false);
        directionsDisplay.setDirections({ routes: [] });
        map.setCenter(myLatLng);
        setResult({
          error: true,
        });
      }
    });
  }

  return (
    <>
      <div className="container">
        <h2>Calculate the distance between two places.</h2>
        <div className="row">
          <form className="col-10 form-horizontal row">
            <div className="form-group col-6">
              <label htmlFor="from"></label>
              <input
                ref={refFrom}
                type="text"
                id="from"
                placeholder="From"
                className="form-control"
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="to"></label>
              <input
                ref={refTo}
                type="text"
                id="to"
                placeholder="To"
                className="form-control"
              />
            </div>
          </form>
          <div className="align-self-center col-2 mb-0">
            <button className="btn btn-info" onClick={calcRoute}>
              Calculate
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="mb-3">
          {result.distance &&
          calculatedDelivery &&
          isGetDeliveryCalculateSuccess ? (
              <>
                <div className="alert-info align-items-center p-4 row">
                  <div className="col-6">
                    <h5>
                    From: {refFrom.current.value}
                      <br />
                    To: {refTo.current.value}
                      <br />
                    Driving distance: {result.distance.text}
                      <br />
                    Duration: {result.duration}
                    </h5>
                  </div>
                  <div className="border border-dark col-6">
                    <h5 className="mt-2">Results</h5>
                    <p>Trip distance: {result.distance.text}</p>
                    <p>Price per mile: ${calculatedDelivery.mile_price}</p>
                    <p>Services: ${calculatedDelivery.services_price}</p>
                    <p>
                    Additional Expenses: ${" "}
                      {calculatedDelivery.additional_expenses}
                    </p>
                    <p className="mt-5">
                    Total: $ {calculatedDelivery?.total?.toFixed(2)}
                    </p>
                  </div>
                </div>
              </>
            ) : result.error ? (
              <h5 className="alert-danger col-auto">
              Could not retrieve driving distance.
              </h5>
            ) : null}
        </div>
        <div
          id="googleMap"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "500px",
          }}
        ></div>
      </div>
    </>
  );
};

export default Delivery;
