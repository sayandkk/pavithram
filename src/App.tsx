import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

import ProductDetail from "./pages/ProductDetail";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const criticalImages = [
      "/logo.png",
      "/hero.png",
      "/products/pavitram%20milk.png",
      "/products/Premium%20ghee.png",
      "/products/curd.png",
      "/products/buttter.png"
    ];

    let loadedCount = 0;
    
    // Safety fallback
    const fallbackTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 5000);

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount >= criticalImages.length) {
        clearTimeout(fallbackTimer);
        // Add a slight delay for aesthetic smoothness
        setTimeout(() => setIsAppLoading(false), 500);
      }
    };

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Skip bad images
    });

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Preloader isLoading={isAppLoading} />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
