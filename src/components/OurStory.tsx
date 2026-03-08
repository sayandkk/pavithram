import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const OurStory = () => {
  const highlights = [
    { title: "Pure Cow Milk", desc: "Sourced daily from our partner farms." },
    { title: "Modern Processing", desc: "State-of-the-art hygienic facilities." },
    { title: "Tradition Kept", desc: "No preservatives, just pure goodness." },
  ];

  return (
    <section id="our-story" className="py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Magazine Style Image Grid */}
            <div className="relative grid grid-cols-12 gap-4">
              <div className="col-span-8 rounded-[2rem] overflow-hidden shadow-2xl z-10 translate-y-8">
                <img src="/hero.png" alt="Dairy Farm" className="w-full h-full object-cover aspect-[4/5]" />
              </div>
              <div className="col-span-6 col-start-7 row-start-1 mt-20 -ml-12 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white z-20">
                <img src="/logo.png" alt="Pavithram Quality" className="w-full h-full object-cover aspect-square bg-slate-50 p-8" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                From the lush green pastures of Palakkad, Pavithram brings to your table the most authentic and pure dairy experience. Our journey began with a simple mission: to provide every household with milk that’s as fresh as a morning at the farm.
              </p>
              <p>
                We believe in the harmony of nature and technology. By partnering directly with local farmers and employing modern cold-chain logistics, we ensure that every drop of Pavithram milk retains its natural nutrients and traditional taste.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6 italic">
              <span className="text-6xl text-primary/10 font-serif leading-none">“</span>
              <p className="text-primary/70 text-lg">
                Our dairy excellence isn't just a business goal—it's a commitment to the health of our community and the prosperity of our farmers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
