import { Outlet } from "react-router-dom";
import HeaderTop from "../Header/HeaderTop";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Layout;
