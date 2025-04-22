import { Outlet } from "react-router-dom";
import HeaderTop from "../Header/HeaderTop";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";
import { useState, useEffect } from "react";

const Layout = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 w-full z-50">
        <HeaderTop />
        <Navbar hasScrolled={hasScrolled} />
      </div>
      <main className="flex-1 mt-[104px]"> {/* Adjust based on HeaderTop + Navbar height */}
        <Outlet />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Layout;