import { Outlet } from "react-router-dom";

const DetailLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default DetailLayout;
