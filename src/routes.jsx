import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/Eventos";
import VidaNoCampus from "./pages/vidanocampus";
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
    path: '/vidanocampus',
    element: <VidaNoCampus/>
  },
  {
    path: "/professores",
    element: <Professores/>,
  },
]);
