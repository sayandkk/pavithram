import { motion } from "framer-motion";
import { Trees, Factory, ShieldCheck, ArrowUpRight, Zap, Sparkles } from "lucide-react";

const ManufacturingExcellence = () => {
  return (
    <section id="manufacturing" className="relative py-32 bg-background overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent font-serif text-[11px] uppercase tracking-[0.2em] font-bold">
              Manufacturing Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1]"
          >
            Technology <span className="text-accent italic">Meets</span> Legacy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 font-light mx-auto max-w-2xl leading-relaxed"
          >
            We bridge the gap between traditional dairy wisdom and future-ready
            automation to ensure every drop is as pure as nature intended.
          </motion.p>
        </div>

        {/* 2+3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Row 1, Card 1: Smart Automated Processing (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-secondary/10 border border-accent/20 p-8 flex flex-col justify-between min-h-[360px] md:col-span-1 lg:col-span-3"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/hero.png"
                alt="Modern Facility"
                className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-accent/20 mb-6 transition-transform group-hover:scale-110">
                <Factory size={28} />
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-4">Smart Automated <br />Processing</h3>
              <p className="text-foreground/70 font-light text-base leading-relaxed mb-8 max-w-md">
                Our Palakkad facility utilizes world-class automated systems that preserve natural nutrients while ensuring zero human contact.
              </p>
              <div className="mt-auto">
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                  Learn Process <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 1, Card 2: Eco-Sourcing (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-white border border-accent/10 p-8 flex flex-col justify-between min-h-[360px] md:col-span-1 lg:col-span-3 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
                <Trees size={28} />
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-4">Eco-Sourcing</h3>
              <p className="text-foreground/70 font-light leading-relaxed text-base mb-8 max-w-md">
                Cows raised in organic, pesticide-free pastures of Palakkad,
                ensuring the purest starting point for every product.
              </p>
              <div className="mt-auto h-0.5 w-12 bg-accent/30 group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>

          {/* Row 2, Card 1: Purity Testing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-secondary/10 border border-accent/10 rounded-3xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500 md:col-span-1 lg:col-span-2 flex flex-col min-h-[320px]"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-2xl font-serif text-foreground mb-4">Purity Testing</h4>
            <p className="text-foreground/70 font-light leading-relaxed text-sm mb-6">
              Every batch undergoes 24+ rigorous quality checks in certified labs 
              before it earns the Pavithram seal of purity.
            </p>
            <div className="mt-auto h-0.5 w-8 bg-accent/30 group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Row 2, Card 2: Cold Chain */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group bg-secondary/10 border border-accent/10 rounded-3xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500 md:col-span-1 lg:col-span-2 flex flex-col min-h-[320px]"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-2xl font-serif text-foreground mb-4">Cold Chain</h4>
            <p className="text-foreground/70 font-light leading-relaxed text-sm mb-6">
              Advanced refrigeration networks maintaining freshness from farm to 
              table, preserving every ounce of nutritional value.
            </p>
            <div className="mt-auto h-0.5 w-8 bg-accent/30 group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Row 2, Card 3: Info Stat Card (Human Contact) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-accent rounded-3xl p-8 flex flex-col justify-center items-center text-white text-center group shadow-2xl shadow-accent/30 md:col-span-2 lg:col-span-2 min-h-[320px]"
          >
            <div className="text-5xl font-serif mb-2 group-hover:scale-110 transition-transform">0%</div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mb-6">Human Contact</p>
            <div className="w-16 h-[1px] bg-white/20 mb-6" />
            <p className="text-sm font-medium leading-relaxed italic max-w-[200px]">
              "Our automated systems ensure the highest hygiene standards."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
