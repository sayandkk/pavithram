import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import { ChevronRight, Search, Star, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import PageWrapper from "@/components/PageWrapper";

const categoryEmojis: Record<string, string> = {
    Milk: "🥛",
    Ghee: "🧈",
    Dairy: "🥣",
};

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;

    const expandedProducts = filteredProducts.flatMap(product => {
        const items = [{
            ...product,
            displayId: `${product.id}-main`,
            displayName: product.name,
            displayImage: product.image,
            initialVariant: null as string | null
        }];

        if (product.variantImages) {
            const seenImages = new Set([product.image]);
            Object.entries(product.variantImages).forEach(([key, img]) => {
                if (!seenImages.has(img)) {
                    seenImages.add(img);
                    items.push({
                        ...product,
                        displayId: `${product.id}-variant-${key}`,
                        displayName: `${product.name} (${key})`,
                        displayImage: img,
                        initialVariant: key
                    });
                }
            });
        }
        return items;
    });

    return (
        <PageWrapper>
            <div className="min-h-screen bg-background flex flex-col">
                <main className="flex-grow">
                    {/* Stunning Hero Section */}
                    <section className="relative pt-32 pb-16 bg-gradient-to-b from-secondary/30 via-background to-background overflow-hidden">
                        <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="inline-block px-4 py-2 bg-accent/15 rounded-full border border-accent/40 mb-6">
                                        <span className="text-accent font-serif text-sm uppercase tracking-widest">Premium Collection</span>
                                    </div>
                                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                                        Discover Our <span className="text-accent">Dairy Excellence</span>
                                    </h1>
                                    <p className="text-lg text-foreground/70 font-light mb-8 max-w-2xl">
                                        From farm-fresh milk to premium ghee, explore our complete range of authentic Kerala dairy products, crafted with tradition and precision.
                                    </p>

                                    {/* Search Bar */}
                                    <div className="flex items-center gap-3 bg-white border border-accent/20 rounded-full px-6 py-4 shadow-lg w-full">
                                        <Search className="text-accent" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            className="flex-1 bg-transparent outline-none text-foreground placeholder-foreground/40"
                                        />
                                    </div>
                                </motion.div>

                                {/* Fresh Milk Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="hidden md:block"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-2xl" />
                                        <img
                                            src="/hero.png"
                                            alt="Premium Dairy"
                                            className="relative rounded-3xl shadow-2xl object-cover w-full h-96"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Category Filter Section */}
                    <section className="bg-background py-8 border-b border-accent/20">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-wrap gap-3 justify-center items-center"
                            >
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${!selectedCategory
                                            ? "bg-accent text-white shadow-lg shadow-accent/20"
                                            : "bg-background border border-accent/30 text-foreground hover:border-accent/50 hover:bg-secondary/20"
                                        }`}
                                >
                                    All Products
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.name}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.name
                                                ? "bg-accent text-white shadow-lg shadow-accent/20"
                                                : "bg-background border border-accent/30 text-foreground hover:border-accent/50 hover:bg-secondary/20"
                                            }`}
                                    >
                                        <span className="text-lg">{categoryEmojis[cat.name]}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Stats Bar */}
                    <section className="bg-secondary/10 py-8 border-b border-accent/20">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-3 gap-8 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-accent mb-2">10+</div>
                                    <p className="text-foreground/70 font-light">Products</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="text-3xl font-bold text-accent mb-2 flex items-center justify-center gap-1">
                                        <Star className="fill-accent" size={28} />5.0
                                    </div>
                                    <p className="text-foreground/70 font-light">Quality Rated</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                                    <p className="text-foreground/70 font-light">Pure & Natural</p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Products Grid */}
                    <section className="py-20 px-6">
                        <div className="container mx-auto">
                            {filteredProducts.length > 0 ? (
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {expandedProducts.map((product, i) => (
                                        <Link to={`/product/${product.id}`} state={{ initialVariant: product.initialVariant }} key={product.displayId} className="block group">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                                whileHover={{ y: -8 }}
                                                className="relative bg-white border border-accent/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                            >
                                                {/* Premium Badge */}
                                                <div className="absolute top-4 right-4 z-10 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                                                    <Award size={16} /> Premium
                                                </div>

                                                {/* Product Icon/Image */}
                                                <div className="relative h-56 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 flex items-center justify-center overflow-hidden border-b border-accent/10">
                                                    <img
                                                        src={product.displayImage}
                                                        alt={product.displayName}
                                                        className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 flex flex-col flex-grow">
                                                    {/* Category & Size */}
                                                    <div className="flex justify-between items-start mb-4 gap-2">
                                                        <span className="inline-block px-3 py-1 bg-accent/15 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
                                                            {product.category}
                                                        </span>
                                                        <span className="text-xs text-foreground/50 font-medium uppercase">{product.packSizes.split(',')[0]}</span>
                                                    </div>

                                                    {/* Product Name */}
                                                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                                        {product.displayName}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-foreground/60 text-sm line-clamp-3 leading-relaxed mb-6 h-16">
                                                        {product.description}
                                                    </p>

                                                    {/* Features */}
                                                    <div className="flex items-center gap-2 mb-6 text-xs text-foreground/70">
                                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                                        <span>Farm Fresh</span>
                                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                                        <span>FSSAI Certified</span>
                                                    </div>

                                                    {/* CTA Button */}
                                                    <div className="mt-auto">
                                                        <div className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 group-hover:shadow-accent/40">
                                                            View Details
                                                            <ChevronRight size={18} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-foreground/70 text-lg">No products found in this category.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </PageWrapper>
    );
};

export default Products;
