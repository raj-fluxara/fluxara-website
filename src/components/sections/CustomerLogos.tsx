import { motion } from "framer-motion";

// Import logo images - using relative paths
import energexLogo from "../../assets/logos/energex.png";
import powergenLogo from "../../assets/logos/powergen.png";
import industrialDynamicsLogo from "../../assets/logos/industrial-dynamics.png";
import refineryPartnersLogo from "../../assets/logos/refinery-partners.png";
import utilityNetworksLogo from "../../assets/logos/utility-networks.png";

const CustomerLogos = () => {
  // Company logos with imported images
  const customers = [
    {
      name: "ENERGEX",
      subtitle: "SOLUTIONS",
      logoPath: energexLogo,
      alt: "Energex Solutions Logo"
    },
    {
      name: "PowerGen",
      subtitle: "INDUSTRIES", 
      logoPath: powergenLogo,
      alt: "PowerGen Industries Logo"
    },
    {
      name: "INDUSTRIAL",
      subtitle: "DYNAMICS",
      logoPath: industrialDynamicsLogo,
      alt: "Industrial Dynamics Logo"
    },
    {
      name: "Refinery",
      subtitle: "PARTNERS",
      logoPath: refineryPartnersLogo,
      alt: "Refinery Partners Logo"
    },
    {
      name: "UTILITY",
      subtitle: "NETWORKS",
      logoPath: utilityNetworksLogo,
      alt: "Utility Networks Logo"
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Industries We Support
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Powering digital transformation across critical industries with AI-driven insights
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              className="relative flex flex-col items-center justify-center h-64 opacity-90 hover:opacity-100 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 backdrop-blur-sm p-8 group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.02, y: -4 }}
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              
              {/* Company logos */}
              <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
                <img
                  src={customer.logoPath}
                  alt={customer.alt}
                  className="h-56 w-auto max-w-[350px] object-contain hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    console.error(`Failed to load logo: ${customer.logoPath}`);
                    // Fallback to company name if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded logo: ${customer.logoPath}`);
                  }}
                />
                {/* Fallback text (hidden by default, shown if image fails) */}
                <div className="hidden text-center">
                  <div className="text-sm font-bold text-slate-700 tracking-wide">
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
        
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Fortune 500 Trusted
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Enterprise Security
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Proven ROI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;