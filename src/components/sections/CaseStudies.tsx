import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Database } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Regional Energy Provider (Texas Gulf Coast)",
      industry: "Energy",
      challenge: "Manual environmental permit compliance reviews taking 2-3 weeks to complete, creating operational bottlenecks and regulatory compliance risks with EPA reporting deadlines.",
      solution: "We deployed our unified platform to connect their real-time operational data to their library of regulatory documents. Our AI agents now continuously monitor operations against compliance rules, automatically analyzing and citing the relevant documentation to slash review times.",
      results: [
        { metric: "60%", description: "Reduction in review cycle time", icon: Clock, color: "tech-blue" },
        { metric: "95%", description: "Accuracy in compliance detection", icon: TrendingUp, color: "success-green" },
        { metric: "24/7", description: "Continuous monitoring capability", icon: Database, color: "electric-purple" }
      ],
      quote: "The platform transformed our regulatory workflow from a manual, error-prone process to an intelligent, automated system that scales with our growth.",
      role: "Head of Regulatory Affairs"
    },
    {
      company: "Midstream Oil & Gas Operator",
      industry: "Oil & Gas",
      challenge: "Processing massive volumes of SCADA and historian data from 12 distributed pipeline facilities while maintaining real-time visibility and operational control.",
      solution: "We implemented our unified intelligence platform to process 475GB of daily SCADA and historian data. The system doesn't just flag anomalies; it instantly cross-references them with digitized OEM manuals and maintenance procedures to provide operations engineers with immediate, actionable diagnostic insights.",
      results: [
        { metric: "475GB", description: "Daily SCADA & historian data", icon: Database, color: "tech-blue" },
        { metric: "<1s", description: "Real-time response latency", icon: Clock, color: "electric-purple" },
        { metric: "30%", description: "Improved operational efficiency", icon: TrendingUp, color: "success-green" }
      ],
      quote: "This platform gives us unprecedented visibility into our operations, enabling data-driven decisions that directly impact our bottom line.",
      role: "CTO, Digital Operations"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
              Two real deployments,
              <span className="font-semibold text-slate-900"> measurable results</span>
            </h2>
            <div className="w-16 h-1 bg-electric-purple mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Here's what happened when energy companies stopped accepting "that's just how things work" and demanded better.
            </p>
          </div>
        </div>
        
        <div className="space-y-12 lg:space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-muted/60 rounded-3xl"></div>
              
              <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16 p-8 lg:p-16">
                
                {/* Main content */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-3xl lg:text-4xl font-bold">{study.company}</h3>
                      <Badge variant="outline" className="border-tech-blue text-tech-blue text-sm px-3 py-1">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-muted-foreground">Challenge</h4>
                      <p className="text-base lg:text-lg leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-muted-foreground">Solution</h4>
                      <p className="text-base lg:text-lg leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-tech-blue pl-6 py-4 bg-muted/30 rounded-r-lg">
                    <p className="italic text-lg lg:text-xl font-medium leading-relaxed">"{study.quote}"</p>
                    <footer className="mt-4 text-base text-muted-foreground">
                      — {study.role}, {study.company}
                    </footer>
                  </blockquote>
                </div>
                
                {/* Results sidebar */}
                <div className="lg:col-span-5 space-y-8">
                  <h4 className="text-2xl font-bold">Key Results</h4>
                  <div className="space-y-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-colors duration-300">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                            result.color === 'tech-blue' ? 'from-tech-blue/20 to-tech-blue/40' :
                            result.color === 'electric-purple' ? 'from-electric-purple/20 to-electric-purple/40' :
                            result.color === 'success-green' ? 'from-success-green/20 to-success-green/40' :
                            'from-warning-amber/20 to-warning-amber/40'
                          } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <result.icon className={`h-6 w-6 ${
                              result.color === 'tech-blue' ? 'text-tech-blue' :
                              result.color === 'electric-purple' ? 'text-electric-purple' :
                              result.color === 'success-green' ? 'text-success-green' :
                              'text-warning-amber'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className={`text-3xl font-bold ${
                              result.color === 'tech-blue' ? 'text-tech-blue' :
                              result.color === 'electric-purple' ? 'text-electric-purple' :
                              result.color === 'success-green' ? 'text-success-green' :
                              'text-warning-amber'
                            }`}>{result.metric}</div>
                            <div className="text-sm lg:text-base text-muted-foreground mt-1">{result.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default CaseStudies;