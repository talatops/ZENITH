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
          
          {/* Right content - Web Dashboard mockup */}
          <div className="relative">
            {/* 3D Spline container - You can integrate Spline here */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Main dashboard container */}
              <div className="dashboard-mockup bg-card-gradient border border-primary/20 rounded-3xl p-8 w-full max-w-lg relative z-20 floating">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-hero-gradient rounded-full pulse-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full pulse-glow"></div>
                
                {/* Dashboard header */}
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold gradient-text mb-2">ZENITH</div>
                  <div className="text-sm text-muted-foreground">Task Manager Dashboard</div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="card-glow p-3 text-center">
                    <div className="text-lg font-bold gradient-text">12</div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                  <div className="card-glow p-3 text-center">
                    <div className="text-lg font-bold gradient-text">8</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="card-glow p-3 text-center">
                    <div className="text-lg font-bold gradient-text">4</div>
                    <div className="text-xs text-muted-foreground">Overdue</div>
                  </div>
                </div>

                {/* Task list */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold mb-2">Today's Priority Tasks</div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="card-glow p-3 group hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Task {i} - Priority High</div>
                          <div className="text-xs text-muted-foreground">Due today</div>
                        </div>
                        <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          High
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-6 card-glow p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Daily Progress</span>
                    <span className="text-sm text-primary">75%</span>
                  </div>
                  <div className="bg-muted rounded-full h-2">
                    <div className="bg-hero-gradient h-2 rounded-full w-3/4 pulse-glow"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating web elements */}
              <div className="absolute top-20 -left-10 card-glow p-4 floating-delayed bg-card-gradient border border-accent/20 rounded-2xl">
                <div className="text-sm font-medium text-accent">🔥 Streak</div>
                <div className="text-2xl font-bold gradient-text">12 days</div>
              </div>
              
              <div className="absolute bottom-20 -right-10 card-glow p-4 floating bg-card-gradient border border-secondary/20 rounded-2xl">
                <div className="text-sm font-medium text-secondary">⚡ Focus</div>
                <div className="text-lg font-bold gradient-text">2h 15m</div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-10 left-1/4 w-12 h-12 bg-primary/10 rounded-full blur-sm floating"></div>
              <div className="absolute bottom-10 right-1/4 w-8 h-8 bg-accent/10 rounded-full blur-sm floating-delayed"></div>
              <Zap className="absolute top-1/2 right-0 w-6 h-6 text-secondary floating opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;