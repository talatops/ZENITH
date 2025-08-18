import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-card-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Subscribe Now! and Get
            <br />
            <span className="gradient-text">Discounts Up To 70%</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sign Up Today And Start Enjoying Amazing Benefits, Including Discounts!
          </p>
          
          <div className="card-glow p-6 max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="pl-10 bg-background border-border focus:border-primary"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;