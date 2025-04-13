
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Obsidian Crystal Pendant",
    price: 29.99,
    image: "/obsidian-pendant.jpg",
    category: "Jewelry",
    isNew: true,
    isSale: false,
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
  },
  {
    id: 3,
    name: "Midnight Raven Earrings",
    price: 19.99,
    image: "/raven-earrings.jpg",
    category: "Jewelry",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Blood Moon Art Print",
    price: 15.99,
    image: "/moon-print.jpg",
    category: "Wall Art",
    isNew: false,
    isSale: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Featured Products</h2>
          <div className="gothic-divider">
            <span className="px-4">Exquisite Treasures</span>
          </div>
          <p className="text-silver max-w-2xl mx-auto">
            Discover our most coveted dark aesthetic items, carefully curated for the discerning collector.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
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
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-obsidian hover:bg-blood text-white rounded-full"
                    >
                      <ShoppingCart size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-obsidian hover:bg-blood text-white rounded-full"
                    >
                      <Heart size={18} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-xs text-silver mb-1">{product.category}</div>
                <h3 className="font-playfair font-medium text-lg mb-1 transition-colors group-hover:text-blood">
                  <Link to={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
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
        
        <div className="text-center mt-12">
          <Button className="obsidian-btn">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
