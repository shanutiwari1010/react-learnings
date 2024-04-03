import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
// import Home from "./components/Home/Home";
import InTheft from "./components/InTheft/InTheft";
import Devices from "./components/Devices/Devices";
import Vehicles from "./components/Vehicles/Vehicles";
import MyCustomer from "./components/MyCustomer/MyCustomer";
import Profile from "./components/Profile/Profile";
import User from "./components/User/User";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="intheft" element={<InTheft />} />
      <Route path="devices" element={<Devices />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="mycustomer" element={<MyCustomer />} />
      <Route path="profile" element={<Profile />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
