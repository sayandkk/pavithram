import { motion } from "framer-motion";
import factoryImg from "@/assets/factory.jpg";

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src={factoryImg} alt="Pavithram factory at Kozhikotiri" className="w-full h-[400px] object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Pure Milk, Pure Trust, Rooted in Tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pavithram was established in Pattambi with a singular vision — to provide every household in Kerala
              with access to the purest farm-fresh milk and dairy products. Our commitment to quality has
              made us a household name for dairy excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From our state-of-the-art facility in Kozhikotiri, we process and deliver milk and dairy
              products using the highest hygiene standards, ensuring that every drop of Pavithram milk
              carries the promise of health and purity for your family.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-primary">14</p>
                <p className="text-sm text-muted-foreground">Districts Served</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Retail Partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
