import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Varma",
    role: "Proprietor, Grand Supermarket, Palakkad",
    quote: "The shelf life and freshness of Pavithram Milk are unparalleled. Our customers specifically ask for it every morning. The quality is simply consistent.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Meera Menon",
    role: "Health & Nutrition Expert",
    quote: "I always recommend Pavithram to my clients. It's rare to find dairy products that maintain such traditional purity without any artificial additives.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Deepak S.",
    role: "Cloud Kitchen Owner, Kochi",
    quote: "The consistency of Pavithram Ghee is fantastic for our professional kitchen. The aroma and purity take our traditional dishes to another level.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Voices of Trust
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary"
            >
              Loved by Families, <br />
              <span className="text-secondary italic">Trusted by Experts</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-10 flex flex-col justify-between border-slate-100 hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative group"
            >
              <Quote className="absolute top-8 right-8 text-primary/5 w-20 h-20 group-hover:text-primary/10 transition-colors duration-500" />

              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-primary/80 font-medium italic text-lg leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-lg">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider">{t.role}</p>
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
