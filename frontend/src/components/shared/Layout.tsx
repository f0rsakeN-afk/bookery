import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "../Header/HeaderTop";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";

const Layout = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50">
        <HeaderTop />
        <Navbar hasScrolled={hasScrolled} />
      </header>
      <main className="flex-1 mt-[70px] md:mt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Layout;
