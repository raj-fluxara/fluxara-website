import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto">
          {/* Modern flowing design without card border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-3xl"></div>
            <div className="relative text-center py-16 px-8">
              
              <div className="space-y-6 mb-8">
                <h2 className="text-3xl lg:text-4xl font-light max-w-2xl mx-auto leading-tight">
                  See the
                  <span className="font-semibold text-orange-500"> Financial Impact</span>
                  <span className="font-semibold text-slate-900"> of Unified Intelligence</span>
                </h2>
                <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
                <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Schedule a complimentary assessment and we will provide a custom ROI projection for your specific industrial assets.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="mailto:ethiraj.k@fluxara.ai?subject=Inquiry about Fluxara AI Platform&body=Hello, I saw your website and I'm interested in learning more about your AI platform. I'd like to schedule a time to discuss an ROI assessment.">
                  <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 group h-14 px-8 lg:px-10 text-base lg:text-lg">
                    Get My Free ROI Assessment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="mailto:ethiraj.k@fluxara.ai?subject=Question about Fluxara AI">
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary h-14 px-8 lg:px-10 text-base lg:text-lg">
                    Ask Our Experts a Question
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Trusted by Fortune 500 companies • Enterprise-grade security • No long-term contracts
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;