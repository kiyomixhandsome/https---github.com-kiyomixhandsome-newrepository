
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-obsidian-dark border-t border-blood/20 text-silver mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">
              <span className="text-blood">Obsidian</span> Heart
            </h3>
            <p className="text-sm max-w-xs">
              Curating affordable dark romance and fantasy aesthetic items for the discerning collector.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link to="#" className="text-silver hover:text-blood transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-silver hover:text-blood transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-silver hover:text-blood transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold border-b border-blood/20 pb-2">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="gothic-link">All Products</Link></li>
              <li><Link to="/categories/jewelry" className="gothic-link">Jewelry</Link></li>
              <li><Link to="/categories/decor" className="gothic-link">Home Decor</Link></li>
              <li><Link to="/categories/accessories" className="gothic-link">Accessories</Link></li>
              <li><Link to="/categories/clothing" className="gothic-link">Clothing</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold border-b border-blood/20 pb-2">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="gothic-link">About Us</Link></li>
              <li><Link to="/contact" className="gothic-link">Contact Us</Link></li>
              <li><Link to="/faq" className="gothic-link">FAQ</Link></li>
              <li><Link to="/shipping" className="gothic-link">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="gothic-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold border-b border-blood/20 pb-2">Newsletter</h4>
            <p className="text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-obsidian border border-blood/30 rounded-l-sm px-3 py-2 text-sm w-full focus:outline-none focus:border-blood"
              />
              <button className="bg-blood hover:bg-blood-light px-4 rounded-r-sm transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blood/20 mt-10 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Obsidian Heart Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
