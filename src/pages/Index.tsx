import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import UseCases from "@/components/sections/UseCases";
import CaseStudies from "@/components/sections/CaseStudies";
import Technology from "@/components/sections/Technology";
import Team from "@/components/sections/Team";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ValueProposition />
      <UseCases />
      <CaseStudies />
      <Technology />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
