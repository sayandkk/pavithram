import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Full Background Image - starts after navbar */}
      <div className="absolute inset-0 w-full h-full top-0 z-0">
        <img
          src="/hero.png"
          alt="Premium Dairy Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Text Content Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Luxury header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-accent font-serif text-xl italic mb-4">Heritage Since 1998</p>
            <div className="w-12 h-1 bg-accent rounded-full mb-8" />
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8 tracking-tight">
            Liquid <br /> Gold from <br /> Palakkad
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/90 leading-relaxed mb-12 max-w-lg font-light"
          >
            For over two decades, Pavithram has been the embodiment of purity and tradition. Every drop of milk carries the essence of Kerala's finest farms, delivering uncompromising quality to discerning families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-lg px-10 h-14 text-base font-semibold shadow-xl">
              Discover Collection
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg px-10 h-14 text-base font-semibold">
              Our Heritage
            </Button>
          </motion.div>

          {/* Luxury stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20"
          >
            {[
              { number: "25+", label: "Years of Trust" },
              { number: "50k+", label: "Happy Homes" },
              { number: "#1", label: "Choice of Kerala" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-serif text-accent mb-2">{stat.number}</div>
                <p className="text-sm text-white/70 font-light">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
