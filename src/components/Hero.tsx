import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Unlock new productivity levels for achievers 🚀
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Boost Your 
              <span className="gradient-text text-glow"> Productivity</span>
              <br />
              With ZENITH
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              The Ultimate Task Management Tool To Keep You On Top Of Your Game And Accomplish Your Goals.
              Experience the future of productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Phone mockups */}
          <div className="relative">
            {/* 3D Spline container - You can integrate Spline here */}
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="phone-mockup floating bg-card-gradient border border-primary/20 rounded-[3rem] p-6 w-72 h-[580px] relative z-20">
                <div className="bg-background rounded-[2.5rem] h-full p-4 overflow-hidden">
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold gradient-text">ZENITH</div>
                    <div className="text-xs text-muted-foreground">Task Manager</div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="card-glow p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                          <div className="text-sm">Task {i} - Priority High</div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Due today</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="phone-mockup floating-delayed bg-card-gradient border border-accent/20 rounded-[3rem] p-6 w-72 h-[580px] absolute -right-8 top-12 z-10 opacity-80">
                <div className="bg-background rounded-[2.5rem] h-full p-4 overflow-hidden">
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold gradient-text">Analytics</div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                  </div>
                  <div className="space-y-4">
                    <div className="card-glow p-3">
                      <div className="text-sm font-medium">Daily Progress</div>
                      <div className="mt-2 bg-muted rounded-full h-2">
                        <div className="bg-hero-gradient h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="card-glow p-3">
                      <div className="text-sm font-medium">Streak</div>
                      <div className="text-2xl font-bold gradient-text">12 days</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-20 left-10 w-12 h-12 bg-primary/20 rounded-full blur-sm floating"></div>
              <div className="absolute bottom-20 right-10 w-8 h-8 bg-accent/20 rounded-full blur-sm floating-delayed"></div>
              <Zap className="absolute top-1/2 left-0 w-6 h-6 text-secondary floating" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;