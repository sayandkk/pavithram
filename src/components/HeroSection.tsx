import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Abstract Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[120%] bg-primary/5 rounded-[100px] rotate-12 -z-0 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Pure & Fresh Dairy Products
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-[1.1] mb-8">
            Pure Milk from Palakkad's <span className="text-secondary">Finest Farms</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Traditional purity meets modern dairy excellence. Experience the farm-fresh goodness of Pavithram Milk and Dairy products delivered straight to your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="rounded-full px-8 h-14 text-base group">
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-primary/20 hover:bg-primary/5">
              Wholesale Inquiry
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-muted overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-primary">10k+ Happy Families</p>
              <div className="flex text-secondary">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Hero Image with Modern Frame */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white max-h-[600px]">
            <img
              src="/hero.png"
              alt="Pavithram Dairy Experience"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Glass Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-[-40px] z-20 glass p-6 rounded-3xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                <span className="text-2xl font-bold">14+</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-primary/60">Districts</p>
                <p className="font-display font-bold text-lg">Kerala Presence</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
