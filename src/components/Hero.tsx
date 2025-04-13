
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-obsidian-dark min-h-[70vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay with texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian to-obsidian-light opacity-90 z-10"></div>
        
        {/* Background image (design element) */}
        <div className="absolute inset-0 bg-[url('/gothic-texture.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 animate-fade-in">
            Embrace the <span className="text-blood animate-pulse-subtle">Darkness</span> Within
          </h1>
          <p className="text-silver text-lg md:text-xl mb-8 max-w-xl">
            Discover affordable gothic treasures and dark aesthetic items for your collection at Obsidian Heart Emporium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="blood-btn text-lg px-6 py-3">
              Shop Now
            </Button>
            <Button variant="outline" className="obsidian-btn flex items-center justify-center gap-2">
              Explore Collections <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian to-transparent z-20"></div>
    </div>
  );
};

export default Hero;
