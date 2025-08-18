import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TaskInterface from "@/components/TaskInterface";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TaskInterface />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
