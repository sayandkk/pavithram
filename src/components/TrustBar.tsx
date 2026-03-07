import { ShieldCheck, Leaf, Package, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "FSSAI Certified", sub: "Lic: 11324009000952" },
  { icon: Leaf, text: "100% Natural Ingredients" },
  { icon: Package, text: "Hygienically Packed" },
  { icon: MapPin, text: "Made in Kerala" },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-4 border-y border-primary-foreground/10">
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mx-12 shrink-0">
              <item.icon className="w-5 h-5 text-secondary" />
              <span className="text-primary-foreground font-medium text-sm">{item.text}</span>
              {item.sub && <span className="text-primary-foreground/50 text-xs">({item.sub})</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
