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
            <img src="/fluxara_logo.svg" alt="Fluxara AI Logo" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#solutions" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Solutions
            </a>
            <a href="/#case-studies" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Case Studies
            </a>
            <a href="/#technology" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Technology
            </a>
            <Link to="/blog" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Blog
            </Link>
            <Link to="/platform-preview" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Platform Preview
            </Link>
            <a href="/#contact" className="text-slate-700 hover:text-orange-500 font-semibold transition-all duration-200 hover:scale-105">
              Contact
            </a>
          </div>

          <a href="mailto:ethiraj.k@fluxara.ai?subject=Inquiry about Fluxara AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment."
             className="hidden md:block">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors">
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
                  <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Home</Link>
                  <a href="/#solutions" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Solutions</a>
                  <a href="/#case-studies" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Case Studies</a>
                  <a href="/#technology" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Technology</a>
                  <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Blog</Link>
                  <Link to="/platform-preview" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Platform Preview</Link>
                  <a href="/#contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-orange-500 transition-colors">Contact</a>
                  <div className="pt-8">
                    <a href="mailto:ethiraj.k@fluxara.ai?subject=Inquiry about Fluxara AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment.">
                      <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
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