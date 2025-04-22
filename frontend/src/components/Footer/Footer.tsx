import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";
import IconTile from "./IconTile";
import { Mail, MapPinHouse, Phone } from "lucide-react";

interface quickLinksDataTypes {
  name: string;
  path: string;
}

const quickLinksData: quickLinksDataTypes[] = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/" },
  { name: "Privacy Policy", path: "/privacypolicy" },
  { name: "Terms & Conditions", path: "/" },
];

const Footer = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 grid md:grid-cols-6 gap-6 py-8">
      <div className="col-span-3 flex flex-col gap-2">
        <Logo />
        <section className="text-muted-foreground text-sm font-inter flex flex-col gap-1">
          <p className="">
            We are an online bookstore that offers a wide selection of books in
            various genres, including fiction, non-fiction, biographies, and
            more.
          </p>
          <p className="">
            We provide a convenient and enjoyable shopping experience while
            offering competitive prices and excellent customer service.
          </p>
        </section>
        <IconTile />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-playfair font-semibold text-primary/80">
          Quick Links
        </h2>
        <section className="flex flex-col gap-1">
          {quickLinksData.map((el) => (
            <NavLink to={el.path} className="text-[14px] text-muted-foreground">
              {el.name}
            </NavLink>
          ))}
        </section>
      </div>
      <div className="flex flex-col gap-2 col-span-2 text-sm text-muted-foreground">
        <h2 className="text-3xl font-playfair font-semibold text-primary/80">
          Contact
        </h2>
        <section className="flex flex-col gap-1">
          <h3 className="flex items-center gap-1">
            <Mail />
            Email:
            <a href="mailto:test@gmail.com" className="">
               test@gmail.com
            </a>
          </h3>
          <h3 className="flex items-center gap-1">
            <Phone />
            Phone: +977-9800000000
          </h3>
          <h3 className="flex items-center gap-1">
            <MapPinHouse />
            Address: New Amda, Damak
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Footer;
