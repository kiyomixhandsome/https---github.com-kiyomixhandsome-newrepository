
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-obsidian-dark to-amethyst-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-playfair font-bold mb-4">Join Our Dark Circle</h2>
            <div className="gothic-divider">
              <span className="px-4">Exclusive Updates</span>
            </div>
            <p className="text-silver max-w-xl mx-auto mt-4">
              Subscribe to our newsletter and be the first to know about new collections, 
              special offers, and exclusive events in our dark fantasy universe.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-obsidian border border-blood/30 rounded-l-sm sm:rounded-r-none rounded-r-sm px-4 py-3 text-sm focus:outline-none focus:border-blood"
            />
            <Button className="blood-btn mt-2 sm:mt-0 rounded-l-sm sm:rounded-l-none rounded-r-sm">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
