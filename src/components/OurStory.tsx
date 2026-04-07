import { motion } from "framer-motion";
import { Droplets, Heart, Leaf, CheckCircle } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2020",
      title: "Legacy Founded",
      description:
        "Started with a vision to bring pure, untouched dairy from Palakkad farms",
      icon: Droplets,
    },
    {
      year: "2022",
      title: "Trust Expanded",
      description:
        "Reached 10,000+ households with our A2 milk and Legacy dairy products",
      icon: Heart,
    },
    {
      year: "2026",
      title: "Pure Excellence",
      description:
        "Now serving 50,000+ families with premium, certified dairy products across Kerala",
      icon: Leaf,
    },
  ];

  const values = [
    {
      title: "100% Pure",
      desc: "No additives, preservatives, or artificial flavors",
    },
    {
      title: "Farm Fresh",
      desc: "Direct from Palakkad farms to your table within 24 hours",
    },
    {
      title: "Legacy Recipes",
      desc: "Traditional dairy craftsmanship passed down through generations",
    },
    {
      title: "Community First",
      desc: "Supporting local farmers and empowering rural communities",
    },
  ];

  return (
    <section className="relative py-32 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <div className="inline-block px-4 py-2 bg-accent/15 rounded-full border border-accent/40 mb-8">
            <span className="text-accent font-serif text-sm uppercase tracking-widest">
              Our Legacy
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            6 Years of <span className="text-accent">Trusted Goodness</span>
          </h2>
          <p className="text-xl text-foreground/70 font-light">
            From Palakkad's pristine farms to your family's table, maintaining
            the highest standards of purity and quality.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="bg-card border border-accent/20 rounded-xl p-8 hover:border-accent/40 hover:bg-secondary/10 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-serif text-3xl text-accent">
                        {milestone.year}
                      </h3>
                    </div>
                    <h4 className="font-serif text-2xl text-foreground mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-foreground/60 font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {i < milestones.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent translate-x-full transform -translate-y-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed mb-12 max-w-3xl">
            <p>
              From the lush green pastures of Palakkad, Pavithram brings to your
              table the most authentic and pure dairy experience. Our journey
              began with a simple mission: to provide every household with milk
              that's as fresh as a morning at the farm.
            </p>
            <p>
              We believe in the harmony of nature and technology. By partnering
              directly with local farmers and employing modern cold-chain
              logistics, we ensure that every drop of Pavithram milk retains its
              natural nutrients and traditional taste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-secondary/30 border border-accent/15 rounded-lg hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl bg-gradient-to-r from-accent/8 to-accent/5 border border-accent/20 flex items-start gap-6"
        >
          <span className="text-6xl text-accent/30 font-serif leading-none flex-shrink-0">
            "
          </span>
          <p className="text-foreground/80 text-lg font-light italic leading-relaxed">
            Our dairy excellence isn't just a business goal—it's a commitment to
            the health of our community and the prosperity of our farmers. Every
            bottle of Pavithram represents 6 years of unwavering dedication to
            quality and purity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
