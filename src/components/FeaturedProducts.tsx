import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const featured = products.slice(0, 4);

const categoryColors: Record<string, string> = {
  Snacks: "bg-secondary/20 text-earth",
  Flours: "bg-gold-light text-earth",
  Spices: "bg-spice/10 text-spice",
  Grains: "bg-primary/10 text-primary",
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Best Sellers</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Featured Products
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {product.category === "Snacks" ? "🍌" : product.category === "Flours" ? "🌾" : product.category === "Spices" ? "🌶️" : "🍚"}
                </span>
              </div>
              <div className="p-5">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[product.category] || "bg-muted text-muted-foreground"}`}>
                  {product.category}
                </span>
                <h3 className="font-display font-semibold text-foreground mt-3 text-lg">{product.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>
                <p className="text-xs text-muted-foreground mt-2">Pack: {product.packSizes}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Quick View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
