
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
