
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blood/20 to-obsidian-light flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl text-silver/20 font-gothic">Shop Image</span>
                </div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-1 border border-blood/40 rounded-md -z-10 translate-x-3 translate-y-3"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Dark Fantasy</h2>
            <div className="gothic-divider mb-6">
              <span className="px-4">The Story</span>
            </div>
            
            <p className="text-silver/90 mb-4">
              Obsidian Heart Emporium was born from a passion for dark romance and fantasy aesthetics, 
              coupled with a desire to make these treasures accessible to all who seek to embrace the darkness.
            </p>
            
            <p className="text-silver/90 mb-6">
              Our carefully curated collection features affordable pieces that don't compromise on quality or authenticity. 
              Each item is selected to evoke feelings of mystery, elegance, and dark allure - perfect for 
              expressing your unique aesthetic at a price that won't drain your life essence.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-1 w-4 bg-blood mt-3 mr-3"></div>
                <p className="text-silver/80">Ethically sourced materials with attention to quality</p>
              </div>
              <div className="flex items-start">
                <div className="h-1 w-4 bg-blood mt-3 mr-3"></div>
                <p className="text-silver/80">Accessible pricing without sacrificing aesthetic appeal</p>
              </div>
              <div className="flex items-start">
                <div className="h-1 w-4 bg-blood mt-3 mr-3"></div>
                <p className="text-silver/80">Inspired by dark romance and gothic fantasy literature</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button className="obsidian-btn">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
