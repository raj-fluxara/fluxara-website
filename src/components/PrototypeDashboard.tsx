// src/components/PrototypeDashboard.tsx
import { useEffect, useMemo, useState } from "react"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"
import {
  AlertTriangle, CheckCircle, XCircle, Activity, Thermometer, Gauge, Droplets, Zap, FileText, ArrowLeft, ArrowRight, Shield,
} from "lucide-react"

const SHOW_TOP_KPIS = false

/** Types */
type Screen = "dashboard" | "investigation" | "report" | "diagnostic" | "compliance"
type AssetStatus = "normal" | "warning" | "alert" | "operational" | "critical"
type Asset = {
  id: string
  name: string
  type: string
  status: AssetStatus
  location: string
  lastMaintenance: string
}
type TelemetryPoint = {
  time: string
  temperature: number
  pressure: number
  flow: number
}
type AlertType = "critical" | "warning" | "info"
type SystemAlert = {
  id: number
  type: AlertType
  equipment: string
  message: string
  timestamp: string
}

/** Demo Data */
const INITIAL_ASSETS: Asset[] = [
  { id: "COMP-001", name: "Compressor Unit", type: "Compressor", status: "alert", location: "Unit 3 - Bay A", lastMaintenance: "2023-11-15" },
  { id: "VALVE-001", name: "Main Valve", type: "Valve", status: "warning", location: "Header North", lastMaintenance: "2023-12-20" },
  { id: "PUMP-001", name: "Primary Pump", type: "Pump", status: "operational", location: "Skid 4", lastMaintenance: "2024-01-15" },
  { id: "TURB-005", name: "Turbine G-5B", type: "Turbine", status: "normal", location: "Building B - Floor 1", lastMaintenance: "2024-01-20" },
]

const INITIAL_ALERTS: SystemAlert[] = [
  { id: 1, type: "critical", equipment: "COMP-001", message: "Temperature exceeding safe limits", timestamp: new Date().toLocaleString() },
  { id: 2, type: "warning", equipment: "VALVE-001", message: "Pressure fluctuation detected", timestamp: new Date(Date.now() - 5 * 60 * 1000).toLocaleString() },
  { id: 3, type: "info", equipment: "PUMP-001", message: "Scheduled maintenance due", timestamp: new Date(Date.now() - 15 * 60 * 1000).toLocaleString() },
]

/** Helpers */
const generateDataPoint = (ts: number): TelemetryPoint => ({
  time: new Date(ts).toLocaleTimeString(),
  temperature: 85 + Math.random() * 30,
  pressure: 150 + Math.random() * 50,
  flow: 45 + Math.random() * 20,
})

function useTelemetryData(n: number = 20, intervalMs: number = 3000) {
  const [data, setData] = useState<TelemetryPoint[]>([])
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const initial = Array.from({ length: n }, (_, i) =>
      generateDataPoint(Date.now() - (n - 1 - i) * intervalMs)
    )
    setData(initial)
    const t = setInterval(() => {
      setData((prev) => [...prev.slice(1), generateDataPoint(Date.now())])
      setNow(new Date())
    }, intervalMs)
    return () => clearInterval(t)
  }, [n, intervalMs])

  return { data, now }
}

function statusPill(status: AssetStatus) {
  switch (status) {
    case "normal":
    case "operational":
      return { className: "bg-orange-500 text-white", icon: <CheckCircle className="h-4 w-4" /> }
    case "warning":
      return { className: "bg-yellow-500 text-black", icon: <Activity className="h-4 w-4" /> }
    case "alert":
    case "critical":
      return { className: "bg-red-500 text-white", icon: <AlertTriangle className="h-4 w-4" /> }
    default:
      return { className: "bg-gray-500 text-white", icon: <XCircle className="h-4 w-4" /> }
  }
}

function alertVariant(t: AlertType) {
  return t === "critical" ? "destructive" : "default"
}

/** Main component */
export default function PrototypeDashboard() {
  const [screen, setScreen] = useState<Screen>("dashboard")
  const [assets] = useState<Asset[]>(INITIAL_ASSETS)
  const [alerts] = useState<SystemAlert[]>(INITIAL_ALERTS)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const { data, now } = useTelemetryData(20, 3000)

  const stats = useMemo(() => {
    const counts = { normal: 0, warning: 0, critical: 0, total: assets.length }
    for (const a of assets) {
      if (a.status === "warning") counts.warning += 1
      else if (a.status === "alert" || a.status === "critical") counts.critical += 1
      else counts.normal += 1
    }
    return counts
  }, [assets])

  const handleInvestigate = (asset: Asset) => {
    setSelectedAsset(asset)
    setScreen("investigation")
    setTimeout(() => setScreen("report"), 2500)
  }

  /** Screen: Investigation */
  if (screen === "investigation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">AI Investigation in Progress…</h2>
            <p className="text-muted-foreground">Analyzing {selectedAsset?.name} patterns</p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
                <Activity className="w-8 h-8 text-orange-600 animate-bounce" />
              </div>
              <span className="text-sm text-muted-foreground">Data Stream</span>
            </div>
            <div className="text-muted-foreground/60 animate-pulse">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
                <FileText className="w-8 h-8 text-orange-600 animate-bounce" />
              </div>
              <span className="text-sm text-muted-foreground">Analysis</span>
            </div>
            <div className="text-muted-foreground/60 animate-pulse">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 text-white animate-spin" />
              </div>
              <span className="text-sm text-muted-foreground">Fluxara</span>
            </div>
          </div>

          <div className="w-64 mx-auto">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  /** Screen: Compliance Dashboard */
  if (screen === "compliance") {
    return (
      <div className="min-h-screen bg-muted/30 p-6">
        {/* Disclaimer Banner */}
        <div className="max-w-7xl mx-auto mb-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <p className="text-sm text-amber-800 font-medium">
                Beta Feature - Compliance monitoring capabilities currently in development
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Compliance Monitoring Dashboard</h1>
              <p className="text-muted-foreground">Real-time regulatory compliance tracking with automated reporting</p>
            </div>
          </div>

          {/* Platform Navigation Tabs */}
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-8">
                <button
                  onClick={() => setScreen("dashboard")}
                  className="flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <Gauge className="h-5 w-5" />
                  <span>Operations Overview</span>
                </button>
                
                <button
                  onClick={() => handleInvestigate(assets[0])}
                  className="flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  <Activity className="h-5 w-5" />
                  <span>AI Diagnostics</span>
                </button>
                
                <button
                  onClick={() => setScreen("compliance")}
                  className="flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-orange-500 text-white shadow-lg"
                >
                  <Shield className="h-5 w-5" />
                  <span>Compliance Monitoring</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Status Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <CheckCircle className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">98.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Permits</CardTitle>
                <FileText className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">3 expiring in 60 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Violations</CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">2</div>
                <p className="text-xs text-muted-foreground">Minor exceedances this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">Automated this quarter</p>
              </CardContent>
            </Card>
          </div>

          {/* Environmental Monitoring */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Permits Status</CardTitle>
                <CardDescription>Real-time monitoring against permit limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                      <p className="font-medium text-orange-800">Air Quality Permit #AQ-2024-001</p>
                      <p className="text-sm text-orange-600">NOx Emissions: 85% of limit</p>
                    </div>
                    <Badge className="bg-orange-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Compliant
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div>
                      <p className="font-medium text-yellow-800">Water Discharge Permit #WD-2024-003</p>
                      <p className="text-sm text-yellow-600">pH Level: 92% of limit</p>
                    </div>
                    <Badge className="bg-yellow-500 text-white">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Monitor
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div>
                      <p className="font-medium text-red-800">Noise Control Permit #NC-2024-002</p>
                      <p className="text-sm text-red-600">Exceeded 65dB limit for 3.2 hours</p>
                    </div>
                    <Badge variant="destructive">
                      <XCircle className="h-3 w-3 mr-1" />
                      Violation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Regulations Compliance</CardTitle>
                <CardDescription>OSHA and industry standards monitoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                      <p className="font-medium text-orange-800">OSHA 29 CFR 1910.147</p>
                      <p className="text-sm text-orange-600">Lockout/Tagout Procedures</p>
                    </div>
                    <Badge className="bg-orange-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      100%
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                      <p className="font-medium text-orange-800">API 570 Inspection</p>
                      <p className="text-sm text-orange-600">Piping Inspection Code</p>
                    </div>
                    <Badge className="bg-orange-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      98%
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800">NFPA 70E Training</p>
                      <p className="text-sm text-blue-600">Electrical Safety Standards</p>
                    </div>
                    <Badge className="bg-blue-500 text-white">
                      <FileText className="h-3 w-3 mr-1" />
                      Due 3/15
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Emissions Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Real-time Emissions Monitoring</CardTitle>
              <CardDescription>Live tracking against regulatory limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} name="NOx Emissions (ppm)" />
                    <Line type="monotone" dataKey="pressure" stroke="#3b82f6" strokeWidth={2} name="SO2 Emissions (ppm)" />
                    <Line type="monotone" dataKey="flow" stroke="#f59e0b" strokeWidth={1} strokeDasharray="5 5" name="Permit Limit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Audit Trail & Reporting */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Compliance Events</CardTitle>
                <CardDescription>Automated audit trail</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Emissions Report Generated</p>
                    <p className="text-xs text-muted-foreground">EPA Form 1234 - Monthly NOx Report</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Permit Renewal Alert</p>
                    <p className="text-xs text-muted-foreground">Water Discharge Permit expires in 58 days</p>
                    <p className="text-xs text-muted-foreground">6 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Exceedance Documented</p>
                    <p className="text-xs text-muted-foreground">Noise level violation - Unit 3 Compressor</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit-Ready Reports</CardTitle>
                <CardDescription>Automated compliance documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <FileText className="mr-3 h-4 w-4" />
                    <div className="text-left">
                      <p className="font-medium">Monthly Emissions Summary</p>
                      <p className="text-sm text-muted-foreground">EPA-required reporting</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <FileText className="mr-3 h-4 w-4" />
                    <div className="text-left">
                      <p className="font-medium">Safety Inspection Log</p>
                      <p className="text-sm text-muted-foreground">OSHA compliance documentation</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4">
                    <FileText className="mr-3 h-4 w-4" />
                    <div className="text-left">
                      <p className="font-medium">Permit Status Dashboard</p>
                      <p className="text-sm text-muted-foreground">All active permits summary</p>
                    </div>
                  </Button>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Cost Savings This Quarter</p>
                  <p className="text-2xl font-bold text-orange-600">$124,000</p>
                  <p className="text-xs text-muted-foreground">90% reduction in manual compliance reporting</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  /** Screen: Diagnostic Report */
  if (screen === "diagnostic") {
    return (
      <div className="min-h-screen bg-muted/30 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Diagnostic Report: {selectedAsset?.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="destructive" className="text-sm">Priority: HIGH</Badge>
                <span className="text-sm text-muted-foreground">Date: 2025-07-26</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setScreen("report")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Results Summary
              </Button>
              <Button variant="outline" onClick={() => setScreen("dashboard")}>
                Start Over
              </Button>
            </div>
          </div>

          {/* Root Cause Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Root Cause Hypothesis
              </CardTitle>
              <CardDescription>AI Analysis with 85% Confidence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <p className="font-medium text-red-800">
                  Impending failure of the Stage 2 inboard bearing due to lubrication degradation.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-700">Confidence Level: 85%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supporting Evidence */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Supporting Evidence
              </CardTitle>
              <CardDescription>Data patterns and documentation references</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Telemetry Evidence */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Telemetry Analysis</h4>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-orange-800">Vibration Pattern Anomaly</p>
                      <p className="text-sm text-orange-700 mt-1">
                        Consistent 15% increase in vibration on sensor VIB-S2-IN over the past 7 days.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Mini chart */}
                <div className="h-48 bg-muted/50 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.slice(-10)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} name="Vibration (mm/s)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Manual Reference */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Documentation Reference</h4>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Elliott P-Line Manual Citation</p>
                      <p className="text-sm text-blue-700 mt-1 italic">
                        "Ref: Elliott P-Line Manual, Sec. 4.7, Pg. 28: 'A steady increase in vibration isolated to a single bearing, coupled with stable operating temperatures, is an early indicator of lubrication failure.'"
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Source Document
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                Recommended Actions
              </CardTitle>
              <CardDescription>Immediate steps to prevent failure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <h5 className="font-semibold text-red-800">IMMEDIATE (Within 48 hours)</h5>
                  </div>
                  <p className="text-red-700 ml-8">Schedule maintenance within 48 hours to prevent catastrophic failure.</p>
                </div>

                <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <h5 className="font-semibold text-orange-800">DIAGNOSTIC</h5>
                  </div>
                  <p className="text-orange-700 ml-8">Take an oil sample for immediate analysis to confirm lubrication degradation.</p>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <h5 className="font-semibold text-blue-800">PREPARATION</h5>
                  </div>
                  <p className="text-blue-700 ml-8">Prepare bearing replacement kit (Part #4C-8812) and schedule qualified technician.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">Estimated Cost Impact</p>
                    <p className="text-sm text-muted-foreground">Preventive action vs. failure cost</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">$48,000</p>
                    <p className="text-sm text-muted-foreground">Potential savings</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="w-full bg-orange-500 text-white hover:opacity-90">
                  Schedule Emergency Maintenance
                </Button>
                <Button className="w-full" variant="outline">
                  Order Replacement Parts
                </Button>
                <Button className="w-full" variant="outline">
                  Generate Work Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  /** Screen: Report */
  if (screen === "report") {
    return (
      <div className="min-h-screen bg-muted/30 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Unified Intelligence Report</h1>
              <p className="text-muted-foreground">Asset: {selectedAsset?.name}</p>
            </div>
            <Button variant="outline" onClick={() => setScreen("dashboard")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Start Over
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">AI Diagnosis & Recommendations</CardTitle>
              <CardDescription>Complete analysis with evidence, actions, and recent trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Diagnosis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">AI Diagnosis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Bearing Failure Imminent</p>
                      <p className="text-sm text-red-600 mt-1">Confidence: 94%</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Vibration:</strong> 8.2mm/s (Critical)</p>
                      <p><strong>Temperature:</strong> 85°C (High)</p>
                      <p><strong>Oil Analysis:</strong> Metal particles detected</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Evidence */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Supporting Evidence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-red-500 rounded-full" /><span>Vibration trend ↗ 300% (7 days)</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-orange-500 rounded-full" /><span>Temperature spike events (3)</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-yellow-500 rounded-full" /><span>Acoustic signature change</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-red-500 rounded-full" /><span>Oil contamination level: High</span></div>
                    </div>
                    <div className="mt-2 p-2 bg-muted rounded">
                      <p className="text-xs text-muted-foreground">Historical: Similar pattern led to failure in Asset C-8A (2023)</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">Recommended Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="p-3 bg-red-50 border-l-4 border-red-500">
                      <p className="font-medium text-red-800">IMMEDIATE</p>
                      <p className="text-red-700">Schedule emergency maintenance within 24 hours</p>
                    </div>
                    <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                      <p className="font-medium text-orange-800">SHORT TERM</p>
                      <p className="text-orange-700">Replace bearing assembly and oil system flush</p>
                    </div>
                    <div className="p-3 bg-muted border-l-4 border-border">
                      <p className="font-medium text-foreground">PREVENTIVE</p>
                      <p className="text-muted-foreground">Implement enhanced monitoring for similar assets</p>
                    </div>
                    <div className="text-xs text-muted-foreground">Estimated cost avoidance: $45,000</div>
                  </CardContent>
                </Card>
              </div>

              {/* Trend chart */}
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Trends</CardTitle>
                    <CardDescription>Temperature & Pressure (last ~1 min)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="temperature" stroke="var(--chart-1, #33475b)" strokeWidth={2} name="Temperature (°F)" />
                          <Line type="monotone" dataKey="pressure" stroke="var(--chart-2, #0ea5e9)" strokeWidth={2} name="Pressure (PSI)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Document Q&A + Quick Actions */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ask the Documents</CardTitle>
                    <CardDescription>Answers with citations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="rounded-md border p-2">
                      Q: What is the shutdown procedure for COMP-001 oil contamination?
                    </div>
                    <div className="rounded-md border p-3 bg-muted">
                      A: Follow OEM Manual §4.2 step 3–7; isolate inlet, depressurize, drain oil, replace filter, run flush cycle.
                      <div className="text-xs text-muted-foreground mt-2">Source: OEM Manual – COMP-001, Rev C</div>
                    </div>
                    <Button size="sm" variant="outline">View Source</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="destructive">Schedule Maintenance</Button>
                    <Button className="w-full" variant="outline">Generate Audit-Ready Report</Button>
                    <a
                      className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 bg-orange-500 text-white hover:opacity-90 group"
                      href="mailto:ethiraj.k@fluxara.ai?subject=ROI%20Assessment&body=We%20would%20like%20a%20custom%20ROI%20projection%20for%20assets%20X%2FY%2FZ."
                    >
                      Get Free ROI Assessment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    )
  }

  /** Screen: Dashboard (default) */
  return (
    <div className="min-h-screen bg-muted/30 p-6">
      {/* Disclaimer Banner */}
      <div className="max-w-7xl mx-auto mb-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-blue-800 font-medium">
              Platform Preview - Some features shown represent planned capabilities currently in development
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header - Simplified since main nav is handled by parent */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Live Platform Demo
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Real-time monitoring with unified intelligence workflow
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="font-mono text-sm">{now.toLocaleString()}</p>
          </div>
        </div>

        {/* Platform Navigation Tabs */}
        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-8">
              <button
                onClick={() => setScreen("dashboard")}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  screen === "dashboard" 
                    ? "bg-orange-500 text-white shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Gauge className="h-5 w-5" />
                <span>Operations Overview</span>
              </button>
              
              <button
                onClick={() => handleInvestigate(assets[0])}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  screen === "report" || screen === "investigation" || screen === "diagnostic"
                    ? "bg-orange-500 text-white shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Activity className="h-5 w-5" />
                <span>AI Diagnostics</span>
              </button>
              
              <button
                onClick={() => setScreen("compliance")}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  screen === "compliance" 
                    ? "bg-orange-500 text-white shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Shield className="h-5 w-5" />
                <span>Compliance Monitoring</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Current View Content */}
        {screen === "dashboard" && (
          <>
            {/* Guided Demo Call-to-Action - Only shown in Operations Overview */}
            <Card className="bg-gradient-card border-border shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Experience AI-Powered Equipment Diagnosis</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Click "AI Diagnostics" above to see how our platform detects equipment issues, analyzes root causes, and provides actionable recommendations in real-time.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use the navigation tabs above to explore all platform capabilities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Dashboard Content - Only show when on dashboard screen */}
        {screen === "dashboard" && (
          <>
            {/* Brand KPIs */}
            {SHOW_TOP_KPIS && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Downtime Reduction", value: "35%" },
                  { label: "Avg. Annual Savings", value: "$2.4M" },
                  { label: "Compliance Accuracy", value: "95%" },
                  { label: "Avg. Deployment", value: "8 weeks" },
                ].map((k) => (
                  <div key={k.label} className="rounded-lg border bg-card p-3">
                    <div className="text-xl font-bold text-primary">{k.value}</div>
                    <div className="text-xs text-muted-foreground">{k.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].temperature.toFixed(1) : "–"}°F`}
              </div>
              <p className="text-xs text-muted-foreground">Normal range: 80–100°F</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Pressure</CardTitle>
              <Droplets className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].pressure.toFixed(1) : "–"} PSI`}
              </div>
              <p className="text-xs text-muted-foreground">Normal range: 140–180 PSI</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flow Rate</CardTitle>
              <Droplets className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].flow.toFixed(1) : "–"} GPM`}
              </div>
              <p className="text-xs text-muted-foreground">Target: 50–60 GPM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <Zap className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {alerts.filter((a) => a.type === "critical").length}
              </div>
              <p className="text-xs text-muted-foreground">Critical alerts requiring attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Temperature & Pressure Trends</CardTitle>
              <CardDescription>Real-time over the last few minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                        <CartesianGrid stroke="hsl(var(--border))" />
                        <Legend wrapperStyle={{ color: "hsl(var(--muted-foreground))" }} />
                        <Line type="monotone" dataKey="temperature" stroke="var(--chart-1, #33475b)" strokeWidth={2} />
                        <Line type="monotone" dataKey="pressure"    stroke="var(--chart-2, #f97316)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Live events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((a) => (
                <Alert key={a.id} variant={alertVariant(a.type)}>
                  <AlertTitle className="flex items-center gap-2">
                    {a.type === "critical" ? <AlertTriangle className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                    {a.type.toUpperCase()}
                    <Badge variant="outline" className="ml-1">{a.equipment}</Badge>
                  </AlertTitle>
                  <AlertDescription>{a.message} – <span className="text-xs opacity-75">{a.timestamp}</span></AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Asset table - Informational only */}
        <Card>
          <CardHeader>
            <CardTitle>Current Asset Status</CardTitle>
            <CardDescription>Overview of monitored equipment and their current operational status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="py-2 pr-4">Asset</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Location</th>
                    <th className="py-2 pr-4">Last Maintenance</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((a) => {
                    const pill = statusPill(a.status)
                    return (
                      <tr key={a.id} className="border-t">
                        <td className="py-3 pr-4 font-medium">{a.name}</td>
                        <td className="py-3 pr-4">{a.type}</td>
                        <td className="py-3 pr-4">
                          <span className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs ${pill.className}`}>
                            {pill.icon}{a.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4">{a.location}</td>
                        <td className="py-3 pr-4">{a.lastMaintenance}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
          </>
        )}
      </div>
    </div>
  )
}