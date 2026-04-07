import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, Heart, Users, Target } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background text-foreground">

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Pavithram Legacy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Authentic Kerala Dairy</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                Crafting purity and tradition since 2020 as a <span className="text-accent font-medium">premium dairy brand in Kerala</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/products/pavitram milk.png"
                    alt="Pavithram - Pure Cow Milk Kerala and Dairy Products"
                    className="w-full h-full object-contain bg-secondary/20 p-12"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-accent font-serif uppercase tracking-widest text-sm">Born in Palakkad</span>
                  <h2 className="text-4xl md:text-5xl font-serif leading-tight">Trusted Goodness for <span className="text-accent">6 Years</span></h2>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  For over half a decade, Pavithram has been synonymous with dairy purity and <span className="text-accent font-medium">fresh milk delivery in Kerala</span>. Founded in 2020, our journey began with a simple vision: to bring the freshness of the farm directly to your doorstep without compromising on quality or tradition.
                </p>

                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Today, we stand as a leading <span className="text-accent font-medium">local dairy farm in Kerala</span>, serving thousands of families daily with pure cow milk, curd, ghee, and traditional dairy products that capture the natural goodness of our land.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-accent/20">
                  <div>
                    <h4 className="text-3xl font-serif text-accent mb-1">2020</h4>
                    <p className="text-sm text-foreground/50 uppercase tracking-wider">Established</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif text-accent mb-1">50k+</h4>
                    <p className="text-sm text-foreground/50 uppercase tracking-wider">Happy Homes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background p-12 rounded-3xl border border-accent/20 shadow-xl"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  To provide every family with access to pure, farm-fresh dairy products that are free from artificial additives, ensuring nutritional excellence through sustainable practices and traditional wisdom.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-background p-12 rounded-3xl border border-accent/20 shadow-xl"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  To be the gold standard in the Indian dairy industry, recognized for our unwavering commitment to quality, innovation in manufacturing, and respect for the Legacy of dairy farming.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent font-serif uppercase tracking-widest text-sm">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4">The Pillars of Pavithram</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Leaf, title: "Purity First", desc: "No adulteration, no compromises. Just 100% natural goodness." },
                { icon: Award, title: "Quality Control", desc: "Rigorous testing at every stage of production." },
                { icon: Heart, title: "Farm Fresh", desc: "Sourced directly from local farmers we know and trust." },
                { icon: Users, title: "Community", desc: "Supporting local agricultural communities for decades." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 text-center space-y-4 hover:bg-secondary/10 rounded-2xl transition-colors duration-300"
                >
                  <div className="mx-auto w-12 h-12 text-accent">
                    <value.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold">{value.title}</h4>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-accent/5">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Experience the Purity of Tradition</h2>
            <p className="text-xl text-foreground/70 mb-12 font-light">
              Discover why thousands of families trust Pavithram for their daily nutrition.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => window.open(`https://wa.me/917034508354`, "_blank")}
                className="px-10 py-4 bg-accent text-white rounded-full font-bold shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
