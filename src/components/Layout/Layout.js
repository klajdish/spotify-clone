import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="container-fluid mx-auto h-screen">
        <div className="grid grid-cols-9 gap-1 p-1">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-auto">
            next part
          </div>
        </div>
      </div>

      {/* <Outlet /> */}
    </>
  )
};

export default Layout;