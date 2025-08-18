import { Brain, List, Bell, Users, Shield, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Intuitive Interface",
      description: "Our User-Friendly Interface Makes It Easy To Manage Your Tasks And Stay Organized.",
    },
    {
      icon: List,
      title: "Customizable Lists",
      description: "Create Custom Lists To Organize Your Tasks And Prioritize What's Most Important.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Set Reminders And Receive Notifications To Ensure You Never Miss A Deadline.",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Share Lists With Others, Assign Tasks, And Collaborate In Real-Time To Get More Done.",
    },
    {
      icon: Shield,
      title: "Security And Privacy",
      description: "Your Data Is Always Secure And Private With Our State-Of-The-Art Security Measures.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Our Friendly Support Team Is Always Here To Help You With Any Questions Or Issues.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Experience The Ultimate Task Management
            <br />
            <span className="gradient-text">Solution With ZENITH's Robust Features</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Take Control Of Your Workload And Boost Your Productivity With Customizable Lists, Smart Reminders, And More
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-glow group p-4 sm:p-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-glow transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;