export interface Product {
  id: number;
  name: string;
  category: string;
  packSizes: string;
  description: string;
  image: string;
  variantDescriptions?: Record<string, string>;
  variantImages?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premiums Cow Milk",
    category: "Milk",
    packSizes: "TM 400, TM 450, TM 500, SM 1000, SM 500",
    description:
      "Farm-fresh, pasteurized cow milk delivered daily for your health.",
    image: "/products/pavitram%20milk.png",
    variantDescriptions: {
      "TM": "Fresh and nutritious toned milk with balanced fat content. Perfect for daily consumption, tea, coffee, and cooking. Ensures a healthy lifestyle with great taste.",
      "SM": "Rich and creamy milk with higher fat content, ideal for families. Best suited for drinking, making desserts, and enhancing flavor in every meal."
    },
    variantImages: {
      "TM": "/products/toned.png"
    }
  },
  {
    id: 2,
    name: "Fresh Curd",
    category: "Curd",
    packSizes: "Thick Curd 450, Curd 400, KT 400, KT 350, KT 300, Bottle Curd 400",
    description: "Thick, creamy, and natural curd set to perfection.",
    image: "/products/curd.png",
    variantDescriptions: {
      "Thick Curd": "Extra thick and creamy curd with a rich texture. Perfect for meals, desserts, and traditional dishes like curd rice.",
      "Bottle Curd": "Conveniently packed curd for easy storage and usage. Maintains freshness and taste for everyday needs.",
      "KT": "KT Curd Range: Affordable and consistent quality curd options designed for daily consumption without compromising taste.",
      "Curd": "Fresh, smooth, and naturally fermented curd made from high-quality milk. Supports digestion and adds richness to your meals."
    },
    variantImages: {
      "Thick Curd": "/products/thick%20curd.png",
      "Bottle Curd": "/products/bottle%20curd.png"
    }
  },
  {
    id: 3,
    name: "Traditional Buttermilk",
    category: "Butter Milk",
    packSizes: "BM Small 400, BM Big 900, Masala Butter Milk 300, Sambaram 200",
    description: "Refreshing and digestive spiced buttermilk.",
    image: "/products/pavitram%20milk.png",
    variantDescriptions: {
      "BM": "Light, refreshing, and healthy drink made from churned curd. Perfect for staying cool and hydrated.",
      "Masala": "Spiced buttermilk blended with traditional Indian flavors. A tasty and refreshing digestive drink.",
      "Sambaram": "Authentic Kerala-style spiced buttermilk with curry leaves and green chili. A perfect summer refreshment."
    },
    variantImages: {
      "Masala": "/products/masala%20butter%20milk.png"
    }
  },
  {
    id: 4,
    name: "Pure Cow Ghee",
    category: "Ghee",
    packSizes: "Ghee 50 ML, Ghee 100 ML, Ghee 200 ML, Ghee 500 ML, Ghee 1000 ML, Ghee 5000 ML",
    description:
      "Traditional granular ghee made from pure cow milk with a rich aroma.",
    image: "/products/Premium%20ghee.png",
  },
  {
    id: 5,
    name: "Bulk Purchases",
    category: "Bulk",
    packSizes: "Standard Milk, Toned Milk, Raw Milk, Skim Milk, Curd, Thick Curd, Butter Milk",
    description:
      "Premium dairy supplies crafted for bulk and commercial requirements.",
    image: "/products/bulk.png",
    variantDescriptions: {
      "Standard Milk": "Fresh and rich milk with balanced fat content, ideal for daily use in homes, hotels, and businesses.",
      "Toned Milk": "Healthy and lighter milk option with reduced fat, perfect for regular consumption and beverages.",
      "Raw Milk": "Farm-fresh, unprocessed milk sourced directly from dairy farms, suitable for traditional and commercial use.",
      "Skim Milk": "Low-fat milk designed for health-conscious consumers without compromising essential nutrients.",
      "Thick Curd": "Rich, thick, and creamy curd perfect for premium dishes and large-scale serving needs.",
      "Curd": "Freshly prepared curd with smooth texture, ideal for bulk consumption in hotels and catering services.",
      "Butter Milk": "Refreshing and light drink made from curd, perfect for cooling and hydration in bulk supply."
    },
    variantImages: {
      "Toned Milk": "/products/toned.png",
      "Thick Curd": "/products/thick%20curd.png"
    }
  },
  {
    id: 6,
    name: "Nannari Sarbath",
    category: "Beverage",
    packSizes: "750ml, 1L",
    description:
      "A cooling, traditional herbal drink perfect for refreshing yourself naturally.",
    image: "/products/nannari%20surbath.png",
  },
];

export const categories = [
  { name: "Milk", icon: "🥛", count: 1, image: "/products/pavitram%20milk.png" },
  { name: "Curd", icon: "🥣", count: 1, image: "/products/curd.png" },
  { name: "Butter Milk", icon: "🥤", count: 1, image: "/products/pavitram%20milk.png" },
  { name: "Ghee", icon: "🧈", count: 1, image: "/products/Premium%20ghee.png" },
  { name: "Bulk", icon: "📦", count: 1, image: "/products/bulk.png" },
  { name: "Beverage", icon: "🍹", count: 1, image: "/products/nannari%20surbath.png" },
];
