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
              Rooted in Tradition, Built with Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pavithram was born in Pattambi with a simple mission — to bring the authentic flavors of Kerala's
              kitchens to modern homes without compromise. What started as a small venture has grown into a
              trusted name across 14 districts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, from our state-of-the-art facility in Kozhikotiri, we process, pack, and deliver
              traditional food products with the same love your grandmother put into her cooking — just with
              world-class hygiene and quality standards.
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
