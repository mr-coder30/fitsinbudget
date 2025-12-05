// src/data/catalog.js

export const CATEGORIES = [
  {
    slug: "cargo-pants-under-699",
    label: "Cargo pants under ₹699",
    description: "Best-selling cargo styles under budget.",
    image: "https://via.placeholder.com/400x300?text=Cargo+Pants",
  },
  {
    slug: "kurtis-under-599",
    label: "Kurtis under ₹599",
    description: "Daily wear kurtis at sharp prices.",
    image: "https://via.placeholder.com/400x300?text=Kurtis",
  },
  {
    slug: "tshirts-under-399",
    label: "T-Shirts under ₹399",
    description: "Graphic and basic tees, all under ₹399.",
    image: "https://via.placeholder.com/400x300?text=T+Shirts",
  },
  {
    slug: "hoodies-under-999",
    label: "Hoodies under ₹999",
    description: "Cozy hoodies for every day.",
    image: "https://via.placeholder.com/400x300?text=Hoodies",
  },
];

export const PRODUCTS = {
  "cargo-pants-under-699": [
    {
      id: 1,
      title: "Slim Fit Cargo Pants",
      price: "₹649",
      image: "https://via.placeholder.com/300x400?text=Cargo+1",
      url: "https://example.com/cargo-1",
    },
    {
      id: 2,
      title: "Relaxed Fit Utility Cargo",
      price: "₹699",
      image: "https://via.placeholder.com/300x400?text=Cargo+2",
      url: "https://example.com/cargo-2",
    },
  ],
  "kurtis-under-599": [
    {
      id: 1,
      title: "Printed Cotton Kurti",
      price: "₹549",
      image: "https://via.placeholder.com/300x400?text=Kurti+1",
      url: "https://example.com/kurti-1",
    },
    {
      id: 2,
      title: "Solid Straight Kurti",
      price: "₹499",
      image: "https://via.placeholder.com/300x400?text=Kurti+2",
      url: "https://example.com/kurti-2",
    },
  ],
  "tshirts-under-399": [
    {
      id: 1,
      title: "Oversized Graphic Tee",
      price: "₹349",
      image: "https://via.placeholder.com/300x400?text=Tshirt+1",
      url: "https://example.com/tshirt-1",
    },
    {
      id: 2,
      title: "Classic Basic Tee",
      price: "₹299",
      image: "https://via.placeholder.com/300x400?text=Tshirt+2",
      url: "https://example.com/tshirt-2",
    },
  ],
  "hoodies-under-999": [
    {
      id: 1,
      title: "Fleece Zip Hoodie",
      price: "₹949",
      image: "https://via.placeholder.com/300x400?text=Hoodie+1",
      url: "https://example.com/hoodie-1",
    },
    {
      id: 2,
      title: "Pullover Hoodie",
      price: "₹899",
      image: "https://via.placeholder.com/300x400?text=Hoodie+2",
      url: "https://example.com/hoodie-2",
    },
  ],
};
