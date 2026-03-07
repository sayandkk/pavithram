export interface Product {
  id: number;
  name: string;
  category: string;
  packSizes: string;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "Classic Banana Chips", category: "Snacks", packSizes: "100g, 250g, 500g", description: "Thinly sliced Nendran bananas fried in pure coconut oil." },
  { id: 2, name: "Roasted Rice Powder", category: "Flours", packSizes: "500g, 1kg", description: "Double-roasted, fine-grain powder for perfect Puttu." },
  { id: 3, name: "Sambar Powder", category: "Spices", packSizes: "50g, 100g", description: "A secret blend of 12 roasted spices for authentic taste." },
  { id: 4, name: "Spicy Murukku", category: "Snacks", packSizes: "200g", description: "Traditional crunchy snack made with rice flour and cumin." },
  { id: 5, name: "Palakkadan Matta Rice", category: "Grains", packSizes: "5kg, 10kg", description: "Nutrient-rich, premium quality red parboiled rice." },
  { id: 6, name: "Turmeric Powder", category: "Spices", packSizes: "100g, 250g", description: "High-curcumin turmeric sourced from local farmers." },
  { id: 7, name: "Jackfruit Chips", category: "Snacks", packSizes: "150g", description: "Seasonal specialty, vacuum-fried for maximum crunch." },
  { id: 8, name: "Appam/Idiyappam Mix", category: "Flours", packSizes: "500g", description: "Ready-to-cook mix for soft, white traditional breakfast." },
  { id: 9, name: "Unniyappam Mix", category: "Ready-Mix", packSizes: "500g", description: "Just add water/jaggery for traditional sweet fritters." },
  { id: 10, name: "Meat Masala", category: "Spices", packSizes: "100g", description: "Robust spice blend for traditional Kerala style curries." },
];

export const categories = [
  { name: "Snacks & Savories", icon: "🍌", count: 3 },
  { name: "Traditional Spice Blends", icon: "🌶️", count: 3 },
  { name: "Rice Products & Flours", icon: "🌾", count: 3 },
  { name: "Breakfast Essentials", icon: "☕", count: 1 },
];
