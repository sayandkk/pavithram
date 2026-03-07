import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-2xl font-bold text-primary-foreground tracking-wide">
          Pavithram
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Our Story", "Manufacturing", "Distribution"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-primary-foreground/80 hover:text-secondary text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm">Contact Us</Button>
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {["Products", "Our Story", "Manufacturing", "Distribution"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="block py-2 text-primary-foreground/80 hover:text-secondary text-sm"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-2 w-full">Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
