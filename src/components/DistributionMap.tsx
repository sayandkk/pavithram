import { motion } from "framer-motion";
import keralaMap from "@/assets/kerala-map.png";

const DistributionMap = () => {
  return (
    <section id="distribution" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Our Reach</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Serving the 14 Districts of Kerala
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the gateway of Kerala in Palakkad to the capital city Trivandrum, Pavithram products reach
              every corner of God's Own Country through our robust distribution network.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Palakkad", "Kochi", "Calicut", "Trivandrum", "Thrissur", "Malappuram", "Kannur", "Kollam"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src={keralaMap} alt="Kerala distribution map" className="max-h-[500px] w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DistributionMap;
