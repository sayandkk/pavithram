import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 ${scrolled ? "top-2" : "top-0"}`}>
      <nav className={`container mx-auto h-16 px-6 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-1 rounded-full bg-white group-hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="Pavithram Logo" className="h-10 w-10 object-contain" />
          </div>
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
            Pavithram
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Products", "Our Story", "Manufacturing", "Distribution"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-secondary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full ${scrolled ? "text-primary/80" : "text-white/80"}`}
            >
              {item}
            </a>
          ))}
          <Button variant={scrolled ? "default" : "hero"} size="sm" className="rounded-full px-6">
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-primary hover:bg-black/5" : "text-white hover:bg-white/10"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden glass rounded-[2rem] p-8 shadow-2xl border border-white/40"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Products", "Our Story", "Manufacturing", "Distribution"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="default" className="w-full rounded-full py-6 mt-4">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
