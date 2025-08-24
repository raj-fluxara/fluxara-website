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

export default function Hero() {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-100 print:overflow-visible print:bg-white min-h-[70vh] pt-20 safe-top overflow-hidden">
        {/* Industrial background patterns */}
        <div className="pointer-events-none absolute inset-0">
          {/* Grid pattern suggesting industrial blueprints */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
              linear-gradient(180deg, rgba(100, 116, 139, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
          {/* Diagonal lines for depth */}
          <div className="absolute inset-0 opacity-10" style={{
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

        {/* Subtle floating elements - reduced and repositioned */}
        <div className="pointer-events-none absolute top-20 right-20 h-32 w-32 animate-float rounded-full bg-orange-500/10 blur-2xl print:hidden will-change-transform" />
        <div
          className="pointer-events-none absolute bottom-20 left-20 h-24 w-24 animate-float rounded-full bg-tech-blue/8 blur-xl print:hidden will-change-transform"
          style={{ animationDelay: "1.2s" }}
        />

      {/* Scale.com-style centered layout */}
       <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
         <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
           
           {/* Main content - offset left for asymmetry */}
           <div className="lg:col-span-8 lg:col-start-1">
             <div className="max-w-4xl">
               
               {/* Varied typography hierarchy */}
               <div className="space-y-5 mb-10">
                 <div className="space-y-3">
                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
                    Turn industrial data into
                    <br />
                    <span className="font-bold text-slate-900">instant</span> <span className="font-mono text-orange-600">intelligence</span>
                   </h1>
                   
                   <div className="w-12 h-1 bg-orange-500 mt-6 mb-4"></div>
                 </div>

                 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
                   For Energy, Oil & Gas, and Manufacturing. We connect your operational data with equipment manuals and procedures to predict failures, automate compliance, and optimize workflows.
                 </p>
               </div>

               {/* Sophisticated CTA design */}
               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <a
                   className="inline-flex items-center justify-center h-12 px-6 bg-orange-500 text-white font-medium text-base
                              hover:bg-orange-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                   href="#contact"
                 >
                   Get ROI Assessment
                 </a>
                 <a
                   className="inline-flex items-center justify-center h-12 px-6 border border-slate-300 text-slate-700 font-medium text-base
                              hover:border-slate-400 hover:text-slate-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                   href="#case-studies"
                 >
                   See Case Studies
                 </a>
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

           {/* Minimal stats sidebar - only visible on larger screens */}
           <div className="lg:col-span-4 hidden xl:block">
             <div className="space-y-8 text-right">
               
               <div>
                 <div className="text-4xl font-bold text-orange-500 mb-1">$1.8M</div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">Avg Annual Savings</div>
               </div>

               <div>
                 <div className="text-4xl font-bold text-slate-700 mb-1">28%</div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">MTTR Reduction</div>
               </div>

               <div>
                 <div className="text-4xl font-bold text-slate-600 mb-1">94%</div>
                 <div className="text-sm text-slate-500 uppercase tracking-wide">Compliance Rate</div>
               </div>

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