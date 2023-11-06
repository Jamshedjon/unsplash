import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="container max-w-7xl py-9 flex flex-col gap-9 mx-auto">
      <Navbar />
      <main className="w-full h-full shrink-0 ">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
