import { motion } from "framer-motion";
import { categories } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

const CategoryShowcase = () => {
  return (
    <section id="products" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Categorized for Quality
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Explore Our Dairy Range
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From farm-fresh milk to traditional golden ghee, discover the full range of nutritious dairy essentials crafted with care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="glass-card p-10 h-full flex flex-col items-center justify-center text-center group-hover:bg-primary transition-all duration-500 overflow-hidden relative">
                {/* Decorative Background Icon/Image */}
                <div className="absolute top-[-20px] right-[-20px] text-9xl w-40 h-40 opacity-[0.05] group-hover:opacity-[0.15] group-hover:scale-150 transition-all duration-700 pointer-events-none overflow-hidden rounded-full">
                  {cat.image ? <img src={cat.image} alt="" className="w-full h-full object-cover grayscale" /> : cat.icon}
                </div>

                <div className="w-24 h-24 rounded-3xl bg-primary/5 flex items-center justify-center text-6xl mb-8 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 overflow-hidden shadow-inner">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    cat.icon
                  )}
                </div>

                <h3 className="font-display font-bold text-primary text-2xl mb-3 group-hover:text-white transition-colors">{cat.name}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold">
                  {cat.count} Nutritious Items
                </p>

                <div className="mt-8 flex items-center gap-2 text-secondary font-bold text-sm group-hover:text-white transition-colors">
                  View Collection <ArrowUpRight size={16} />
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
