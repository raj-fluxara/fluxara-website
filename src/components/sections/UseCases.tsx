import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, TrendingUp, Search, Shield, AlertTriangle, CheckCircle, Clock, Activity, FileText, BarChart3, Zap, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";
import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";

// Static Counter - no animation to prevent flickering
const StaticCounter = ({ 
  target, 
  suffix = "", 
  prefix = "", 
  decimals = 0
}) => {
  const displayValue = decimals > 0 ? target.toFixed(decimals) : Math.floor(target);
  
  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// Static values - no more live updates to prevent flickering
const useStaticValue = (value) => {
  return value;
};

// Sophisticated animation variants for enterprise feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Premium easing curve
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  glow: {
    boxShadow: [
      "0 0 0 rgba(249, 115, 22, 0)",
      "0 0 20px rgba(249, 115, 22, 0.3)",
      "0 0 0 rgba(249, 115, 22, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Static decorative elements - no animation
const StaticDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute top-4 right-6 w-1 h-1 bg-orange-500/40 rounded-full" />
    <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-orange-500/30 rounded-full" />
    <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-orange-500/20 rounded-full" />
  </div>
);

// Static metric card - no animations
const MetricCard = ({ icon: Icon, label, value, threshold, status }) => (
  <div
    className={`relative rounded-lg p-3 border overflow-hidden ${
      status === 'critical' ? 'bg-red-50 border-red-200' :
      status === 'warning' ? 'bg-orange-50 border-orange-200' :
      'bg-slate-50 border-slate-200'
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
    
    <div className="relative">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className={`w-4 h-4 ${
          status === 'critical' ? 'text-red-600' :
          status === 'warning' ? 'text-orange-600' :
          'text-slate-600'
        }`} />
        <span className={`text-xs font-medium ${
          status === 'critical' ? 'text-red-600' :
          status === 'warning' ? 'text-orange-600' :
          'text-slate-600'
        }`}>{label}</span>
      </div>
      
      <div className={`text-lg font-bold mb-1 ${
        status === 'critical' ? 'text-red-700' :
        status === 'warning' ? 'text-orange-700' :
        'text-slate-700'
      }`}>
        {value}
      </div>
      
      {threshold && (
        <div className={`text-xs ${
          status === 'critical' ? 'text-red-600' :
          status === 'warning' ? 'text-orange-600' :
          'text-slate-600'
        }`}>
          {threshold}
        </div>
      )}
    </div>
    
    {/* Static status indicator */}
    {status === 'critical' && (
      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
    )}
  </div>
);

// Mock data for dashboards
const predictiveData = [
  { time: '00:00', temp: 185, pressure: 3.2, vibration: 0.8 },
  { time: '04:00', temp: 188, pressure: 3.4, vibration: 1.1 },
  { time: '08:00', temp: 192, pressure: 3.8, vibration: 1.4 },
  { time: '12:00', temp: 198, pressure: 4.1, vibration: 1.8 },
  { time: '16:00', temp: 205, pressure: 4.5, vibration: 2.2 },
  { time: '20:00', temp: 210, pressure: 4.8, vibration: 2.6 }
];

const forecastData = [
  { month: 'Jan', demand: 85, predicted: 88 },
  { month: 'Feb', demand: 78, predicted: 82 },
  { month: 'Mar', demand: 92, predicted: 95 },
  { month: 'Apr', demand: 88, predicted: 90 },
  { month: 'May', demand: 96, predicted: 98 },
  { month: 'Jun', demand: null, predicted: 102 }
];

// Mini Dashboard Components
const PredictiveDashboard = () => {
  // Static values - no updates
  const staticTemp = 212.3;
  const staticVibration = 2.4;
  const staticPressure = 4.7;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-5 border border-slate-200/60 text-xs overflow-hidden"
    >
      {/* Static background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-red-500/3" />
      <StaticDecorations />
      
      {/* Static header */}
      <div className="relative flex items-center justify-between mb-4 p-3 -m-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          <h4 className="font-bold text-slate-800 tracking-tight">Compressor Unit COMP-001</h4>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-200/60">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="text-red-700 font-bold tracking-wide uppercase text-xs">Critical Alert</span>
        </div>
      </div>
      
      {/* Static metrics grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <MetricCard
          icon={AlertTriangle}
          label="Temperature"
          value={<StaticCounter target={staticTemp} suffix="°F" decimals={1} />}
          threshold="Threshold: 195°F"
          status="critical"
        />
        <MetricCard
          icon={Activity}
          label="Vibration"
          value={<StaticCounter target={staticVibration} suffix=" mm/s" decimals={1} />}
          threshold="Threshold: 2.0 mm/s"
          status="warning"
        />
        <MetricCard
          icon={Zap}
          label="Pressure"
          value={<StaticCounter target={staticPressure} suffix=" PSI" decimals={1} />}
          threshold="Normal Range"
          status="normal"
        />
      </div>
    
      {/* Static chart */}
      <div className="relative h-24 mb-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5" />
        <div className="relative p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-600">Temperature Trend</span>
            <div className="flex items-center space-x-1 text-xs text-red-600">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>Rising</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={40}>
            <LineChart data={predictiveData}>
              <XAxis dataKey="time" tick={false} axisLine={false} />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="temp" 
                stroke="#ef4444" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Static AI recommendation */}
      <div className="relative rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-200/60 overflow-hidden">
        <div className="relative p-3">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="text-blue-700 font-bold text-sm tracking-tight">AI Recommendation</span>
            <div className="ml-auto px-2 py-1 rounded-full bg-green-500/20 border border-green-400/40">
              <span className="text-green-700 text-xs font-medium">Active</span>
            </div>
          </div>
          <p className="text-blue-900 text-xs leading-relaxed font-medium">
            "Bearing failure likely within{' '}
            <span className="text-red-600 font-bold">
              4.5-6
            </span>{' '}
            hours. See Procedure{' '}
            <span className="text-blue-700 font-bold cursor-pointer hover:text-blue-800">
              M-201.3
            </span>{' '}
            for emergency shutdown and replacement."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ForecastDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-slate-800">30-Day Demand Forecast</h4>
        <div className="flex items-center space-x-1">
          <BarChart3 className="w-3 h-3 text-green-600" />
          <span className="text-green-600 font-medium">96% Accuracy</span>
        </div>
      </div>
    
      <div className="h-24 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={forecastData}>
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis hide />
            <Area type="monotone" dataKey="demand" stackId="1" stroke="#3b82f6" fill="#dbeafe" />
            <Area type="monotone" dataKey="predicted" stackId="2" stroke="#f97316" fill="#fed7aa" strokeDasharray="4 4" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-green-50 rounded p-2 border border-green-200">
          <div className="text-green-600 font-medium">Next Failure Risk</div>
          <div className="text-lg font-bold text-green-700">Low</div>
          <div className="text-green-600">Turbine G-5B: 45 days</div>
        </div>
        <div className="bg-orange-50 rounded p-2 border border-orange-200">
          <div className="text-orange-600 font-medium">Peak Demand</div>
          <div className="text-lg font-bold text-orange-700">102 MW</div>
          <div className="text-orange-600">Expected: June 15</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-slate-600">
        <CheckCircle className="w-3 h-3 text-green-500" />
        <span>Inventory levels optimized for forecast</span>
      </div>
    </motion.div>
  );
};

const DocumentDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-slate-800">Intelligent Search</h4>
        <div className="flex items-center space-x-1">
          <Eye className="w-3 h-3 text-blue-600" />
          <span className="text-blue-600 font-medium">0.3s response</span>
        </div>
      </div>
    
    <div className="bg-slate-50 rounded p-2 mb-3 border">
      <div className="flex items-center space-x-2">
        <Search className="w-3 h-3 text-slate-500" />
        <span className="text-slate-700">"compressor bearing replacement procedure"</span>
      </div>
    </div>
    
    <div className="space-y-2 mb-3">
      <div className="bg-blue-50 rounded p-2 border border-blue-200">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-blue-800">Maintenance Manual M-201</span>
          <span className="text-blue-600">98% match</span>
        </div>
        <p className="text-blue-700 text-xs leading-tight">
          "Section 4.3.2: Emergency bearing replacement for Model XB-5000 compressors. Estimated time: 6-8 hours..."
        </p>
      </div>
      
      <div className="bg-green-50 rounded p-2 border border-green-200">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-green-800">Safety Procedure SP-105</span>
          <span className="text-green-600">94% match</span>
        </div>
        <p className="text-green-700 text-xs leading-tight">
          "Lockout/Tagout requirements for compressor maintenance. Required PPE: Level 2 protection..."
        </p>
      </div>
      
      <div className="bg-purple-50 rounded p-2 border border-purple-200">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-purple-800">Parts Catalog PC-440</span>
          <span className="text-purple-600">89% match</span>
        </div>
        <p className="text-purple-700 text-xs leading-tight">
          "Bearing Assembly Part #XB-5000-BR-2A. Current inventory: 3 units. Lead time: 2 days..."
        </p>
      </div>
    </div>
    
      <div className="flex items-center space-x-2 text-slate-600">
        <Clock className="w-3 h-3 text-green-500" />
        <span>Generated complete work order in 2.1 seconds</span>
      </div>
    </motion.div>
  );
};

const ComplianceDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-slate-800">Compliance Monitor</h4>
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-3 h-3 text-green-600" />
          <span className="text-green-600 font-medium">All Clear</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-green-50 rounded p-2 border border-green-200">
          <div className="text-green-600 font-medium">Emissions</div>
          <div className="text-lg font-bold text-green-700">12.3 ppm</div>
          <div className="text-green-600">Limit: 15.0 ppm</div>
        </div>
        <div className="bg-green-50 rounded p-2 border border-green-200">
          <div className="text-green-600 font-medium">Noise Level</div>
          <div className="text-lg font-bold text-green-700">78 dB</div>
          <div className="text-green-600">Limit: 85 dB</div>
        </div>
      </div>
    
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between py-1 border-b border-slate-100">
          <span className="text-slate-600">EPA Permit #TX-001-23</span>
          <CheckCircle className="w-3 h-3 text-green-500" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-100">
          <span className="text-slate-600">OSHA Safety Standards</span>
          <CheckCircle className="w-3 h-3 text-green-500" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-100">
          <span className="text-slate-600">Local Ordinance #2024-15</span>
          <CheckCircle className="w-3 h-3 text-green-500" />
        </div>
      </div>
      
      <div className="bg-blue-50 rounded p-2 border border-blue-200">
        <div className="flex items-center space-x-1 mb-1">
          <FileText className="w-3 h-3 text-blue-600" />
          <span className="text-blue-600 font-semibold">Auto-Generated Report</span>
        </div>
        <p className="text-blue-800 text-xs leading-tight">
          "Daily compliance summary ready for EPA filing. All parameters within permitted ranges for 24-hour period."
        </p>
      </div>
    </motion.div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "",
      benefits: [
        "Real-time telemetry analysis with OEM manual cross-referencing",
        "Reduce unplanned downtime by up to 35%", 
        "Accelerate root-cause analysis from days to minutes",
        "Provide technicians with step-by-step repair procedures"
      ],
      industries: ["Energy", "Manufacturing", "Utilities"],
      color: "tech-blue",
      dashboard: PredictiveDashboard
    },
    {
      icon: TrendingUp,
      title: "Demand & Failure Forecasting",
      description: "",
      benefits: [
        "Unified forecasting using historical data + operational limits",
        "Improve forecast accuracy with maintenance record context",
        "Optimize schedules and inventory based on failure predictions",
        "Identify supply chain bottlenecks weeks in advance"
      ],
      industries: ["Oil & Gas", "Power Generation"],
      color: "electric-purple",
      dashboard: ForecastDashboard
    },
    {
      icon: Search,
      title: "Intelligent Document Retrieval",
      description: "",
      benefits: [
        "Plain-language search across manuals, contracts, and compliance docs",
        "Find critical procedures and specs in seconds",
        "Verify vendor SLAs against real-time performance automatically",
        "Make institutional knowledge accessible to all team members"
      ],
      industries: [],
      color: "orange",
      dashboard: DocumentDashboard
    },
    {
      icon: Shield,
      title: "Automated Compliance",
      description: "",
      benefits: [
        "Real-time monitoring against digitized environmental permits",
        "Cut compliance reporting time by over 90%",
        "Prevent violations with real-time parameter alerts",
        "Automated audit trails and documentation"
      ],
      industries: ["Energy"],
      color: "warning-amber",
      dashboard: ComplianceDashboard
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
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}
            >
              
              {/* Content side */}
              <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:col-start-6 lg:order-2' : ''}`}>
                <div className={`flex items-center space-x-4 ${index % 2 === 1 ? 'lg:justify-end lg:flex-row-reverse lg:space-x-reverse lg:space-x-4' : ''}`}>
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <useCase.icon className="h-8 w-8 text-orange-600" />
                  </motion.div>
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
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 hover:border-orange-200 hover:bg-orange-50/40 transition-all duration-300"
                      >
                        <span className={`text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                          {benefit}
                        </span>
                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dashboard mockup side */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl transform rotate-1"></div>
                  <div className="relative bg-slate-50 rounded-3xl p-4 border border-slate-200 shadow-lg">
                    <useCase.dashboard />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default UseCases;