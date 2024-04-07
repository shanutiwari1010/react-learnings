import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
