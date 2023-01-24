import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Instamart from "./components/Instamart";
import Error from "./components/Error";

// const heading1 = React.createElement("h1", { id: "title1" }, "Namaste One !");
// const heading2 = React.createElement("h2", { id: "title2" }, "Namaste Two !");
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
