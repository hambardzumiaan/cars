import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Models from "../components/models";
import UpdateFuelType from "../components/fuel-types/UpdateFuelType";
import CreateFuelType from "../components/fuel-types/CreateFuelType";
import UpdateModel from "../components/models/UpdateModel";
import CreateModel from "../components/models/CreateModel";
import Marks from "../components/marks";
import FuelTypes from "../components/fuel-types";
import CreateMark from "../components/marks/CreateMark";
import UpdateMark from "../components/marks/UpdateMark";
import BodyStyles from "../components/body-styles";
import CreateBodyStyle from "../components/body-styles/CreateBodyStyle";
import UpdateBodyStyle from "../components/body-styles/UpdateBodyStyle";
import InteriorColors from "../components/interior-colors";
import CreateInteriorColor from "../components/interior-colors/CreateInteriorColor";
import UpdateInteriorColor from "../components/interior-colors/UpdateInteriorColor";
import CreateExteriorColor from "../components/exterior-colors/CreateExteriorColor";
import UpdateExteriorColor from "../components/exterior-colors/UpdateExteriorColor";
import ExteriorColors from "../components/exterior-colors";
import Locations from "../components/locations";
import CreateLocation from "../components/locations/CreateLocation";
import UpdateLocation from "../components/locations/UpdateLocation";
import TransportTypes from "../components/transport-types";
import CreateTransportType from "../components/transport-types/CreateTransportType";
import UpdateTransportType from "../components/transport-types/UpdateTransportType";
import Transmissions from "../components/transmissions";
import CreateTransmission from "../components/transmissions/CreateTransmission";
import UpdateTransmission from "../components/transmissions/UpdateTransportType";
import DriveTypes from "../components/drive-types";
import CreateDriveType from "../components/drive-types/CreateDriveType";
import UpdateDriveType from "../components/drive-types/UpdateDriveType";
import Engines from "../components/engines";
import CreateEngine from "../components/engines/CreateEngine";
import UpdateEngine from "../components/engines/UpdateEngine";
import Years from "../components/years";
import CreateYear from "../components/years/CreateYear";
import UpdateYear from "../components/years/UpdateYear";
import Seats from "../components/seats";
import CreateSeat from "../components/seats/CreateSeat";
import UpdateSeat from "../components/seats/UpdateSeat";
import Stickers from "../components/stickers";
import CreateSticker from "../components/stickers/CreateSticker";
import UpdateSticker from "../components/stickers/UpdateSticker";

export const privateRoutes = [
  {
    id: 2,
    path: "/models",
    element: (
      <MainLayout>
        <Models />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 3,
    path: "/model",
    element: (
      <MainLayout>
        <CreateModel />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 4,
    path: "/models/:id",
    element: (
      <MainLayout>
        <UpdateModel />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 5,
    path: "/marks",
    element: (
      <MainLayout>
        <Marks />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 6,
    path: "/mark",
    element: (
      <MainLayout>
        <CreateMark />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 7,
    path: "/marks/:id",
    element: (
      <MainLayout>
        <UpdateMark />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 8,
    path: "/fuel-types",
    element: (
      <MainLayout>
        <FuelTypes />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 9,
    path: "/fuel-type",
    element: (
      <MainLayout>
        <CreateFuelType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 10,
    path: "/fuel-types/:id",
    element: (
      <MainLayout>
        <UpdateFuelType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 11,
    path: "/body-styles",
    element: (
      <MainLayout>
        <BodyStyles />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 12,
    path: "/body-style",
    element: (
      <MainLayout>
        <CreateBodyStyle />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 13,
    path: "/body-styles/:id",
    element: (
      <MainLayout>
        <UpdateBodyStyle />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 14,
    path: "/interior-colors",
    element: (
      <MainLayout>
        <InteriorColors />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 15,
    path: "/interior-color",
    element: (
      <MainLayout>
        <CreateInteriorColor />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 16,
    path: "/interior-colors/:id",
    element: (
      <MainLayout>
        <UpdateInteriorColor />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 17,
    path: "/exterior-colors",
    element: (
      <MainLayout>
        <ExteriorColors />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 18,
    path: "/exterior-color",
    element: (
      <MainLayout>
        <CreateExteriorColor />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 19,
    path: "/exterior-colors/:id",
    element: (
      <MainLayout>
        <UpdateExteriorColor />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 20,
    path: "/locations",
    element: (
      <MainLayout>
        <Locations />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 21,
    path: "/location",
    element: (
      <MainLayout>
        <CreateLocation />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 22,
    path: "/locations/:id",
    element: (
      <MainLayout>
        <UpdateLocation />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 23,
    path: "/transport-types",
    element: (
      <MainLayout>
        <TransportTypes />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 24,
    path: "/transport-type",
    element: (
      <MainLayout>
        <CreateTransportType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 25,
    path: "/transport-types/:id",
    element: (
      <MainLayout>
        <UpdateTransportType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 26,
    path: "/transmissions",
    element: (
      <MainLayout>
        <Transmissions />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 27,
    path: "/transmission",
    element: (
      <MainLayout>
        <CreateTransmission />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 28,
    path: "/transmissions/:id",
    element: (
      <MainLayout>
        <UpdateTransmission />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 29,
    path: "/drive-types",
    element: (
      <MainLayout>
        <DriveTypes />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 30,
    path: "/drive-type",
    element: (
      <MainLayout>
        <CreateDriveType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 31,
    path: "/drive-types/:id",
    element: (
      <MainLayout>
        <UpdateDriveType />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 32,
    path: "/engines",
    element: (
      <MainLayout>
        <Engines />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 33,
    path: "/engine",
    element: (
      <MainLayout>
        <CreateEngine />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 34,
    path: "/engines/:id",
    element: (
      <MainLayout>
        <UpdateEngine />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 35,
    path: "/years",
    element: (
      <MainLayout>
        <Years />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 36,
    path: "/year",
    element: (
      <MainLayout>
        <CreateYear />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 37,
    path: "/years/:id",
    element: (
      <MainLayout>
        <UpdateYear />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 38,
    path: "/seats",
    element: (
      <MainLayout>
        <Seats />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 39,
    path: "/seat",
    element: (
      <MainLayout>
        <CreateSeat />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 40,
    path: "/seats/:id",
    element: (
      <MainLayout>
        <UpdateSeat />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 41,
    path: "/stickers",
    element: (
      <MainLayout>
        <Stickers />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 42,
    path: "/sticker",
    element: (
      <MainLayout>
        <CreateSticker />
      </MainLayout>
    ),
    exact: true,
  },
  {
    id: 43,
    path: "/stickers/:id",
    element: (
      <MainLayout>
        <UpdateSticker />
      </MainLayout>
    ),
    exact: true,
  },
];
