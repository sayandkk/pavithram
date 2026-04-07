import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import OurStory from "@/components/OurStory";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import ManufacturingExcellence from "@/components/ManufacturingExcellence";
import DistributionMap from "@/components/DistributionMap";
import WholesaleCTA from "@/components/WholesaleCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import PageWrapper from "@/components/PageWrapper";

const Index = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <TrustBar />
        <OurStory />
        <CategoryShowcase />
        <FeaturedProducts />
        <ManufacturingExcellence />
        <DistributionMap />
        <WholesaleCTA />
        <Testimonials />
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Index;
