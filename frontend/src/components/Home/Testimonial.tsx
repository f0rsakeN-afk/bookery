import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface testimonialTypes {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: testimonialTypes[] = [
  {
    name: "Alice Johnson",
    role: "Verified Buyer",
    image: "https://i.pravatar.cc/150?img=1",
    quote:
      "Absolutely love the quality! Fast delivery and the product was exactly as described.",
  },
  {
    name: "Michael Lee",
    role: "Loyal Customer",
    image: "https://i.pravatar.cc/150?img=2",
    quote:
      "Customer support was excellent. I had an issue and they resolved it within a day!",
  },
  {
    name: "Sara Kim",
    role: "First-time Buyer",
    image: "https://i.pravatar.cc/150?img=3",
    quote:
      "Great experience overall! The UI is clean, and checkout was super easy.",
  },
];

const Testimonial = () => {
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-20 bg-muted/40"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 font-playfair text-primary/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={t.image} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-medium font-inter">{t.name}</p>
                      <p className="text-xs text-muted-foreground font-inter">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    “{t.quote}”
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
