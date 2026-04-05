import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Varma",
    role: "Proprietor, Grand Supermarket, Palakkad",
    quote:
      "The shelf life and freshness of Pavithram Milk are unparalleled. Our customers specifically ask for it every morning. The quality is simply consistent.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Meera Menon",
    role: "Health & Nutrition Expert",
    quote:
      "I always recommend Pavithram to my clients. It's rare to find dairy products that maintain such traditional purity without any artificial additives.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Deepak S.",
    role: "Cloud Kitchen Owner, Kochi",
    quote:
      "The consistency of Pavithram Ghee is fantastic for our professional kitchen. The aroma and purity take our traditional dishes to another level.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-secondary/15 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-light tracking-widest uppercase mb-8 rounded-full"
          >
            Trusted by Thousands
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-foreground mb-6"
          >
            Stories of <span className="text-accent">Trust & Quality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto font-light"
          >
            From families to experts, hear why Pavithram is the choice for
            premium dairy
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-background border border-accent/20 p-10 rounded-xl hover:border-accent/40 hover:bg-secondary/10 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 text-accent/10 w-16 h-16 group-hover:text-accent/20 transition-colors duration-300" />

              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 font-light italic text-lg leading-relaxed mb-8 relative z-10">
                  " {t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border-2 border-accent/30 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-foreground/70 text-xs font-light uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
