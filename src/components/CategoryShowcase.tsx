import { motion } from "framer-motion";
import { categories } from "@/data/products";

const CategoryShowcase = () => {
  return (
    <section id="products" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center text-5xl mb-4 shadow-md group-hover:border-secondary group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {cat.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm">{cat.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{cat.count} Products</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
