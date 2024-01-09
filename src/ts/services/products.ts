import { Product } from "../models/Product";
import { Size } from "../models/Size";

const pant1: Product = new Product(
  "001",
  "Casual Denim Jeans",
  "Comfortable denim jeans for a casual look.",
  "Jeans",
  799,
  1,
  [new Size("32/32"), new Size("33/33"), new Size("34/34")],
  "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const shoe1: Product = new Product(
  "002",
  "Running Shoes",
  "Lightweight running shoes for active individuals.",
  "Shoes",
  999,
  1,
  [new Size("9"), new Size("10"), new Size("11")],
  "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const shirt1: Product = new Product(
  "003",
  "Formal Dress Shirt",
  "Elegant dress shirt for formal occasions.",
  "Shirts",
  899,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://plus.unsplash.com/premium_photo-1661328328273-fc66c6208167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const jacket1: Product = new Product(
  "004",
  "Warm Winter Jacket",
  "Insulated jacket to keep you warm during winter.",
  "Jackets",
  1799,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1613422448762-c13f05ae758a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const wallet1: Product = new Product(
  "005",
  "Leather Wallet",
  "Classic leather wallet for everyday use.",
  "Accessories",
  399,
  1,
  [new Size("no-size")],
  "https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const pant2: Product = new Product(
  "006",
  "Cotton Sweatpants",
  "Comfortable sweatpants made from breathable cotton.",
  "Pants",
  699,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const glasses1: Product = new Product(
  "007",
  "Sunglasses",
  "Stylish sunglasses for a cool and trendy look.",
  "Accessories",
  1299,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const shoe2: Product = new Product(
  "008",
  "Hiking Boots",
  "Durable hiking boots for outdoor adventures.",
  "Shoes",
  1399,
  1,
  [new Size("9"), new Size("10"), new Size("11")],
  "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const sweater1: Product = new Product(
  "009",
  "Knit Sweater",
  "Warm and cozy knit sweater for chilly days.",
  "Sweaters",
  1199,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1603045720683-5c6840a8eeca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const bag1: Product = new Product(
  "010",
  "Printed Tote Bag",
  "Stylish tote bag with unique prints.",
  "Bags",
  1899,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const pant3: Product = new Product(
  "011",
  "Slim Fit Chinos",
  "Modern slim fit chinos for a polished look.",
  "Pants",
  1299,
  1,
  [new Size("32/32"), new Size("33/33"), new Size("34/34")],
  "https://images.unsplash.com/photo-1499202977705-65f436dac18a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const shirt2: Product = new Product(
  "012",
  "Graphic T-Shirt",
  "Casual t-shirt with a cool graphic design.",
  "Shirts",
  399,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1468283268201-f31115a19e2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const scarf1: Product = new Product(
  "013",
  "Wool Scarf",
  "Soft wool scarf for added warmth in winter.",
  "Accessories",
  699,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1623832101940-647285e32a58?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const bag2: Product = new Product(
  "014",
  "Laptop Backpack",
  "Spacious backpack with a dedicated laptop compartment.",
  "Bags",
  999,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1668114844900-537ab91478b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const hat1: Product = new Product(
  "015",
  "Baseball Cap",
  "Classic baseball cap for a sporty look.",
  "Hats",
  299,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1586622977567-bc45e4ae72fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const suit1: Product = new Product(
  "016",
  "Formal Black Suit",
  "Elegant black suit for formal events.",
  "Suits",
  3999,
  1,
  [new Size("42"), new Size("44"), new Size("46")],
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const blouse1: Product = new Product(
  "017",
  "Printed Blouse",
  "Fashionable blouse with unique prints.",
  "Blouses",
  799,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const watch1: Product = new Product(
  "018",
  "Classic Watch",
  "Timeless classic watch for any occasion.",
  "Accessories",
  1899,
  1,
  [new Size("no-size")],
  "https://images.unsplash.com/photo-1628608569034-e214532ddfde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const shoe3: Product = new Product(
  "019",
  "Summer Sandals",
  "Comfortable sandals for a casual summer look.",
  "Shoes",
  599,
  1,
  [new Size("9"), new Size("10"), new Size("11")],
  "https://images.unsplash.com/photo-1569397467199-35627caed0b4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const skirt1: Product = new Product(
  "020",
  "Denim Skirt",
  "Versatile denim skirt for a trendy style.",
  "Skirts",
  999,
  1,
  [new Size("Small"), new Size("Medium"), new Size("Large")],
  "https://images.unsplash.com/photo-1573198567671-f17a7a75f206?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

export let products: Product[] = [
  pant1,
  pant2,
  jacket1,
  glasses1,
  suit1,
  watch1,
  skirt1,
  hat1,
  shoe1,
  shirt1,
  wallet1,
  shoe2,
  sweater1,
  bag1,
  pant3,
  shirt2,
  scarf1,
  bag2,
  blouse1,
  shoe3,
];

console.log(products);
