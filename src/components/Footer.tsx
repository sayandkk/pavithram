import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const scrollToManufacturing = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('manufacturing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/20 border-t border-accent/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt="Pavithram"
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-serif text-2xl font-bold text-accent">
                Pavithram
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed font-light mb-8">
              Crafting Trusted Goodness from Palakkad's Legacy dairy farms. Trusted
              by Kerala since 1998.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Linkedin, href: "https://linkedin.com" }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 rounded-lg border border-accent/30 flex items-center justify-center text-accent/80 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-accent mb-8 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-4 text-foreground/70 text-sm font-light">
              {[
                { name: "Cow Milk", path: "/products" },
                { name: "Pure Ghee", path: "/products" },
                { name: "Fresh Curd", path: "/products" },
                { name: "Buttermilk", path: "/products" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-accent mb-8 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4 text-foreground/70 text-sm font-light">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Manufacturing", path: "/#manufacturing", isAnchor: true },
                { name: "Our Products", path: "/products" },
                { name: "Contact Us", path: "https://wa.me/917034508354", isExternal: true }
              ].map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent/30 flex items-center gap-2 group">
                      {link.name}
                    </a>
                  ) : link.isAnchor ? (
                    <Link to={link.path} onClick={scrollToManufacturing} className="hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <Link to={link.path} className="hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-accent mb-8 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-5 text-foreground/70 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="shrink-0 mt-0.5 text-accent" />
                <span>
                  Palakkad, Kerala
                  <br />
                  679303, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="shrink-0 text-accent" />
                <a
                  href="tel:+917034508354"
                  className="hover:text-accent transition-colors"
                >
                  +91 7034508354
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-accent" />
                <a
                  href="mailto:info@pavithram.com"
                  className="hover:text-accent transition-colors"
                >
                  info@pavithram.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-foreground/50 text-xs font-light">
            <p>
              © {new Date().getFullYear()} Pavithram Food Products. Legacy of
              excellence.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
