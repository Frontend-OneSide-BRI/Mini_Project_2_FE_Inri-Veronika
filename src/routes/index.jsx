import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "../pages/Gallery";
import App from "../pages/App";

function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default index;
