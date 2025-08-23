import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="/sustainiq_logo.svg" alt="SustainIQ AI Logo" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Solutions
            </a>
            <a href="#case-studies" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Case Studies
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Technology
            </a>
            <Link to="/blog" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Blog
            </Link>
            <Link to="/platform-preview" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Platform Preview
            </Link>
            <a href="#contact" className="text-muted-foreground hover:text-primary font-bold transition-colors">
              Contact
            </a>
          </div>

          <a href="mailto:ethiraj.k@sustainiq.ai?subject=Inquiry about SustainIQ AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment."
             className="hidden md:block">
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Get Free Assessment
            </Button>
          </a>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col h-full pt-8 space-y-4">
                  <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Home</Link>
                  <a href="/#solutions" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Solutions</a>
                  <a href="/#case-studies" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Case Studies</a>
                  <a href="/#technology" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Technology</a>
                  <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Blog</Link>
                  <Link to="/platform-preview" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Platform Preview</Link>
                  <a href="/#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">Contact</a>
                  <div className="pt-8">
                    <a href="mailto:ethiraj.k@sustainiq.ai?subject=Inquiry about SustainIQ AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment.">
                      <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                        Get Free Assessment
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;