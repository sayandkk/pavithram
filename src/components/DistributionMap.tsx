import { motion } from "framer-motion";
import { MapPin, Globe, CheckCircle } from "lucide-react";

const cities = ["Palakkad", "Kochi", "Calicut", "Trivandrum", "Thrissur", "Malappuram", "Kannur", "Kollam"];

const DistributionMap = () => {
  return (
    <section id="distribution" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-wide uppercase mb-8"
            >
              <Globe size={16} /> Pan-Kerala Presence
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-8 leading-[1.1]">
              Serving the <span className="text-secondary">Heart of Kerala</span> with Purity
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              From our central hub in Palakkad, Pavithram’s cold-chain logistics network spans across all 14 districts. We ensure that every home in God's Own Country has access to farm-fresh dairy excellence within hours.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {cities.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 text-center border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <MapPin size={18} className="mx-auto text-secondary mb-2" />
                  <span className="text-sm font-bold text-primary">{city}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 rounded-3xl bg-secondary/5 border border-secondary/10">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">100% District Coverage</p>
                <p className="text-xs text-muted-foreground">Operating a robust network of 500+ distribution partners.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Abstract Connectivity Visualization */}
            <div className="relative aspect-square glass-card bg-slate-50 flex items-center justify-center border-slate-100 overflow-hidden group">
              <div className="absolute inset-0 bg-primary/2.5 group-hover:bg-primary/5 transition-colors duration-700" />

              {/* Central Hub */}
              <div className="relative z-10 w-32 h-32 rounded-full border-4 border-white bg-primary shadow-2xl flex flex-col items-center justify-center text-white text-center p-4">
                <p className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Main Hub</p>
                <p className="font-display font-bold text-lg leading-tight">Palakkad</p>
              </div>

              {/* Orbital Elements */}
              {[30, 90, 150, 210, 270, 330].map((angle, i) => (
                <motion.div
                  key={angle}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border border-primary/10 rounded-full"
                  style={{ width: `${80 - i * 10}%`, height: `${80 - i * 10}%` }}
                >
                  <div
                    className="absolute w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/20"
                    style={{
                      top: '0%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </motion.div>
              ))}

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 glass p-4 rounded-2xl border-white/40">
                <img src="/logo.png" alt="Pavithram" className="h-8 w-8 object-contain" />
                <span className="font-bold text-primary text-sm">Quality on the Move</span>
              </div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DistributionMap;
