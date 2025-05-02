import { motion } from "motion/react";
import { policyContent, policyContentTypes } from "@/data/policyContent";

const PolicySection = ({ title, content }: policyContentTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="font-playfair text-lg font-semibold mb-3">{title}</h2>
      <div className="font-playfair text-normal text-primary/90 space-y-2">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </motion.div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 xl:py-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-playfair text-xl my-4 font-semibold mr-auto md:text-2xl">
          Privacy Policy for  <span className="text-yellow-500 font-bold">SnapKart</span>
        </h1>
      </motion.div>

      <div className="space-y-4">
        {policyContent.map((section: policyContentTypes, index: number) => (
          <PolicySection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>

      {/*  <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 p-4 bg-primary/5 rounded-lg"
      >
        <p className="text-sm text-primary/70 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </motion.div> */}
    </div>
  );
};

export default PrivacyPolicy;
