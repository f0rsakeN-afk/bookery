import { motion } from "motion/react";
import { AnimatedTestimonials } from "../ui/testimonial";
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
} from "@/utils/ImageExports";

interface testimonialTypes {
  name: string;
  designation: string;
  src: string;
  quote: string;
}

const testimonials: testimonialTypes[] = [
  {
    quote:
      "SnapKart has completely changed the way I shop online. The intuitive interface and lightning-fast checkout make the whole experience seamless and enjoyable.",
    name: "Sarah Chen",
    designation: "Verified Buyer",
    src: testimonial3,
  },
  {
    quote:
      "From order to delivery, SnapKart nails it. Their product range is vast, and my items arrived right on time in perfect condition. Highly recommended!",
    name: "Rakesh ray",
    designation: "Frequent Shopper",
    src: testimonial4,
  },
  {
    quote:
      "I love how easy it is to find deals on SnapKart. Their filtering and search tools are top-notch, and the checkout process is the fastest I’ve used.",
    name: "Emily Watson",
    designation: "Deal Hunter",
    src: testimonial2,
  },
  {
    quote:
      "What impressed me the most was SnapKart’s customer support. They were quick, friendly, and resolved my issue in no time. Great service goes a long way!",
    name: "f0rsakeN-afk",
    designation: "Happy Customer",
    src: testimonial5,
  },
  {
    quote:
      "SnapKart offers incredible variety and quality. From fashion to gadgets, everything I’ve ordered has met or exceeded my expectations.",
    name: "Naresh Rajbanshi",
    designation: "Loyal Customer",
    src: testimonial1,
  },
];

const Testimonial = () => {
  return (
    <section
      className="pt-16 px-4 md:px-8 lg:px-20 bg-muted/40 overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 font-playfair text-primary/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonial;
