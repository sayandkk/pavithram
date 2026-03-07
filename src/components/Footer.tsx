const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Pavithram</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Authentic Kerala food products manufactured with love and precision at Kozhikotiri, Palakkad.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>Snacks & Savories</li>
              <li>Spice Blends</li>
              <li>Rice & Flours</li>
              <li>Ready Mixes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>About Us</li>
              <li>Manufacturing</li>
              <li>Distribution</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>Kozhikotiri, Pattambi</li>
              <li>Palakkad, Kerala</li>
              <li>FSSAI: 11324009000952</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Pavithram Food Products. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
