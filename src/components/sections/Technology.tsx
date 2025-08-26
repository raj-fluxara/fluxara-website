import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Technology = () => {
  const coreAdvantages = [
    {
      title: "AI That Actually Works",
      description: "Advanced ML models reduce false alarms by 85% while catching subtle equipment issues before they become failures.",
      icon: Brain
    },
    {
      title: "Autonomous Investigation",
      description: "Multi-agent AI system automatically investigates anomalies, searches your manuals, and provides complete diagnostic reports.",
      icon: Share2
    },
    {
      title: "Minutes, Not Hours",
      description: "Complete root cause analysis and repair recommendations delivered in minutes instead of days of manual investigation.",
      icon: Zap
    }
  ];


  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
            <span className="font-semibold text-orange-500">Technology</span>
            <span className="font-semibold text-slate-900"> That Delivers Results</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just give you alerts—we give you complete answers with actionable repair plans.
          </p>
        </div>
        
        {/* Core Technical Advantages */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">{advantage.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        
        {/* Our Value Proposition - centered highlight */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-slate-50 rounded-3xl"></div>
          <div className="relative text-center py-12 lg:py-16 px-8 lg:px-12">
            <div className="space-y-8 mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold">Beyond Traditional Monitoring</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our AI doesn't just detect problems—it investigates, diagnoses, and provides actionable repair plans automatically.
              </p>
            </div>
            
            <div className="text-center mb-6">
              <Link to="/technology">
                <Button variant="outline" size="lg" className="group">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;