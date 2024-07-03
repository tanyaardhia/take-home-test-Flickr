import { createBrowserRouter } from "react-router-dom";
import Home from "./Views/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/>,
  }
]);
