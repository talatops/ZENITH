import { Zap, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "All Features",
        "Pricing",
        "Integrations",
        "API",
      ],
    },
    {
      title: "Information",
      links: [
        "FAQ",
        "Blog",
        "Support",
        "Contact",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Contact Us",
        "Press Kit",
      ],
    },
    {
      title: "Social",
      links: [
        "Facebook",
        "Instagram",
        "Twitter",
        "LinkedIn",
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ZENITH</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The ultimate productivity tool for achievers who want to get things done.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-card hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-card hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-card hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors hover:text-glow"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 ZENITH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;