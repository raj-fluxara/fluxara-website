import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/fluxara_logo.svg" alt="Fluxara AI Logo" className="h-14" />
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
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="text-sm space-y-1">
              <motion.div 
                className="flex items-center space-x-2 text-muted-foreground mb-1 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Mail className="h-4 w-4 shrink-0 group-hover:text-orange-500 transition-colors duration-200" />
                </motion.div>
                <a href="mailto:customer-care@fluxara.ai" className="hover:text-orange-500 transition-colors">
                  customer-care@fluxara.ai
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-muted-foreground mb-1 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Phone className="h-4 w-4 shrink-0 group-hover:text-orange-500 transition-colors duration-200" />
                </motion.div>
                <a href="tel:+1-555-0123" className="hover:text-orange-500 transition-colors">
                  +1 (555) 012-3456
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-muted-foreground mb-1 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Linkedin className="h-4 w-4 shrink-0 group-hover:text-orange-500 transition-colors duration-200" />
                </motion.div>
                <a href="https://linkedin.com/company/fluxara-ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  LinkedIn
                </a>
              </motion.div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  77 Sugar Creek Center Blvd Ste. 600<br />
                  Sugar Land, TX 77478
                </span>
              </div>
            </div>
          </div>

        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Fluxara. All rights reserved.
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