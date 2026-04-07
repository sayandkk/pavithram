import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Store, Users } from "lucide-react";

const WholesaleCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-secondary/15">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-40 -z-10" />

      {/* Decorative Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[140%] border border-foreground/5 rounded-full -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[140%] border border-accent/10 rounded-full -z-10" />

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
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-widest uppercase mb-10"
          >
            Business Opportunities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight"
          >
            Grow Your Business with{" "}
            <span className="text-accent italic">Pavithram</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join Kerala's fastest-growing dairy network. Whether you are a
            retailer, distributor, or institution, we offer premium quality and
            reliable delivery.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {[
              { icon: Store, label: "Retailers" },
              { icon: Building2, label: "Wholesale" },
              { icon: Users, label: "Institutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-2xl flex flex-col items-center gap-4 border border-accent/20 group hover:border-accent/50 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-bold tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={() => {
              const phoneNumber = "7034508354";
              const message = "Hello, I am interested in becoming a partner with Pavithram. Please provide more details about the partnership opportunities.";
              window.open(`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
            }}
            className="rounded-full px-12 h-16 text-lg bg-accent hover:bg-accent/90 hover:text-white transition-all duration-500 shadow-2xl shadow-accent/20 group font-bold"
          >
            Become a Partner
            <ArrowRight
              className="ml-3 group-hover:translate-x-2 transition-transform"
              size={24}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleCTA;
