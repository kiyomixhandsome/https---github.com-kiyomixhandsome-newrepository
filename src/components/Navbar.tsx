
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-obsidian-dark/90 backdrop-blur-sm border-b border-blood/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold text-white">
            <span className="text-blood">Obsidian</span> Heart <span className="text-blood">Emporium</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="gothic-link">Products</Link>
            <Link to="/categories" className="gothic-link">Categories</Link>
            <Link to="/about" className="gothic-link">About</Link>
            <Link to="/contact" className="gothic-link">Contact</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors">
              <Heart size={20} />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-blood text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-blood text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-obsidian/95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <Link to="/" className="text-3xl font-playfair font-bold text-white" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blood">Obsidian</span> Heart <span className="text-blood">Emporium</span>
          </Link>
          <div className="flex flex-col items-center space-y-6 text-xl">
            <Link to="/products" className="gothic-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/categories" className="gothic-link" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/about" className="gothic-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="gothic-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <div className="flex space-x-6 pt-8">
            <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors">
              <Search size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-silver hover:text-blood hover:bg-obsidian-light transition-colors">
              <Heart size={24} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
