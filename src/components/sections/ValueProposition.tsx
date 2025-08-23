import { Card } from "@/components/ui/card";
import { Brain, Database, Gauge, Lock } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Brain,
      title: "Operational Intelligence Platform",
      description: "Our platform doesn't just analyze data; it connects your SCADA systems with OEM manuals and maintenance procedures. By combining real-time telemetry with equipment documentation, we deliver insights with true operational context.",
      gradient: "from-light-green to-green-accent"
    },
    {
      icon: Gauge,
      title: "From Alert to Work Order in Minutes",
      description: "Transform equipment alarms into actionable work plans. We process your historian and SCADA data in real-time, automatically surfacing the correct maintenance procedure from your documentation library.",
      gradient: "from-green-accent to-light-green"
    },
    {
      icon: Database,
      title: "Operations Data + Maintenance Procedures",
      description: "We connect to your existing infrastructure. Our platform integrates with Wonderware, GE, Honeywell SCADA systems and your document repositories, creating a single source of truth for operational and procedural knowledge.",
      gradient: "from-light-green to-electric-purple"
    },
    {
      icon: Lock,
      title: "Environmental Permit Compliance",
      description: "Achieve continuous compliance monitoring. Our platform monitors your emissions and operational data against EPA permits and safety regulations, automatically flagging deviations and generating audit-ready reports for regulatory agencies.",
      gradient: "from-warning-amber to-green-accent"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
              We solve your
              <span className="font-semibold text-orange-500"> toughest</span>
              <span className="font-semibold text-slate-900"> operational challenges</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Instead of generic AI promises, here are the specific problems we solve for industrial operations teams.
            </p>
          </div>
        </div>
        
        {/* Professional feature grid with varied layouts */}
        <div className="space-y-20">
          
          {/* Problem 1 - Highlighted main feature */}
          <div className="border-l-4 border-orange-500 pl-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <Brain className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 leading-tight">
                  Your SCADA alerts don't include the <span className="text-orange-500">fix</span>
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl">
                  {values[0].description}
                </p>
              </div>
              <div className="lg:col-span-4">
                <blockquote className="border-l-2 border-slate-300 pl-4 py-2">
                  <div className="text-sm font-medium text-slate-500 mb-1">Today's Reality</div>
                  <div className="text-slate-600 italic leading-relaxed">
                    "Alert triggered → Engineer hunts through manuals → Hours to resolution"
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Problems 2 & 3 - Side by side */}
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <Gauge className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                Alerts without context are just <span className="text-orange-500">noise</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {values[1].description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <Database className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                Siloed systems, <span className="text-orange-500">scattered</span> knowledge
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {values[2].description}
              </p>
            </div>

          </div>

          {/* Problem 4 - Full width with emphasis */}
          <div className="bg-slate-50 rounded-lg p-8 lg:p-12 border border-slate-200">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shadow-md">
                  <Lock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 text-center mb-4">
                Compliance is <span className="text-orange-500">reactive</span>, not proactive
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
                {values[3].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;