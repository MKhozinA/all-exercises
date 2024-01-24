import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import NotFound from "./pages/errors/NotFound";
import Calculator from "./calculator";
import ColorBox from "./colorGradient";
import Game from "./tictactoe";
import Todo from "./todo";
import ContactPage from "./pages/ContactPage";
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "calculator",
        Component: Calculator,
      },
      {
        path: "colorgradient",
        Component: ColorBox,
      },
      {
        path: "tictactoe",
        Component: Game,
      },
      {
        path: "todo",
        Component: Todo,
      }
    ],
  },

  { path: "/404", Component: NotFound },
  { path: "*", Component: NotFound },
]);

export default router;
