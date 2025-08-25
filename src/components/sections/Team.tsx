
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Co-Founder & CEO",
      avatar: "/placeholder.svg",
    },
    {
      name: "Jane Smith",
      title: "Co-Founder & CTO",
      avatar: "/placeholder.svg",
    },
  ];

  const credentials = [
    "20+ Years in Energy Operations & Digital Transformation",
    "Deep Expertise in SCADA & Historian Systems",
    "Certified Cloud & Data Architects",
    "Proven Success in Energy & Manufacturing",
    "Industrial AI & Document Intelligence Systems",
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          
          {/* Centered header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
              <span className="font-semibold text-orange-500">Houston-Based</span>
              <span className="font-semibold text-slate-900"> Industrial AI Experts</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story side */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="space-y-6 text-base lg:text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  We founded Fluxara in the heart of Texas' industrial corridor after spending a combined 20 years implementing enterprise data systems for the energy sector. 
                </p>
                <p className="text-muted-foreground">
                  We saw firsthand that the biggest challenge wasn't a lack of data, but the critical gap between that data and the documented procedures needed to act on it. So, we built the platform we knew the industry needed—one that unifies operations and documentation to deliver not just alerts, but complete, actionable intelligence.
                </p>
              </div>
            </div>
            
            {/* Credentials side */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-muted/40 rounded-3xl"></div>
                <div className="relative p-8 lg:p-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">Our Expertise</h3>
                    <ul className="space-y-4">
                      {credentials.map((credential, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start space-x-3 group cursor-pointer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0 group-hover:text-orange-600 transition-colors duration-200" />
                          </motion.div>
                          <span className="text-sm lg:text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-200">{credential}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
