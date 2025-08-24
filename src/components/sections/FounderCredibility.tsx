import { Card } from "@/components/ui/card";

const FounderCredibility = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border shadow-card">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-500">E</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Built by Energy Industry Veterans
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    20+ years in energy operations, digital transformation, and industrial AI
                  </p>
                </div>
                
                <blockquote className="text-lg text-foreground italic border-l-4 border-orange-500 pl-6 py-2">
                  "Having managed operations at energy facilities and led digital transformation initiatives, 
                  I understand the critical gap between operational data and actionable insights. 
                  Fluxara bridges that gap with solutions built for real industrial environments."
                </blockquote>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-700">Fortune 500</div>
                    <div className="text-sm text-muted-foreground">Energy Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-600">$100M+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderCredibility;