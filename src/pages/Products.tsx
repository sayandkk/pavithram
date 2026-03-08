import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import { ChevronRight } from "lucide-react";

// Helper object for category styling (reused from FeaturedProducts for consistency)
const categoryStyles: Record<string, { bg: string, text: string }> = {
    Milk: { bg: "bg-blue-50", text: "text-blue-600" },
    Ghee: { bg: "bg-orange-50", text: "text-orange-600" },
    Dairy: { bg: "bg-primary/5", text: "text-primary" },
};

const Products = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                {/* Page Header */}
                <div className="container mx-auto px-6 mb-16 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
                    >
                        Full Catalog
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-primary mb-6"
                    >
                        Our Complete Dairy Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Explore our entire range of farm-fresh, unadulterated dairy products, crafted with traditional care and modern hygiene.
                    </motion.p>
                </div>

                {/* Category Filter Pills (Visual only for now, can be made functional later) */}
                <div className="container mx-auto px-6 mb-12 flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">
                        All Products
                    </button>
                    {categories.map((cat) => (
                        <button key={cat.name} className="px-6 py-2 rounded-full bg-white text-muted-foreground hover:bg-slate-100 hover:text-primary font-bold text-sm border border-slate-200 transition-colors">
                            {cat.icon} {cat.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group glass-card p-4 hover:-translate-y-2"
                            >
                                {/* Image Container (Card-in-Card) */}
                                <div className="relative aspect-square rounded-2xl bg-white overflow-hidden mb-6 shadow-inner flex items-center justify-center">
                                    <span className="text-7xl group-hover:scale-110 transition-transform duration-700 ease-out">
                                        {product.category === "Milk" ? "🥛" : product.category === "Ghee" ? "🧈" : "🥣"}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="px-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${categoryStyles[product.category]?.bg || "bg-gray-100"} ${categoryStyles[product.category]?.text || "text-gray-600"}`}>
                                            {product.category}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground font-medium uppercase">{product.packSizes.split(',')[0]}</span>
                                    </div>

                                    <h3 className="font-display font-bold text-primary text-xl mb-2 group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6 h-10">{product.description}</p>

                                    <div className="w-full rounded-2xl bg-primary/5 hover:bg-primary hover:text-white text-primary border border-primary/10 transition-all duration-300 h-12 font-bold flex items-center justify-center gap-2 cursor-pointer group-hover:border-transparent">
                                        Enquire Now <ChevronRight size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
