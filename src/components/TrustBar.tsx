import { ShieldCheck, Leaf, Package, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, text: "FSSAI Certified", sub: "Lic: 11324009000952" },
  { icon: Leaf, text: "100% Natural Ingredients" },
  { icon: Package, text: "Hygienically Packed" },
  { icon: MapPin, text: "Made in Kerala" },
];

const TrustBar = () => {
  return (
    <section className="bg-secondary/30 border-y border-accent/20 py-12 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <item.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-serif text-accent italic">
                  {item.text}
                </p>
                {item.sub && (
                  <p className="text-xs text-accent/70 mt-1">{item.sub}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
