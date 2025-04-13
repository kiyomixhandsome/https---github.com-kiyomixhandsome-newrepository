import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { CheckCircle2, Filter, Star } from "lucide-react";

// Sample product data (in a real app, this would come from a database)
const products = [
  {
    id: 1,
    name: "Obsidian Crystal Pendant",
    price: 29.99,
    image: "/obsidian-pendant.jpg",
    category: "Jewelry",
    isNew: true,
    isSale: false,
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 2,
    name: "Gothic Rose Candle Holder",
    price: 24.99,
    originalPrice: 34.99,
    image: "/candle-holder.jpg",
    category: "Home Decor",
    isNew: false,
    isSale: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 3,
    name: "Midnight Raven Earrings",
    price: 19.99,
    image: "/raven-earrings.jpg",
    category: "Jewelry",
    isNew: true,
    isSale: false,
    rating: 4.2,
    reviews: 8,
  },
  {
    id: 4,
    name: "Blood Moon Art Print",
    price: 15.99,
    image: "/moon-print.jpg",
    category: "Wall Art",
    isNew: false,
    isSale: false,
    rating: 4.6,
    reviews: 18,
  },
  {
    id: 5,
    name: "Velvet Gothic Cushion Cover",
    price: 22.99,
    image: "/cushion-cover.jpg",
    category: "Home Decor",
    isNew: false,
    isSale: false,
    rating: 4.3,
    reviews: 15,
  },
  {
    id: 6,
    name: "Black Rose Incense Holder",
    price: 18.99,
    originalPrice: 25.99,
    image: "/incense-holder.jpg",
    category: "Home Decor",
    isNew: false,
    isSale: true,
    rating: 4.7,
    reviews: 22,
  },
  {
    id: 7,
    name: "Dark Forest Wall Mirror",
    price: 39.99,
    image: "/wall-mirror.jpg",
    category: "Home Decor",
    isNew: true,
    isSale: false,
    rating: 4.4,
    reviews: 10,
  },
  {
    id: 8,
    name: "Gothic Cathedral Jewelry Box",
    price: 34.99,
    image: "/jewelry-box.jpg",
    category: "Accessories",
    isNew: false,
    isSale: false,
    rating: 4.9,
    reviews: 28,
  },
];

const categories = [
  "All Categories",
  "Jewelry",
  "Home Decor",
  "Wall Art",
  "Accessories",
  "Clothing",
];

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    return inPriceRange && inCategory;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    // Default: featured - no specific sorting
    return 0;
  });

  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Navbar />
      
      <div className="py-8 bg-gradient-to-b from-obsidian-dark to-obsidian">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Our Products</h1>
          <p className="text-silver text-lg">Discover our collection of dark aesthetic treasures</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <div className="gothic-card p-4">
              <h3 className="font-playfair text-xl mb-4 flex items-center">
                <Filter size={18} className="mr-2 text-blood" /> Filters
              </h3>
              
              <div className="space-y-6">
                {/* Category filter */}
                <div>
                  <h4 className="font-playfair text-lg mb-3 text-silver">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center w-full text-left p-2 rounded-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blood/20 text-blood"
                            : "hover:bg-obsidian-light"
                        }`}
                      >
                        {selectedCategory === category && (
                          <CheckCircle2 size={16} className="mr-2 text-blood" />
                        )}
                        {selectedCategory !== category && (
                          <div className="w-4 h-4 mr-2 rounded-full border border-silver"></div>
                        )}
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price range filter */}
                <div>
                  <h4 className="font-playfair text-lg mb-3 text-silver">Price Range</h4>
                  <Slider
                    defaultValue={[0, 50]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-silver">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Other potential filters could be added here */}
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="lg:w-3/4">
            {/* Sort and results count */}
            <div className="gothic-card p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-silver mb-3 sm:mb-0">{sortedProducts.length} products found</p>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-silver mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-obsidian-light border border-blood/20 rounded-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blood"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {/* Products grid */}
            <div className="product-grid">
              {sortedProducts.map((product) => (
                <div key={product.id} className="gothic-card overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    {/* Product image (placeholder) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amethyst-dark/30 to-obsidian-light flex items-center justify-center">
                      <span className="text-4xl text-silver/20 font-gothic">Image</span>
                    </div>
                    
                    {/* Labels */}
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-blood px-2 py-1 text-xs font-medium">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-2 right-2 bg-amethyst px-2 py-1 text-xs font-medium">
                        Sale
                      </span>
                    )}
                    
                    {/* Quick actions */}
                    <div className="absolute inset-0 bg-obsidian-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="blood-btn">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs text-silver mb-1">{product.category}</div>
                    <h3 className="font-playfair font-medium text-lg mb-1 transition-colors group-hover:text-blood">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-blood mr-2">
                        <Star size={14} className="fill-blood" />
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                      <span className="text-xs text-silver">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      {product.originalPrice ? (
                        <>
                          <span className="text-blood font-medium">${product.price.toFixed(2)}</span>
                          <span className="text-muted-foreground line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="text-white font-medium">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Empty state message */}
            {sortedProducts.length === 0 && (
              <div className="gothic-card p-8 text-center">
                <h3 className="font-playfair text-xl mb-2">No products found</h3>
                <p className="text-silver mb-4">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  variant="outline" 
                  className="obsidian-btn"
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setPriceRange([0, 50]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
