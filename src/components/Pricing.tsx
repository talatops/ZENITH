import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "$0",
      period: "",
      description: "Perfect for getting started with personal productivity",
      icon: Zap,
      features: [
        "5 days free access",
        "Maximum 10 tasks per week",
        "Cloud backup 5MB",
        "Maximum of 3 collaborators",
      ],
      cta: "Start For Free",
      variant: "hero-outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$20",
      period: "Per User / Month",
      description: "Everything you need for advanced productivity",
      icon: Crown,
      features: [
        "30 days free access",
        "Maximum 500 tasks per month",
        "Cloud backup 150MB",
        "Maximum of 25 collaborators",
      ],
      cta: "Start Free Trial",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Advanced features for teams and organizations",
      icon: Building,
      features: [
        "Unlimited access",
        "Unlimited tasks",
        "Cloud backup 1TB",
        "Unlimited collaborators",
      ],
      cta: "Contact Sales",
      variant: "hero-outline" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-hero-gradient opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Find A Plan To <span className="gradient-text">Power Your Tasks</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Service Options From Free To Paid According To Your Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-glow relative ${
                plan.popular ? 'border-primary/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-hero-gradient px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold gradient-text">
                    {plan.price}
                  </div>
                  {plan.period && (
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;