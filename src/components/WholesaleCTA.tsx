import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WholesaleCTA = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Want to Become a Pavithram Partner?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            We're expanding our retail and wholesale network. Join 1000+ stores already stocking Pavithram products.
          </p>
          <Button
            variant="default"
            size="lg"
            className="text-base px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
          >
            Contact Our Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleCTA;
