import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp, Search, Shield } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "We go beyond simple alerts. Our platform analyzes real-time telemetry from your equipment and instantly cross-references it with your OEM manuals and maintenance history to provide a complete diagnostic, including the likely root cause and the correct repair procedure.",
      benefits: ["Reduce unplanned downtime by up to 35%", "Accelerate root-cause analysis from days to minutes", "Equip technicians with procedural guidance"],
      industries: ["Energy", "Manufacturing", "Utilities"],
      color: "tech-blue"
    },
    {
      icon: TrendingUp,
      title: "Demand & Failure Forecasting",
      description: "Our forecasting models learn from both your historical time-series data and your documented operational limits. This unified approach allows us to more accurately predict future equipment failures, energy demand, and potential supply chain bottlenecks.",
      benefits: ["Improve forecast accuracy with contextual data", "Optimize maintenance schedules and inventory", "Prevent operational disruptions before they occur"],
      industries: ["Oil & Gas", "Power Generation"],
      color: "electric-purple"
    },
    {
      icon: Search,
      title: "Intelligent Document Retrieval",
      description: "This is more than just search. When an operational event occurs, your team can ask plain-language questions and get instant answers sourced directly from your manuals, contracts, and compliance documents, with citations included.",
      benefits: ["Find critical procedures and specs in seconds", "Verify vendor SLAs against real-time performance", "Reduce reliance on institutional knowledge"],
      industries: [],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "Achieve continuous, audit-ready compliance. Our platform monitors your real-time operational data, like emissions, and compares it against your digitized environmental permits and safety regulations to automatically flag and document any deviation.",
      benefits: ["Cut compliance reporting time by over 90%", "Prevent violations with real-time alerts", "Simplify audit prep with automated data trails"],
      industries: ["Energy"],
      color: "warning-amber"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
            <span className="font-semibold text-orange-500">Solutions</span>
            <span className="font-semibold text-slate-900"> for Industrial Operations</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our solutions are built on a single, unified platform that combines your real-time operational data with your enterprise documentation to deliver true, end-to-end intelligence.
          </p>
        </div>
        
        {/* Glean.com-style flowing sections */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Alternating layout pattern */}
          {useCases.map((useCase, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
              
              {/* Content side */}
              <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:col-start-6 lg:order-2' : ''}`}>
                <div className={`flex items-center space-x-4 ${index % 2 === 1 ? 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse lg:space-x-4' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-muted-foreground/30">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-2xl">{useCase.description}</p>
                </div>
                
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className={`flex items-start space-x-3 ${index % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse lg:space-x-3 lg:text-right' : ''}`}>
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-orange-500"></div>
                        <span className="text-sm lg:text-base text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual side - placeholder for future enhancement */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-orange-500 flex items-center justify-center">
                    <useCase.icon className="h-12 w-12 text-white" />
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

export default UseCases;