import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./Store/MainStore.js";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
