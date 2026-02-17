import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppLight from "./AppLight";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/light",
    element: <AppLight />,
  },
]);
