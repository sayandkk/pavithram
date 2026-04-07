import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import { ArrowRight, Sparkles } from "lucide-react";

const CategoryShowcase = () => {
  return (
    <section id="products" className="relative py-32 bg-background overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 rounded-full border border-accent/40 mb-8"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent font-serif text-sm uppercase tracking-widest">
              Our Collection
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-foreground mb-6 leading-tight"
          >
            Premium <span className="text-accent">Dairy Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 font-light"
          >
            Browse our handpicked range of authentic Kerala dairy products, from farm-fresh milk to premium ghee, each crafted with tradition.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const product = products.find(p => p.category === cat.name);
            const productUrl = product ? `/product/${product.id}` : "/products";

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                {/* Card Container */}
                <Link to={productUrl} className="block h-full">
                  <div className="relative h-full bg-white border border-accent/20 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-300 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Top Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      {/* Icon/Image Container */}
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-32 h-32 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl mb-8 shadow-md group-hover:shadow-lg transition-all duration-300 border border-accent/20 group-hover:border-accent/40"
                      >
                        {cat.image ? (
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover rounded-3xl"
                          />
                        ) : (
                          cat.icon
                        )}
                      </motion.div>

                      {/* Category Name */}
                      <h3 className="font-serif font-bold text-foreground text-3xl mb-3 group-hover:text-accent transition-colors duration-300">
                        {cat.name}
                      </h3>

                      {/* Product Count */}
                      <p className="text-foreground/60 font-light text-base mb-8">
                        <span className="font-semibold text-accent">{cat.count}</span> Premium Items Available
                      </p>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm font-light mb-8 leading-relaxed">
                        Discover our curated selection of authentic {cat.name.toLowerCase()} products, sourced directly from Kerala's finest dairy farms.
                      </p>

                      {/* CTA Link */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 group-hover:pr-6"
                      >
                        Explore Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Floating Accent Dots */}
                    <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-accent to-accent/70 hover:from-accent/90 hover:to-accent text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
          >
            View All Products
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
