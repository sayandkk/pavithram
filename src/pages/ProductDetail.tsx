import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Minus, Plus, Award, ShieldCheck, Leaf } from "lucide-react";
import { products } from "@/data/products";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const product = products.find(p => p.id === Number(id));

    const [selectedVariant, setSelectedVariant] = useState<string>("");
    const [quantity, setQuantity] = useState(1);

    // Initialize variant on load
    useEffect(() => {
        if (product) {
            const variants = product.packSizes.split(",").map(v => v.trim());
            
            // Check if we have an initial variant passed from navigation state
            const initialVariantKey = location.state?.initialVariant;
            if (initialVariantKey) {
                const matchingVariant = variants.find(v => v.includes(initialVariantKey));
                if (matchingVariant) {
                    setSelectedVariant(matchingVariant);
                    return;
                }
            }

            if (variants.length > 0) {
                setSelectedVariant(variants[0]);
            }
        }
    }, [product, location.state]);

    if (!product) {
        return (
            <PageWrapper>
                <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                    <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/products')}
                        className="text-accent hover:underline flex items-center gap-2"
                    >
                        <ChevronLeft /> Back to Products
                    </button>
                </div>
            </PageWrapper>
        );
    }

    const variants = product.packSizes.split(",").map(v => v.trim());

    const currentImage = product.variantImages && Object.keys(product.variantImages).find(key => selectedVariant.includes(key))
        ? product.variantImages[Object.keys(product.variantImages).find(key => selectedVariant.includes(key))!]
        : product.image;

    return (
        <PageWrapper>
            <div className="min-h-screen bg-background flex flex-col">
                <main className="flex-grow pt-24 pb-16">
                    <div className="container mx-auto px-6 max-w-6xl">

                        {/* Breadcrumb / Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <Link to="/products" className="inline-flex items-center text-foreground/60 hover:text-accent transition-colors">
                                <ChevronLeft size={20} className="mr-1" /> Back to Products
                            </Link>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Left Column: Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-3xl overflow-hidden bg-secondary/10 border border-accent/10 flex items-center justify-center p-8 lg:p-16 aspect-square"
                            >
                                <div className="absolute top-6 left-6 z-10 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                                    <Award size={16} /> Premium
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent mix-blend-multiply" />
                                <img
                                    src={currentImage}
                                    key={currentImage}
                                    alt={product.name}
                                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Right Column: Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex flex-col justify-center"
                            >
                                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6 w-max">
                                    <span className="text-accent font-serif text-sm uppercase tracking-widest">{product.category}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                                    {product.name}
                                </h1>

                                <motion.div
                                    key={selectedVariant}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-lg text-foreground/70 font-light mb-10 leading-relaxed min-h-[80px]">
                                        {product.variantDescriptions && Object.keys(product.variantDescriptions).find(key => selectedVariant.includes(key))
                                            ? product.variantDescriptions[Object.keys(product.variantDescriptions).find(key => selectedVariant.includes(key))!]
                                            : product.description}
                                    </p>
                                </motion.div>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <Leaf size={18} />
                                        </div>
                                        <span>100% Pure & Natural</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <span>FSSAI Certified</span>
                                    </div>
                                </div>

                                <Separator className="mb-10 bg-accent/20" />

                                {/* Variant Selection */}
                                <div className="mb-8">
                                    <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground/60 mb-4">Varients</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {variants.map(variant => (
                                            <button
                                                key={variant}
                                                onClick={() => setSelectedVariant(variant)}
                                                className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-200 ${selectedVariant === variant
                                                    ? 'border-accent bg-accent/5 text-accent shadow-sm'
                                                    : 'border-accent/20 text-foreground/70 hover:border-accent/40 hover:bg-secondary/10'
                                                    }`}
                                            >
                                                {variant}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity Selection & Action */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* <div className="flex items-center justify-between border-2 border-accent/20 rounded-xl px-4 py-2 w-full sm:w-36 h-14 bg-background">
                                        <button 
                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                            className="p-1 hover:bg-secondary/20 rounded-md text-foreground/60 hover:text-foreground transition-colors"
                                        >
                                            <Minus size={20} />
                                        </button>
                                        <span className="font-semibold text-lg">{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(q => q + 1)}
                                            className="p-1 hover:bg-secondary/20 rounded-md text-foreground/60 hover:text-foreground transition-colors"
                                        >
                                            <Plus size={20} />
                                        </button>
                                    </div> */}

                                    <button
                                        className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </PageWrapper>
    );
};

// Dummy separator for standard visual flow
const Separator = ({ className }: { className?: string }) => (
    <div className={`h-[1px] w-full ${className}`} />
);

export default ProductDetail;
