import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Subscribe Now! and Get
            <br />
            <span className="gradient-text">Discounts Up To 70%</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            Sign Up Today And Start Enjoying Amazing Benefits, Including Discounts!
          </p>
          
          <div className="card-glow p-4 sm:p-6 max-w-md mx-auto">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="pl-10 sm:pl-12 bg-background border-border focus:border-primary text-sm sm:text-base"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;