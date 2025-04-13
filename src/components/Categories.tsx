
import { Link } from 'react-router-dom';

// Sample category data
const categories = [
  {
    id: 1,
    name: "Jewelry",
    description: "Elegant gothic and dark fantasy jewelry pieces",
    image: "/jewelry-category.jpg",
    count: 24,
  },
  {
    id: 2,
    name: "Home Decor",
    description: "Mystical and enchanting home decoration items",
    image: "/decor-category.jpg",
    count: 18,
  },
  {
    id: 3,
    name: "Accessories",
    description: "Dark aesthetic accessories to complete your look",
    image: "/accessories-category.jpg",
    count: 15,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-obsidian relative">
      <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Shop by Category</h2>
          <div className="gothic-divider">
            <span className="px-4">Explore Our Collections</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id}>
              <div className="gothic-card h-full overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  {/* Category image (placeholder) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blood-dark/20 to-obsidian-light flex items-center justify-center">
                    <span className="text-3xl text-silver/20 font-gothic">{category.name}</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blood/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-playfair text-xl">Browse {category.name}</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-playfair font-medium text-xl transition-colors group-hover:text-blood">
                      {category.name}
                    </h3>
                    <span className="text-sm text-blood-light">{category.count} Items</span>
                  </div>
                  <p className="text-silver">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
