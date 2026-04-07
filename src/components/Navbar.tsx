import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 ${scrolled ? "bg-background/95 border-b border-accent/20 shadow-lg backdrop-blur" : "bg-background"}`}
    >
      <nav className="container mx-auto h-16 px-0 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Pavithram"
            className="h-9 w-9 object-contain group-hover:scale-110 transition-transform"
          />
          <span
            className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-accent" : "text-foreground"}`}
          >
            Pavithram
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: "Products", path: "/products", isInternal: true },
            { name: "About Us", path: "/about-us", isInternal: true },
          ].map((item) => {
            const NavLink = item.isInternal ? Link : "a";

            return (
              <NavLink
                key={item.name}
                to={item.isInternal ? item.path : undefined}
                href={!item.isInternal ? item.path : undefined}
                className={`text-sm font-medium transition-colors duration-300 relative group ${scrolled ? "text-foreground/80 hover:text-accent" : "text-foreground/90 hover:text-accent"}`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ${scrolled ? "w-0" : "w-0"}`}
                  style={{ width: "0" }}
                />
              </NavLink>
            );
          })}
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open("https://wa.me/917034508354", "_blank")}
            className="rounded-lg px-7 bg-accent text-foreground hover:bg-accent/90 font-semibold shadow-lg"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded transition-colors ${scrolled ? "text-foreground hover:bg-foreground/10" : "text-foreground hover:bg-foreground/10"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-background border border-accent/20 rounded-lg p-6 shadow-lg z-40"
          >
            <div className="flex flex-col gap-4 text-center">
              {[
                { name: "Products", path: "/products", isInternal: true },
                { name: "About Us", path: "/about-us", isInternal: true },
              ].map((item) => {
                const NavLink = item.isInternal ? Link : "a";

                return (
                  <NavLink
                    key={item.name}
                    to={item.isInternal ? item.path : undefined}
                    href={!item.isInternal ? item.path : undefined}
                    className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-3"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <Button
                variant="default"
                onClick={() => {
                  window.open("https://wa.me/917034508354", "_blank");
                  setOpen(false);
                }}
                className="w-full rounded-lg py-5 mt-4 bg-accent text-foreground"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
