
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-playfair font-bold mb-4 text-blood">404</h1>
          <p className="text-2xl text-silver mb-8 font-gothic">The page you seek has vanished into the shadows</p>
          <div className="w-16 h-0.5 bg-blood mx-auto my-6"></div>
          <p className="text-muted-foreground mb-8">
            Perhaps it was merely an illusion, or has been consumed by the darkness.
          </p>
          <Link 
            to="/" 
            className="blood-btn inline-block"
          >
            Return to the Realm
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
