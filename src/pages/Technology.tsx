import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Brain, Database, Cloud, Lock, Zap, Share2, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TechnologyPage = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Advanced AI Pipeline",
      description: "Our proprietary AI system processes massive data streams to identify true equipment issues while dramatically reducing false alarms.",
      benefits: [
        "85% reduction in false positives vs traditional systems",
        "Real-time processing of high-volume industrial data",
        "Learns your equipment's unique behavior patterns",
        "No expensive failure data labeling required"
      ]
    },
    {
      icon: Share2,
      title: "Autonomous Investigation",
      description: "When issues are detected, our AI automatically investigates by analyzing operational data and searching your documentation to find root causes.",
      benefits: [
        "Complete diagnostic reports in minutes, not hours",
        "Searches manuals and procedures automatically",
        "Correlates multiple data sources for accurate diagnosis",
        "Works with your existing maintenance workflows"
      ]
    },
    {
      icon: Layers,
      title: "Actionable Work Orders",
      description: "Get detailed repair recommendations with specific procedures, parts lists, and safety protocols extracted directly from your enterprise knowledge.",
      benefits: [
        "Specific repair procedures from your manuals",
        "Required parts identification and sourcing",
        "Safety protocols and compliance requirements",
        "Integration with CMMS and work order systems"
      ]
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      description: "Seamlessly connects with your existing industrial systems and scales with your operations while maintaining enterprise-grade security.",
      benefits: [
        "Works with major SCADA and historian systems",
        "SOC 2 Type II compliance and enterprise security",
        "Scales from single facilities to enterprise deployments",
        "99.9% uptime SLA with 24/7 monitoring"
      ]
    }
  ];

  const integrationCapabilities = [
    {
      category: "Industrial Systems",
      description: "Seamlessly integrates with your existing industrial infrastructure",
      items: [
        "Major SCADA platforms (Wonderware, iFIX, WinCC, Ignition)",
        "Historian systems (PI, GE Proficy, Wonderware)",
        "Standard industrial protocols (OPC-UA, Modbus, MQTT)",
        "Real-time and batch data processing"
      ]
    },
    {
      category: "Enterprise Applications", 
      description: "Works with your maintenance and business systems",
      items: [
        "CMMS platforms (SAP, Maximo, Fiix, UpKeep)",
        "ERP system integration for parts and inventory",
        "Work order automation and routing",
        "Custom API integrations available"
      ]
    },
    {
      category: "Security & Compliance",
      description: "Enterprise-grade security that meets industrial standards",
      items: [
        "SOC 2 Type II certified security controls",
        "Data encryption at rest and in transit",
        "Role-based access controls and audit trails",
        "Compliance with industrial cybersecurity frameworks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4">
                <span className="font-semibold text-orange-500">Technology</span>
                <span className="font-semibold text-slate-900"> That Delivers</span>
              </h1>
              <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our AI platform transforms how industrial companies detect, diagnose, and resolve equipment issues - delivering measurable ROI from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Core Capabilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                          <capability.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold">{capability.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">{capability.description}</p>
                      
                      <div className="space-y-3">
                        {capability.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Enterprise Integration</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {integrationCapabilities.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full">
                      <h3 className="text-xl font-bold mb-4 text-orange-600">{category.category}</h3>
                      <p className="text-sm text-slate-600 mb-6">{category.description}</p>
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-lg text-muted-foreground">Real deployments delivering measurable ROI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4 p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500">Minutes</div>
                <div className="text-lg font-medium">Time to Resolution</div>
                <div className="text-sm text-muted-foreground">vs hours of manual investigation</div>
              </div>
              <div className="text-center space-y-4 p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500">85%</div>
                <div className="text-lg font-medium">Fewer False Alarms</div>
                <div className="text-sm text-muted-foreground">vs traditional monitoring systems</div>
              </div>
              <div className="text-center space-y-4 p-8 bg-white/60 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500">24/7</div>
                <div className="text-lg font-medium">Autonomous Operation</div>
                <div className="text-sm text-muted-foreground">no manual intervention required</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-slate-600 mb-6">Ready to see detailed technical specifications and implementation details?</p>
              <a href="mailto:ethiraj.k@fluxara.ai?subject=Technical Deep Dive Request&body=Hi, I'd like to schedule a technical deep dive to learn more about Fluxara's AI platform architecture and implementation details.">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Schedule Technical Deep Dive
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Enterprise-Ready Platform</h2>
              <p className="text-lg text-muted-foreground">Built for mission-critical industrial operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Security & Compliance", 
                  description: "SOC 2 Type II certified with encryption at rest and in transit. Complies with industrial security standards."
                },
                {
                  icon: Cloud,
                  title: "Scalable Infrastructure",
                  description: "Auto-scaling cloud infrastructure that handles petabytes of industrial data with 99.9% uptime SLA."
                },
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description: "Sub-second latency for anomaly detection with continuous learning and model optimization."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;