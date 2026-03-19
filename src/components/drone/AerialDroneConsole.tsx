import { useState } from "react";

const navItems = [
  "Dashboard",
  "Live Flight",
  "LARI.Vision",
  "Mission Planner",
  "Aircraft Setup",
  "Sensors",
  "PID / Flight Dynamics",
  "Safety Envelope",
  "Airspace",
  "Blackbox / Telemetry",
  "Maintenance",
  "Fleet"
];

export default function AerialDroneConsole() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-black text-gray-200 font-sans">

      {/* LEFT NAVIGATION (Betaflight style) */}

      <div className="w-64 bg-gray-950 border-r border-gray-800">
        <div className="p-4 text-xl font-bold text-cyan-400">
          OVERSCITE Aerial
        </div>

        {navItems.map(item => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-800 ${
              active === item ? "bg-gray-800 text-cyan-400" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* MAIN VIEW */}

      <div className="flex-1 flex flex-col">

        {/* TOP STATUS BAR */}

        <div className="h-14 border-b border-gray-800 flex items-center px-6 justify-between bg-gray-950">
          <div className="text-sm">
            Aircraft: <span className="text-cyan-400">OVR-A1</span>
          </div>

          <div className="flex gap-6 text-sm">
            <div>Battery 92%</div>
            <div>GPS 14 SAT</div>
            <div>Signal Strong</div>
            <div className="text-green-400">READY</div>
          </div>
        </div>

        {/* MAIN PANEL */}

        <div className="flex-1 p-6 overflow-auto">

          {active === "Dashboard" && <Dashboard />}
          {active === "Live Flight" && <LiveFlight />}
          {active === "LARI.Vision" && <Vision />}
          {active === "Mission Planner" && <MissionPlanner />}
          {active === "Fleet" && <Fleet />}

          {/* Remaining pages can be added incrementally */}

        </div>

      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <Panel title="Attitude">
        3D Orientation Indicator
      </Panel>

      <Panel title="Telemetry">
        Altitude: 38m<br/>
        Speed: 6 m/s<br/>
        Heading: 214°
      </Panel>

      <Panel title="Mission Status">
        Inspection Ready<br/>
        Wind: 8 mph<br/>
        Risk Index: Low
      </Panel>

    </div>
  );
}

function LiveFlight() {
  return (
    <div className="grid grid-cols-2 gap-6">

      <Panel title="Flight Map">
        Map / Path Visualization
      </Panel>

      <Panel title="Flight Instruments">
        Altitude<br/>
        Velocity<br/>
        Climb Rate<br/>
        Heading
      </Panel>

    </div>
  );
}

function Vision() {
  return (
    <div className="grid grid-cols-2 gap-6">

      <Panel title="Camera Feed">
        LIVE VIDEO STREAM
      </Panel>

      <Panel title="LARI Detection">
        Crack detection<br/>
        Water signature<br/>
        Structural anomaly
      </Panel>

    </div>
  );
}

function MissionPlanner() {
  return (
    <Panel title="Mission Planner">
      Draw flight path<br/>
      Set scan zones<br/>
      Assign capture intervals
    </Panel>
  );
}

function Fleet() {
  return (
    <Panel title="Fleet">
      Drone A1 – Ready<br/>
      Drone A2 – Charging<br/>
      Drone A3 – Maintenance
    </Panel>
  );
}

function Panel({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <div className="text-cyan-400 font-semibold mb-3">{title}</div>
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
}