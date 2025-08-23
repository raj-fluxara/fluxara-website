import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Brain, Database, Cloud, Lock, Zap, Share2 } from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      technologies: ["Large Language Models", "Multi-Agent Systems", "Time-Series Forecasting", "Computer Vision", "RAG Pipelines"],
      color: "tech-blue"
    },
    {
      category: "Data Engineering",
      icon: Database,
      technologies: ["Real-Time Streaming", "Data Lakes", "ETL Pipelines", "Time-Series DBs", "Vector Databases"],
      color: "electric-purple"
    },
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      technologies: ["Kubernetes", "Microservices", "Auto-Scaling", "Multi-Cloud", "Edge Computing"],
      color: "success-green"
    },
    {
      category: "Security & Compliance",
      icon: Lock,
      technologies: ["Zero Trust", "Encryption", "Audit Trails", "RBAC", "Enterprise Security"],
      color: "warning-amber"
    }
  ];

  const architectureFeatures = [
    {
      title: "Retrieval-Augmented Generation",
      description: "Advanced RAG implementations that combine your enterprise data with large language models. This is the core technology that allows our platform to read your manuals and connect them to real-time events.",
      icon: Layers
    },
    {
      title: "Real-Time Processing",
      description: "Stream processing architectures capable of handling massive telemetry volumes with sub-second latency. This ensures that insights from your operational data are delivered instantly, preventing costly delays.",
      icon: Zap
    },
    {
      title: "Modern Data Stack",
      description: "Cloud-native data platforms built for scale, flexibility, and enterprise security. This robust foundation allows us to seamlessly integrate with your existing systems, both on-premise and in the cloud.",
      icon: Database
    },
    {
      title: "Multi-Agent AI Architecture",
      description: "Our platform is built on a sophisticated multi-agent architecture. Specialized AI agents—like our Context Agent, Knowledge Agent, and Reasoning Agent—collaborate to automate complex tasks, from diagnosing equipment failures to ensuring regulatory compliance. This modular approach provides greater accuracy, transparency, and scalability than monolithic AI models.",
      icon: Share2
    }
  ];

  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-tight">
            Built on
            <span className="text-gradient"> Enterprise-Grade Platform</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our platform is built on an enterprise-grade technical foundation designed to uniquely unify your operational and documentary data at scale.
          </p>
        </div>
        
        {/* Technology Stack - flowing layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {techStack.map((stack, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6 p-8 lg:p-10 bg-gradient-to-br from-white/40 via-transparent to-muted/30 rounded-3xl hover:from-white/60 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    stack.color === 'tech-blue' ? 'from-tech-blue/20 to-tech-blue/40' :
                    stack.color === 'electric-purple' ? 'from-electric-purple/20 to-electric-purple/40' :
                    stack.color === 'success-green' ? 'from-success-green/20 to-success-green/40' :
                    'from-warning-amber/20 to-warning-amber/40'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <stack.icon className={`h-8 w-8 ${
                      stack.color === 'tech-blue' ? 'text-tech-blue' :
                      stack.color === 'electric-purple' ? 'text-electric-purple' :
                      stack.color === 'success-green' ? 'text-success-green' :
                      'text-warning-amber'
                    }`} />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold">{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-muted-foreground/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Architecture Features - modern grid */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">Reference Architectures</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {architectureFeatures.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tech-blue/20 to-tech-blue/40 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enterprise Features - centered highlight */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-success-green/5 via-transparent to-tech-blue/5 rounded-3xl"></div>
          <div className="relative text-center py-16 lg:py-20 px-8 lg:px-12">
            <div className="space-y-8 mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold">Enterprise-Ready Features</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built for mission-critical applications in regulated industries</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="text-4xl lg:text-5xl font-bold text-success-green">99.99%</div>
                <div className="text-sm lg:text-base text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl lg:text-5xl font-bold text-tech-blue">Secure</div>
                <div className="text-sm lg:text-base text-muted-foreground">Enterprise-Grade</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl lg:text-5xl font-bold text-electric-purple">24/7</div>
                <div className="text-sm lg:text-base text-muted-foreground">Expert Support</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl lg:text-5xl font-bold text-warning-amber">Global</div>
                <div className="text-sm lg:text-base text-muted-foreground">Multi-Region</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;