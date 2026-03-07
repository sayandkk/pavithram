import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-secondary font-medium tracking-widest uppercase text-sm mb-4"
        >
          Authentic Kerala Food Products
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          From the Heart of Palakkad to Every Kitchen in Kerala
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto"
        >
          Traditional flavors, modern hygiene. Bringing the taste of home to your table since Pattambi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8">
            Explore Products
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
            Inquire for Distribution
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
