import { motion } from "framer-motion";
import { Trees, Factory, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Trees,
    title: "Eco-Sourcing",
    description:
      "Our milk comes from cows raised in organic, pesticide-free pastures of Palakkad, ensuring the purest starting point.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Factory,
    title: "Smart Processing",
    description:
      "World-class automated systems ensuring highest standards while preserving natural nutrients and freshness.",
    color: "from-accent to-accent/70",
  },
  {
    icon: ShieldCheck,
    title: "Purity Testing",
    description:
      "Every batch undergoes 24+ rigorous quality checks in certified labs before reaching your doorstep.",
    color: "from-accent/80 to-amber-400",
  },
];

const ManufacturingExcellence = () => {
  return (
    <section id="manufacturing" className="relative py-32 bg-secondary/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/30 mb-8"
            >
              <span className="text-accent font-serif text-sm uppercase tracking-widest">
                Manufacturing Excellence
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-foreground leading-tight\"
            >
              Technology Meets <span className="text-accent">Heritage</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-foreground/70 font-light mt-6"
            >
              Modern facilities with traditional purity standards
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-primary/80 border border-accent/20 p-10 rounded-xl hover:border-accent/40 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 text-foreground shadow-lg`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-2xl mb-4">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed mb-8 font-light">
                  {step.description}
                </p>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-accent font-light text-sm uppercase tracking-wider hover:text-accent/80 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
