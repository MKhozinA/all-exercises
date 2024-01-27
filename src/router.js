import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import ContactPage from "./pages/ContactPage";
import App from './App'
import AboutPage from "./pages/AboutPage";
import CalculatorPage from "./pages/CalculatorPage";
import ColorGradientPage from "./pages/ColorGradientPage";
import TicTacToePage from "./pages/TicTacToePage";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "calculator",
        Component: CalculatorPage,
      },
      {
        path: "colorgradient",
        Component: ColorGradientPage,
      },
      {
        path: "tictactoe",
        Component: TicTacToePage,
      },
      {
        path: "todo",
        Component: TodoPage,
      },
      {
        path: "quiz",
        Component: QuizPage,
      }
    ],
  },

  { path: "/404", Component: NotFound },
  { path: "*", Component: NotFound },
]);

export default router;
