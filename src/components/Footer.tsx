import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F0C] text-white py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">

          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Pavithram Logo" className="h-12 w-auto object-contain brightness-0 invert" />
              <span className="font-display text-3xl font-bold tracking-tight">Pavithram</span>
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
              Bringing the traditional purity of Palakkad's dairy to every household in Kerala. Our commitment is health, fresh, and pure excellence in every drop.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl glass-dark border-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8 tracking-widest uppercase text-xs">Products</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              {["Fresh Cow Milk", "Pure Cow Ghee", "Traditional Curd", "Dairy Essentials"].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8 tracking-widest uppercase text-xs">Company</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              {["Our Story", "Manufacturing", "Distribution", "Partner With Us"].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-8 tracking-widest uppercase text-xs">Reach Out</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm leading-snug">
                  Pavithram Food Products, Kozhikotiri, <br />
                  Pattambi, Palakkad, Kerala - 679303
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <span className="text-white/50 text-sm font-medium">info@pavithramdairy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} Pavithram Food Products. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
              FSSAI Lic: 11324009000952
            </p>
            <div className="flex gap-6 text-white/20 text-xs font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
