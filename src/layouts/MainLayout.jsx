import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/Nabvar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <CustomNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default MainLayout;
