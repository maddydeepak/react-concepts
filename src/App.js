import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
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
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
