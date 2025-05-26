import { motion } from "motion/react";
import { RefreshCcw, Truck, Phone, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface infoItemsProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgLight: string;
  bgDark: string;
}

const infoItems: infoItemsProps[] = [
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Return within 7 days. Hassle-free experience.",
    bgLight: "bg-gradient-to-br from-beige-100 to-stone-100",
    bgDark: "dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900",
  },
  {
    icon: Truck,
    title: "Standard Delivery",
    description: "Delivered within 3–5 business days nationwide.",
    bgLight: "bg-gradient-to-br from-lime-50 to-green-50",
    bgDark: "dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "We’re here whenever you need assistance.",
    bgLight: "bg-gradient-to-br from-blue-50 to-sky-50",
    bgDark: "dark:bg-gradient-to-br dark:from-stone-800 dark:to-stone-900",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ProductExtraInfo = () => {
  return (
    <section className="mt-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Why Shop With Us?
        </h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Trusted experience, fast delivery, and support at your fingertips.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {infoItems.map((info, idx) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
            >
              <Card
                className={`h-full rounded-xl border border-border/20 shadow-sm transition-transform ${info.bgLight} ${info.bgDark}`}
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm shadow-sm">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary/90 dark:text-primary">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProductExtraInfo;
