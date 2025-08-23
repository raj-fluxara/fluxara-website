import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/sustainiq_logo.svg" alt="SustainIQ AI Logo" className="h-14" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming enterprise data into intelligent action through advanced AI & 
              analytics platforms built for regulated industries.
            </p>
          </div>
          
          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Real-Time IoT Analytics</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Time-Series Forecasting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Enterprise Search & Chat</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Regulatory Intelligence</a></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Energy & Utilities</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Manufacturing</a></li>
            </ul>
          </div>
          
          {/* Contact */}
               {/* Contact */}
                 {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:customer-care@sustainiq.ai" className="hover:text-foreground transition-colors">
                  customer_care@sustainiq.ai
                </a>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+1-555-0123" className="hover:text-foreground transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Linkedin className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="https://linkedin.com/company/sustainiq-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  77 Sugar Creek Center Blvd Ste. 600<br />
                  Sugar Land, TX 77478
                </span>
              </li>
            </ul>
          </div>

        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 SustainIQ AI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;