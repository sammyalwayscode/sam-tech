import { Outlet } from "react-router-dom";
import Header from "../static/Header";

const MainPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainPageLayout;
