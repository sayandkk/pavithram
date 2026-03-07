import { motion } from "framer-motion";
import { Sprout, Cog, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Sourcing",
    description: "Hand-picked raw materials from local farmers across Kerala, ensuring freshness from farm to factory.",
  },
  {
    icon: Cog,
    title: "Processing",
    description: "Modern machinery with minimal human touch points, maintaining the highest hygiene standards throughout.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Check",
    description: "Rigorous multi-stage testing and FSSAI compliance before every batch is dispatched.",
  },
];

const ManufacturingExcellence = () => {
  return (
    <section id="manufacturing" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Manufacturing Excellence
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">{step.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
