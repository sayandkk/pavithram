import { motion } from "framer-motion";
import { products } from "@/data/products";

import { ChevronRight } from "lucide-react";

const featured = products.slice(0, 4);

const categoryStyles: Record<string, { bg: string, text: string }> = {
  Milk: { bg: "bg-blue-50", text: "text-blue-600" },
  Ghee: { bg: "bg-orange-50", text: "text-orange-600" },
  Dairy: { bg: "bg-primary/5", text: "text-primary" },
};

const FeaturedProducts = () => {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Our Finest Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-primary"
            >
              Premium Dairy Delights
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#products" className="flex items-center text-secondary hover:text-secondary/80 font-bold gap-2 transition-colors">
              View All Products <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group glass-card p-4 hover:-translate-y-2"
            >
              {/* Image Container (Card-in-Card) */}
              <div className="relative aspect-square rounded-2xl bg-white overflow-hidden mb-6 shadow-inner flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-700 ease-out">
                  {product.category === "Milk" ? "🥛" : product.category === "Ghee" ? "🧈" : "🥣"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="px-2">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${categoryStyles[product.category]?.bg} ${categoryStyles[product.category]?.text}`}>
                    {product.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase">{product.packSizes.split(',')[0]}</span>
                </div>

                <h3 className="font-display font-bold text-primary text-xl mb-2 group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6 h-10">{product.description}</p>

                <div className="w-full rounded-2xl bg-primary/5 hover:bg-primary hover:text-white text-primary border border-primary/10 transition-all duration-300 h-12 font-bold flex items-center justify-center gap-2 cursor-pointer group-hover:border-transparent">
                  Enquire Now <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
