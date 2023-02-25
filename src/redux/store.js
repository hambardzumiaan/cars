import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
      sagaMiddleware,
    ];
  },
});

sagaMiddleware.run(rootSaga);

export { store };
