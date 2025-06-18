import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home";
import Update from "../Components/Update";
import CardDetails from "../Components/CardDetails";
import AddCoffee from "../Components/AddCoffee";
import CoffeDetails from "../Components/CoffeDetails";
import ErrorPage from "../Components/Root/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },

      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: Update,
      },
      {
        path: "/card",
        Component: CardDetails,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),

        Component: CoffeDetails,
      },
    ],
  },
]);
