import { motion } from "framer-motion";
import { categories } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

const CategoryShowcase = () => {
  return (
    <section id="products" className="relative py-32 bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-8"
          >
            <span className="text-accent font-serif text-sm uppercase tracking-widest">Our Collection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-foreground mb-6 leading-tight\"
          >
            Explore Premium <span className="text-accent">Dairy Range</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 font-light\"
          >
            From farm-fresh A2 milk to traditional golden ghee, discover premium dairy crafted with heritage care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-primary/80 border border-accent/20 rounded-xl p-10 h-full flex flex-col items-center justify-center text-center hover:border-accent/40 hover:bg-primary/90 transition-all duration-300 overflow-hidden">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    cat.icon
                  )}
                </div>

                <h3 className="font-serif font-bold text-white text-2xl mb-3 group-hover:text-accent transition-colors">{cat.name}</h3>
                <p className="text-white/70 font-light text-sm mb-6">
                  {cat.count} Premium Items
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent font-light text-sm group-hover:bg-accent/20 group-hover:border-accent/50 transition-all">
                  Discover <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
