import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/eventos";
import VidaNoCampus from "./pages/vidanocampus";
import Professores from "./pages/professores";
import GuiaParaIngressantes from "./pages/guiaparaingressantes";

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
  {
    path: "/guiaparaingressantes",
    element: <GuiaParaIngressantes/>,
  },
]);
