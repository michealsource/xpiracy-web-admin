import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { Provider as ReduxProvider, useDispatch } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <RouterProvider router={router} />
          <ToastContainer />
        </MantineProvider>
      </PersistGate>
      </ReduxProvider>
  </React.StrictMode>
);
