import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";
import IconTile from "./IconTile";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { motion } from "motion/react";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-t"
    >
      <motion.div
        variants={containerVariants}
        className="container mx-auto max-w-6xl px-2 xl:px-0 grid md:grid-cols-6 gap-6 py-8"
      >
        {/* Company Info Section */}
        <motion.div
          variants={itemVariants}
          className="col-span-3 flex flex-col gap-2"
        >
          <motion.div variants={itemVariants}>
            <Logo />
          </motion.div>
          <motion.section
            variants={itemVariants}
            className="text-muted-foreground text-sm font-inter flex flex-col gap-1"
          >
            <motion.p variants={itemVariants}>
              Welcome to our online store, your one-stop destination for a wide
              range of products from the latest fashion and tech gadgets to home
              essentials and lifestyle accessories.
            </motion.p>
            <motion.p variants={itemVariants}>
              We aim to make your shopping experience smooth and enjoyable by
              offering competitive prices, fast delivery, and top-notch customer
              service.
            </motion.p>
          </motion.section>
          <motion.div variants={itemVariants}>
            <IconTile />
          </motion.div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-playfair font-semibold text-primary/80"
          >
            Quick Links
          </motion.h2>
          <motion.section
            variants={containerVariants}
            className="flex flex-col gap-1"
          >
            {quickLinksData.map((el: quickLinksDataTypes) => (
              <motion.div
                key={el.name}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={el.path}
                  className="text-[14px] text-muted-foreground hover:text-figmaPrimary hover:font-semibold transition-all ease-in-out duration-300 hover:underline underline-offset-2 decoration-figmaPrimary"
                >
                  {el.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.section>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 col-span-2 text-sm text-muted-foreground"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-playfair font-semibold text-primary/80"
          >
            Contact
          </motion.h2>
          <motion.section
            variants={containerVariants}
            className="flex flex-col gap-1"
          >
            {[
              { icon: <Mail />, text: "Email:", link: "mailto:test@gmail.com", value: "test@gmail.com" },
              { icon: <Phone />, text: "Phone:", value: "+977-9800000000" },
              { icon: <MapPinHouse />, text: "Address:", value: "New Amda, Damak" },
            ].map((item, index) => (
              <motion.h3
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-1"
              >
                {item.icon}
                {item.text}
                {item.link ? (
                  <a href={item.link} className="hover:text-figmaPrimary">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </motion.h3>
            ))}
          </motion.section>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;