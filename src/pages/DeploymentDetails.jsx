import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { deployments } from "../data/deployments";

export default function DeploymentDetails() {
  const { id } = useParams();

  const deployment = deployments.find((item) => item.id === Number(id));

  if (!deployment) {
    return (
      <>
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-4xl font-medium">Deployment not found.</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <Link
              to="/deployments"
              className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
            >
              ← Back to Deployments
            </Link>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      deployment.status === "Running"
                        ? "bg-white text-black"
                        : "bg-red-950 text-red-300"
                    }`}
                  >
                    {deployment.status}
                  </span>

                  <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
                    {deployment.environment || "Production"}
                  </span>
                </div>

                <h1 className="text-5xl font-medium tracking-tight lg:text-6xl">
                  {deployment.name}
                </h1>

                <p className="mt-5 max-w-2xl text-lg text-zinc-500">
                  {deployment.model || "GPT-4o"} • Version {deployment.version}{" "}
                  • Active Deployment
                </p>
              </div>

              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                Redeploy
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
          {/* Stats */}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Requests" value={deployment.requests || "12.4K"} />

            <StatCard title="Latency" value={deployment.latency || "118ms"} />

            <StatCard title="Uptime" value="99.99%" />

            <StatCard title="Errors" value="0.02%" />
          </div>

          {/* Overview */}

          <section className="grid gap-8 lg:grid-cols-2">
            {/* Endpoint */}

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <h2 className="mb-8 text-2xl font-medium">Endpoint</h2>

              <div className="rounded-2xl border border-zinc-900 bg-black p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
                  URL
                </p>

                <code className="break-all text-sm text-zinc-300">
                  https://api.neuralship.ai/v1/
                  {deployment.name.toLowerCase().replace(/\s+/g, "-")}
                </code>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="flex items-center justify-between rounded-xl border border-zinc-900 p-4">
                  <span className="text-zinc-500">Deployment ID</span>

                  <span className="font-mono text-sm">dep_94A8C2F</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-900 p-4">
                  <span className="text-zinc-500">Region</span>

                  <span>Asia South</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-900 p-4">
                  <span className="text-zinc-500">Runtime</span>

                  <span>Node.js 22</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-900 p-4">
                  <span className="text-zinc-500">Created</span>

                  <span>{deployment.created || "2 minutes ago"}</span>
                </div>
              </div>
            </div>

            {/* Deployment Info */}

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <h2 className="mb-8 text-2xl font-medium">
                Deployment Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Model</span>

                  <span>{deployment.model || "GPT-4o"}</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Version</span>

                  <span>{deployment.version}</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Environment</span>

                  <span>{deployment.environment || "Production"}</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Framework</span>

                  <span>React + FastAPI</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Health</span>

                  <span className="rounded-full bg-white px-3 py-1 text-xs text-black">
                    Healthy
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Timeline */}
          <section className="grid gap-8 lg:grid-cols-2">
            {/* Timeline */}

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <h2 className="mb-8 text-2xl font-medium">Deployment Timeline</h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Queued",
                    time: "12:01 PM",
                    desc: "Deployment request received.",
                  },
                  {
                    title: "Building",
                    time: "12:02 PM",
                    desc: "Installing dependencies and preparing runtime.",
                  },
                  {
                    title: "Deploying",
                    time: "12:03 PM",
                    desc: "Publishing deployment globally.",
                  },
                  {
                    title: "Running",
                    time: "12:04 PM",
                    desc: "Deployment is serving traffic.",
                  },
                ].map((step, index) => (
                  <div key={step.title} className="relative flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                        ✓
                      </div>

                      {index !== 3 && (
                        <div className="mt-2 h-14 w-px bg-zinc-800" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium">{step.title}</h3>

                        <span className="text-xs text-zinc-600">
                          {step.time}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logs */}

            <div className="overflow-hidden rounded-3xl border border-zinc-900 bg-[#050505]">
              <div className="border-b border-zinc-900 px-8 py-5">
                <h2 className="text-2xl font-medium">Recent Logs</h2>
              </div>

              <div className="space-y-4 p-8 font-mono text-sm">
                <div className="text-zinc-500">
                  12:01 Initializing deployment...
                </div>

                <div className="text-zinc-500">
                  12:02 Installing dependencies...
                </div>

                <div className="text-zinc-500">12:02 Building project...</div>

                <div className="text-zinc-500">12:03 Uploading assets...</div>

                <div className="text-zinc-500">12:03 Starting runtime...</div>

                <div className="text-green-400">
                  ✓ Deployment completed successfully.
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Section */}

          <section className="grid gap-8 lg:grid-cols-2">
            {/* Environment Variables */}

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <h2 className="mb-8 text-2xl font-medium">
                Environment Variables
              </h2>

              <div className="space-y-4">
                {[
                  "MODEL_NAME",
                  "OPENAI_API_KEY",
                  "DATABASE_URL",
                  "MAX_TOKENS",
                  "NODE_ENV",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-zinc-900 p-4"
                  >
                    <span className="font-mono text-sm">{item}</span>

                    <span className="text-xs text-zinc-600">Encrypted</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Requests */}

            <div className="rounded-3xl border border-zinc-900 bg-[#050505]">
              <div className="border-b border-zinc-900 px-8 py-5">
                <h2 className="text-2xl font-medium">Recent Requests</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px]">
                  <thead className="text-left text-sm text-zinc-500">
                    <tr>
                      <th className="px-8 py-4 font-normal">Status</th>

                      <th className="px-8 py-4 font-normal">Latency</th>

                      <th className="px-8 py-4 font-normal">Time</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["200 OK", "114ms", "12:43 PM"],
                      ["200 OK", "121ms", "12:42 PM"],
                      ["200 OK", "109ms", "12:41 PM"],
                      ["200 OK", "118ms", "12:40 PM"],
                      ["500", "332ms", "12:38 PM"],
                    ].map((row) => (
                      <tr
                        key={row.join("-")}
                        className="border-t border-zinc-900 hover:bg-zinc-950/50"
                      >
                        <td className="px-8 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-xs ${
                              row[0] === "200 OK"
                                ? "bg-white text-black"
                                : "bg-red-950 text-red-300"
                            }`}
                          >
                            {row[0]}
                          </span>
                        </td>

                        <td className="px-8 py-5">{row[1]}</td>

                        <td className="px-8 py-5 text-zinc-500">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
