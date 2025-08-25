import { motion } from "framer-motion";

const CustomerLogos = () => {
  // Realistic company placeholders - styled to look like actual logos
  const customers = [
    {
      name: "ENERGEX",
      subtitle: "SOLUTIONS",
      icon: "⚡",
      color: "text-slate-700"
    },
    {
      name: "PowerGen",
      subtitle: "INDUSTRIES", 
      icon: "⚙️",
      color: "text-slate-700"
    },
    {
      name: "INDUSTRIAL",
      subtitle: "DYNAMICS",
      icon: "🏭",
      color: "text-slate-700"
    },
    {
      name: "Refinery",
      subtitle: "PARTNERS",
      icon: "🛢️",
      color: "text-slate-700"
    },
    {
      name: "UTILITY",
      subtitle: "NETWORKS",
      icon: "🔌",
      color: "text-slate-700"
    },
    {
      name: "ProcessTech",
      subtitle: "SYSTEMS",
      icon: "⚗️",
      color: "text-slate-700"
    }
  ];

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
            Trusted by Industry Leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              className="flex flex-col items-center justify-center h-16 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              {/* Realistic company logo placeholders */}
              <div className="text-center flex items-center space-x-2">
                <div className="text-lg opacity-70">
                  {customer.icon}
                </div>
                <div>
                  <div className={`text-sm font-bold ${customer.color} tracking-wide`}>
                    {customer.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                    {customer.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            Fortune 500 energy companies • Enterprise-grade security • Proven ROI
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;