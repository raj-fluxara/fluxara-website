// src/pages/Prototype.tsx
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/sections/Footer"
import PrototypeDashboard from "@/components/PrototypeDashboard"

export default function PrototypePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24"> {/* Add top padding to account for fixed navigation */}
        <PrototypeDashboard />
      </main>
      <Footer />
    </div>
  )
}