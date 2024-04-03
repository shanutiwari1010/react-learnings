import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { router } from "./App";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "inTheft",
//         element: <InTheft />,
//       },
//       {
//         path: "devices",
//         element: <Devices />,
//       },
//       {
//         path: "vehicles",
//         element: <Vehicles />,
//       },
//       {
//         path: "mycustomer",
//         element: <MyCustomer />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//     ],
//   },
// ]);
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
