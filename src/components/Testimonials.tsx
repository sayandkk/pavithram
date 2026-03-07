import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Grocery Store Owner, Thrissur",
    quote: "Pavithram products fly off the shelves. Customers specifically ask for their banana chips and sambar powder. The quality is always consistent.",
  },
  {
    name: "Lakshmi Nair",
    role: "Homemaker, Kochi",
    quote: "Finally, packaged food that tastes like home. The roasted rice powder makes the best puttu — exactly like my grandmother used to make.",
  },
  {
    name: "Anoop Menon",
    role: "Supermarket Chain Manager, Calicut",
    quote: "We've been stocking Pavithram for 3 years. Their delivery is always on time, packaging is professional, and customer complaints are near zero.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What People Say About Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
