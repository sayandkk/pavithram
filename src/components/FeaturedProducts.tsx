import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ChevronRight } from "lucide-react";

const featured = products.slice(0, 4);

const FeaturedProducts = () => {
  return (
    <section className="relative py-32 bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-6"
            >
              <span className="text-accent font-serif text-sm uppercase tracking-widest">
                Featured Selection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-foreground mb-2"
            >
              Premium Dairy <span className="text-accent">Delights</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#products"
            className="flex items-center text-accent hover:text-accent/80 font-light gap-2 transition-colors"
          >
            View All <ChevronRight size={20} />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-background border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden mb-6 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.category === "Milk"
                    ? "🥛"
                    : product.category === "Ghee"
                      ? "🧈"
                      : "🥣"}
                </span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-light px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {product.category}
                  </span>
                  <span className="text-[10px] text-foreground/60 font-light uppercase">
                    {product.packSizes.split(",")[0]}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-foreground/70 text-sm line-clamp-2 leading-relaxed mb-6 font-light">
                  {product.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full rounded-lg bg-accent/10 hover:bg-accent hover:text-primary text-accent border border-accent/30 hover:border-accent transition-all duration-300 py-3 font-light flex items-center justify-center gap-2"
                >
                  Enquire Now <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
