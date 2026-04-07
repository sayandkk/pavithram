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
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Feature Card */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                Technology <br /> 
                <span className="text-accent italic">Meets</span> <br /> 
                Heritage
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground/60 font-light max-w-md leading-relaxed"
              >
                We bridge the gap between traditional dairy wisdom and future-ready 
                automation to ensure every drop is as pure as nature intended.
              </motion.p>
            </div>

            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-3xl overflow-hidden bg-secondary/10 border border-accent/20 p-8 pt-24 aspect-[4/5] lg:aspect-square flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="/hero.png" 
                  alt="Modern Facility" 
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shadow-lg shadow-accent/20">
                  <Factory size={24} />
                </div>
                <h3 className="text-3xl font-serif text-foreground">Smart Automated <br />Processing</h3>
                <p className="text-foreground/70 font-light text-sm max-w-xs leading-relaxed">
                  Our Palakkad facility utilizes world-class automated systems that preserve natural nutrients while ensuring zero human contact.
                </p>
                <div className="pt-4">
                   <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                     Learn Process <ArrowUpRight size={16} />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 lg:pt-24">
            
            {/* Step 1: Eco-Sourcing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group h-full bg-white border border-accent/10 rounded-3xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Trees size={28} />
                </div>
                <h4 className="text-2xl font-serif text-foreground">Eco-Sourcing</h4>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  Cows raised in organic, pesticide-free pastures of Palakkad, 
                  ensuring the purest starting point for every product.
                </p>
                <div className="h-0.5 w-8 bg-accent/30 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Step 3: Purity Testing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group h-full bg-secondary/10 border border-accent/10 rounded-3xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden sm:translate-y-12"
            >
              <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-2xl font-serif text-foreground">24+ Quality Checks</h4>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  Every batch undergoes rigorous quality checks in certified labs 
                  before it earns the Pavithram seal of purity.
                </p>
                <div className="h-0.5 w-8 bg-accent/30 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Step 4: Express Distribution (Bonus card for layout) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group h-full bg-secondary/10 border border-accent/10 rounded-3xl p-8 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Zap size={28} />
                </div>
                <h4 className="text-2xl font-serif text-foreground">Cold Chain</h4>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">
                  Advanced refrigeration networks maintaining freshness from farm to 
                  table, preserving every ounce of nutritional value.
                </p>
                <div className="h-0.5 w-8 bg-accent/30 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Info Stat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-accent rounded-3xl p-10 flex flex-col justify-center items-center text-white text-center group transition-all duration-500 sm:translate-y-12 shadow-2xl shadow-accent/30"
            >
              <div className="text-5xl font-serif mb-2 group-hover:scale-110 transition-transform">0%</div>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-6">Human Contact</p>
              <div className="w-full h-[1px] bg-white/20 mb-6" />
              <p className="text-sm font-medium leading-relaxed italic">
                "Our automated systems ensure the highest hygiene standards in Kerala."
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
