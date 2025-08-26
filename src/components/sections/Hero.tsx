// Enhanced Hero.tsx with better cross-platform consistency
import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Shield, Zap, TrendingUp } from "lucide-react";
import {
  motion,
  useReducedMotion,
  MotionConfig,
  useMotionValue,
  animate,
} from "framer-motion";
import DataTransformationBackground from "../DataTransformationBackground";
import SimpleTestBackground from "../SimpleTestBackground";

export default function Hero() {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-100 print:overflow-visible print:bg-white min-h-[70vh] sm:min-h-[70vh] pt-24 sm:pt-20 safe-top overflow-hidden">
        
        {/* 3D Animated Background - Data Transformation */}
        <DataTransformationBackground className="print:hidden" />
        
        {/* Fallback: Industrial background patterns (for when Three.js isn't available) */}
        <div className="pointer-events-none absolute inset-0 print:hidden">
          {/* Grid pattern suggesting industrial blueprints */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
              linear-gradient(180deg, rgba(100, 116, 139, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
          {/* Diagonal lines for depth */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                rgba(100, 116, 139, 0.08) 0px,
                rgba(100, 116, 139, 0.08) 2px,
                transparent 2px,
                transparent 80px
              )
            `
          }} />
        </div>

      {/* Scale.com-style centered layout */}
       <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
         <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
           
           {/* Main content - offset left for asymmetry */}
           <div className="lg:col-span-8 lg:col-start-1">
             <div className="max-w-4xl">
               
               {/* Varied typography hierarchy */}
               <div className="space-y-5 mb-10">
                 <div className="space-y-4">
                   {/* Platform identifier - similar to HubSpot */}
                   <div className="inline-block">
                     <span className="text-sm font-bold text-orange-600 tracking-wider uppercase">
                       FLUXARA INDUSTRIAL AI PLATFORM
                     </span>
                   </div>
                   
                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
                    Turn industrial data into
                    <br />
                    <span className="font-bold text-slate-900">instant</span> <span className="font-mono text-orange-600">intelligence</span>
                   </h1>
                   
                   <div className="w-12 h-1 bg-orange-500 mt-6 mb-4"></div>
                 </div>

                 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
                   Transform scattered operational data into actionable insights with AI. Connect equipment sensors, maintenance records, and compliance documentation to predict failures before they happen and optimize your entire operation.
                 </p>
               </div>

               {/* Sophisticated CTA design */}
               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <motion.a
                   className="inline-flex items-center justify-center h-12 px-6 bg-orange-500 text-white font-medium text-base
                              hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                              hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transform-gpu"
                   href="#contact"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   Get ROI Assessment
                 </motion.a>
                 <motion.a
                   className="inline-flex items-center justify-center h-12 px-6 border border-slate-300 text-slate-700 font-medium text-base
                              hover:border-orange-300 hover:text-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2
                              hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transform-gpu"
                   href="#case-studies"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   See Case Studies
                 </motion.a>
               </div>

               {/* Minimal trust indicators */}
               <div className="flex items-center space-x-6 text-sm text-slate-500">
                 <span>Fortune 500 trusted</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                 <span>Enterprise security</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                 <span>30-day pilot available</span>
               </div>
             </div>
           </div>

           {/* Animated stats sidebar - only visible on larger screens */}
           <div className="lg:col-span-4 hidden xl:block">
             <div className="space-y-8 text-right">
               
               <motion.div 
                 className="group p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
               >
                 <div className="text-4xl font-bold text-orange-500 mb-1 group-hover:scale-105 transition-transform duration-300">
                   <CountUp to={1.8} decimals={1} prefix="$" suffix="M" duration={2.5} />
                 </div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">Avg Annual Savings</div>
               </motion.div>

               <motion.div 
                 className="group p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.7, duration: 0.8 }}
               >
                 <div className="text-4xl font-bold text-slate-700 mb-1 group-hover:scale-105 transition-transform duration-300">
                   <CountUp to={28} suffix="%" duration={2.2} />
                 </div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">MTTR Reduction</div>
               </motion.div>

               <motion.div 
                 className="group p-4 rounded-lg hover:bg-white/50 transition-all duration-300"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.9, duration: 0.8 }}
               >
                 <div className="text-4xl font-bold text-slate-600 mb-1 group-hover:scale-105 transition-transform duration-300">
                   <CountUp to={94} suffix="%" duration={2.8} />
                 </div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">Compliance Rate</div>
               </motion.div>

             </div>
           </div>

         </div>
       </div>
    </section>
  );
}
/* Enhanced ProofChip component with better accessibility and mobile design */
function ProofChip({
  icon: Icon,
  valueClass = "",
  prefix = "",
  suffix = "",
  to,
  decimals = 0,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  valueClass?: string;
  prefix?: string;
  suffix?: string;
  to: number;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 rounded-xl border border-border bg-background/90 backdrop-blur-sm p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className={`flex-shrink-0 ${valueClass}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="leading-tight min-w-0 flex-1">
        <div className={`text-lg sm:text-xl lg:text-2xl font-extrabold ${valueClass}`}>
          <CountUp to={to} decimals={decimals} prefix={prefix} suffix={suffix} />
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

/* Enhanced CountUp with better performance and accessibility */
function CountUp({
  to,
  decimals = 0,
  duration = 1.1,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVal(to);
      return;
    }

    const controls = animate(mv, to, {
      duration: duration,
      ease: "easeOut",
    });
    
    const unsub = mv.on("change", (v) => setVal(v));
    
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, mv, duration, prefersReducedMotion]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  return <span>{prefix}{formatted}{suffix}</span>;
}