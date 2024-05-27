import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/Eventos";
import Professores from "./pages/professores";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/eventos",
    element: <Eventos/>,
  },
  {
    path: "/professores",
    element: <Professores/>,
  },
]);
