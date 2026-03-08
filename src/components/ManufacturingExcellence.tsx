import { motion } from "framer-motion";
import { Trees, Factory, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Trees,
    title: "Eco-Sourcing",
    description: "Our milk comes from cows raised in the organic, pesticide-free pastures of Palakkad, ensuring the purest starting point.",
    color: "bg-emerald-500",
  },
  {
    icon: Factory,
    title: "Smart Processing",
    description: "Using world-class automated systems that eliminate human contact, preserving the natural nutrients and freshness.",
    color: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Purity Testing",
    description: "Every batch undergoes 24+ rigorous quality checks in our certified labs before it ever reaches your doorstep.",
    color: "bg-secondary",
  },
];

const ManufacturingExcellence = () => {
  return (
    <section id="manufacturing" className="py-32 relative overflow-hidden bg-[#0A1F0C]">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6"
            >
              Excellence in Every Drop
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Modern Technology Meets <br />
              <span className="text-secondary italic">Traditional Purity</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="glass-dark p-6 rounded-3xl flex items-center gap-6 border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A1F0C] bg-white flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="Expert" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/60 font-medium">Over 50+ QC Experts</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-dark p-10 rounded-[2.5rem] border-white/5 group hover:border-secondary/20 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">{step.title}</h3>
              <p className="text-white/50 text-base leading-relaxed mb-8">{step.description}</p>

              <button className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
