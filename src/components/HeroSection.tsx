import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden mt-20">
      {/* Full Background Image - starts after navbar */}
      <div className="absolute inset-0 w-full h-full top-0 z-0">
        <img
          src="/hero.png"
          alt="Pavithram - Farm Fresh Milk and Pure Dairy Products Kerala"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Uniform overlay for centered text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center pt-20">
        {/* Text Content Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Luxury header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="w-12 h-1 bg-accent rounded-full mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl text-white leading-tight mb-8 max-w-3xl mx-auto font-serif tracking-tight"
          >
            Pure by Nature. <br /> Perfect by Choice.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
          >
            Experience premium <span className="text-accent font-medium">farm fresh milk delivery</span> and
            traditional <span className="text-accent font-medium">dairy products in Kerala</span>.
            Pure, natural, and delivered from our farms to your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={() => navigate('/products')}
              className="bg-accent text-black hover:bg-accent/90 rounded-lg px-10 h-14 text-base font-semibold shadow-xl"
            >
              Discover Collection
            </Button>
          </motion.div>

          {/* Luxury stats */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20"
          >
            {[
              { number: "25+", label: "Years of Trust" },
              { number: "50k+", label: "Happy Homes" },
              { number: "#1", label: "Choice of Kerala" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-serif text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-white/70 font-light">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
