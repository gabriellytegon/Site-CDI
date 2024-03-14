import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
