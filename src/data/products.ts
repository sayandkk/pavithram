export interface Product {
  id: number;
  name: string;
  category: string;
  packSizes: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premiums Cow Milk",
    category: "Milk",
    packSizes: "500ml, 1L",
    description:
      "Farm-fresh, pasteurized cow milk delivered daily for your health.",
    image: "/products/pavitram%20milk.png",
  },
  {
    id: 2,
    name: "Pure Cow Ghee",
    category: "Ghee",
    packSizes: "200ml, 500ml, 1L",
    description:
      "Traditional granular ghee made from pure cow milk with a rich aroma.",
    image: "/products/Premium%20ghee.png",
  },
  {
    id: 3,
    name: "Fresh Curd",
    category: "Dairy",
    packSizes: "250g, 500g",
    description: "Thick, creamy, and natural curd set to perfection.",
    image: "/products/curd.png",
  },
  {
    id: 4,
    name: "Pure Butter",
    category: "Dairy",
    packSizes: "100g, 200g, 500g",
    description:
      "Unsalted and salted variants of creamy butter made from fresh cream.",
    image: "/products/buttter.png",
  },
  {
    id: 5,
    name: "Fresh Paneer",
    category: "Dairy",
    packSizes: "200g, 500g",
    description:
      "Soft and fresh cottage cheese, perfect for your favorite recipes.",
    image: "/products/curd.png",
  },
  {
    id: 6,
    name: "Flavored Milk",
    category: "Milk",
    packSizes: "200ml",
    description:
      "Delicious and nutritious milk in chocolate, strawberry, and badam flavors.",
    image: "/products/pavitram%20milk.png",
  },
  {
    id: 7,
    name: "Fresh Cream",
    category: "Dairy",
    packSizes: "250ml",
    description: "Silky smooth fresh cream for desserts and cooking.",
    image: "/products/Premium%20ghee.png",
  },
  {
    id: 8,
    name: "Traditional Buttermilk",
    category: "Dairy",
    packSizes: "500ml",
    description: "Refreshing and digestive spiced buttermilk.",
    image: "/products/pavitram%20milk.png",
  },
];

export const categories = [
  {
    name: "Fresh Milk",
    icon: "🥛",
    count: 2,
    image: "/products/pavitram%20milk.png",
  },
  { name: "Pure Ghee", icon: "🧈", count: 1, image: "/products/Premium%20ghee.png" },
  { name: "Dairy Essentials", icon: "🥣", count: 5, image: "/products/buttter.png" },
];
