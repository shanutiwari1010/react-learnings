// import Header from './components/Header/Header'
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  // RouterProvider
} from "react-router-dom";
import Home from "./components/Home/Home";
import InTheft from "./components/InTheft/InTheft";
import Devices from "./components/Devices/Devices";
import Vehicles from "./components/Vehicles/Vehicles";
import MyCustomer from "./components/MyCustomer/MyCustomer";
import Profile from "./components/Profile/Profile";
import Layout from "./Layout";
// import User from "./components/User/User";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="intheft" element={<InTheft />} />
      <Route path="devices" element={<Devices />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="mycustomer" element={<MyCustomer />} />
      <Route path="profile" element={<Profile />} />
      {/* <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route> */}
    </Route>
  )
);

function App() {
  return <>{<Home />}</>;
}
export default App;
