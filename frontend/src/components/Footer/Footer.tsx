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
    <div className="border border-t">
      <div className="container mx-auto max-w-6xl px-2 xl:px-0 grid md:grid-cols-6 gap-6 py-8">
        <div className="col-span-3 flex flex-col gap-2">
          <Logo />
          <section className="text-muted-foreground text-sm font-inter flex flex-col gap-1">
            <p className="">
              Welcome to our online store, your one-stop destination for a wide
              range of products from the latest fashion and tech gadgets to
              home essentials and lifestyle accessories.
            </p>
            <p className="">
              We aim to make your shopping experience smooth and enjoyable by
              offering competitive prices, fast delivery, and top-notch customer
              service.
            </p>
          </section>
          <IconTile />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-playfair font-semibold text-primary/80">
            Quick Links
          </h2>
          <section className="flex flex-col gap-1">
            {quickLinksData.map((el: quickLinksDataTypes) => (
              <NavLink
                to={el.path}
                key={el.name}
                className="text-[14px] text-muted-foreground hover:text-figmaPrimary hover:font-semibold transition-all ease-in-out duration-300 hover:underline underline-offset-2 decoration-figmaPrimary"
              >
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
    </div>
  );
};

export default Footer;
