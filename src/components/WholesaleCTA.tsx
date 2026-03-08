import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Store, Users } from "lucide-react";

const WholesaleCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-x-0 inset-y-0 bg-[#0A1F0C] -z-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/20 opacity-60 -z-10" />

      {/* Decorative Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[140%] border border-white/5 rounded-full -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[140%] border border-secondary/10 rounded-full -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark text-white/80 text-sm font-bold tracking-widest uppercase mb-10"
          >
            Business Opportunities
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Grow Your Business with <span className="text-secondary italic">Pavithram</span>
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Kerala's fastest-growing dairy network. Whether you are a retailer, distributor, or institution, we offer premium quality and reliable delivery.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {[
              { icon: Store, label: "Retailers" },
              { icon: Building2, label: "Wholesale" },
              { icon: Users, label: "Institutions" },
            ].map((item, i) => (
              <div key={i} className="glass-dark p-6 rounded-2xl flex flex-col items-center gap-4 border-white/5 group hover:border-secondary/30 transition-all duration-300">
                <item.icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-lg bg-secondary hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl shadow-secondary/20 group font-bold"
          >
            Become a Partner
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleCTA;
