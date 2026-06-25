import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CUSTOMERS = [
  "OpenAI",
  "Anthropic",
  "Mistral",
  "Groq",
  "Cohere",
  "Replicate",
  "Hugging Face",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b border-zinc-900 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
              <div className="order-1">
                <div className="inline-flex items-center gap-3 rounded-full border border-zinc-900 bg-[#050505] px-4 py-2">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-white animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    AI Deployment Platform
                  </span>
                </div>

                <h1 className="mt-8 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
                  Deploy AI.
                  <br />
                  Ship faster.
                  <br />
                  Scale globally.
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
                  Build, deploy and monitor AI models from one unified platform.
                  Designed for modern machine learning workflows with a fast,
                  production-ready deployment experience.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    to="/dashboard"
                    className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200 active:bg-zinc-300"
                  >
                    Start Deploying
                  </Link>
                  <Link
                    to="/docs"
                    className="rounded-full border border-zinc-800 px-7 py-3.5 text-center text-sm transition hover:border-zinc-600 active:border-zinc-400"
                  >
                    Documentation
                  </Link>
                </div>

                <div className="mt-10 flex max-w-full items-center gap-3 overflow-x-auto rounded-xl border border-zinc-900 bg-[#050505] px-5 py-4">
                  <span className="shrink-0 font-mono text-zinc-500">$</span>
                  <span className="whitespace-nowrap font-mono text-sm text-zinc-400">
                    deploy neuralship-model --production
                  </span>
                </div>
              </div>

              <div className="order-2">
                <div className="overflow-hidden rounded-3xl border border-zinc-900 bg-[#050505] shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-zinc-900 px-4 py-4 sm:px-6">
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    <span className="ml-3 text-xs text-zinc-500 sm:text-sm">
                      Production Dashboard
                    </span>
                  </div>

                  <div className="space-y-4 p-4 sm:space-y-5 sm:p-6">
                    <div className="rounded-2xl border border-zinc-900 bg-black p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-medium sm:text-base">
                            Customer Support Agent
                          </h3>
                          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                            GPT-4o
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-black sm:text-xs">
                          Running
                        </span>
                      </div>
                      <div className="mt-5 h-2 rounded-full bg-zinc-900">
                        <div className="h-full w-[92%] rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-900 bg-black p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-medium sm:text-base">
                            Medical Diagnosis
                          </h3>
                          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                            Claude 4
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-zinc-800 px-3 py-1 text-[10px] text-zinc-400 sm:text-xs">
                          Building
                        </span>
                      </div>
                      <div className="mt-5 h-2 rounded-full bg-zinc-900">
                        <div className="h-full w-[64%] rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-zinc-900 bg-black p-4">
                        <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                          Active Models
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tabular-nums sm:text-3xl">
                          24
                        </h3>
                      </div>
                      <div className="rounded-2xl border border-zinc-900 bg-black p-4">
                        <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                          Requests
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tabular-nums sm:text-3xl">
                          1.24M
                        </h3>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-900 bg-black p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm text-zinc-400">
                          Latest Activity
                        </span>
                        <span className="text-xs text-green-400">Live</span>
                      </div>
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="truncate text-zinc-500">
                            Image Generation API
                          </span>
                          <span className="shrink-0">18ms</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="truncate text-zinc-500">
                            Embedding Service
                          </span>
                          <span className="shrink-0">Running</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="truncate text-zinc-500">
                            Model Version
                          </span>
                          <span className="shrink-0">v3.2.1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.28em] text-zinc-600">
              Trusted by teams building with AI
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-center sm:grid-cols-4 lg:grid-cols-7">
              {CUSTOMERS.map((customer) => (
                <div
                  key={customer}
                  className="text-sm font-medium tracking-wide text-zinc-500 transition hover:text-white"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
            <div className="mb-12 lg:mb-0">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Deployments
              </p>
              <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Every deployment.
                <br />
                One unified view.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
                Keep track of every model, environment and deployment from one
                clean interface. Deploy globally, monitor health and roll back
                instantly whenever needed.
              </p>
              <div className="mt-10 space-y-8">
                {[
                  [
                    "Global Deployment",
                    "Launch production-ready AI applications to multiple regions with one click.",
                  ],
                  [
                    "Version Control",
                    "Track every release and instantly restore previous deployments.",
                  ],
                  [
                    "Real-time Monitoring",
                    "Observe latency, uptime and request metrics continuously.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title}>
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 shrink-0 rounded-full bg-white" />
                      <h3 className="text-lg font-medium">{title}</h3>
                    </div>
                    <p className="mt-3 ml-7 leading-7 text-zinc-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-medium">Active Deployments</h3>
                <span className="shrink-0 rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  24 Projects
                </span>
              </div>
              <div className="space-y-3">
                {[
                  ["Customer Support", "Running"],
                  ["Research Assistant", "Running"],
                  ["Medical Diagnosis", "Building"],
                  ["Vision API", "Running"],
                  ["Sales Copilot", "Failed"],
                ].map(([name, status]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-900 bg-black p-4 transition hover:border-zinc-700"
                  >
                    <div className="min-w-0">
                      <h4 className="truncate font-medium">{name}</h4>
                      <p className="mt-1 text-xs text-zinc-500">Production</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                        status === "Running"
                          ? "bg-white text-black"
                          : status === "Building"
                            ? "border border-zinc-700 text-zinc-400"
                            : "bg-red-950 text-red-300"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mb-12 lg:mb-14">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Platform Metrics
              </p>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Built for scale.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
              {[
                ["99.99%", "Uptime"],
                ["24", "Regions"],
                ["18ms", "Latency"],
                ["1.24M", "Monthly Requests"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-zinc-900 bg-[#050505] p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-700"
                >
                  <h3 className="text-4xl font-semibold tabular-nums tracking-tight sm:text-5xl">
                    {value}
                  </h3>
                  <p className="mt-4 text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mb-12 lg:mb-14">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Platform Features
              </p>
              <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Everything needed to ship production AI.
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                [
                  "Fast Deployments",
                  "Deploy production-ready models within seconds using automated infrastructure.",
                ],
                [
                  "Global Edge",
                  "Serve inference close to your users with worldwide deployment regions.",
                ],
                [
                  "Real-time Monitoring",
                  "Watch requests, latency and uptime from one clean dashboard.",
                ],
                [
                  "Version Control",
                  "Rollback or compare deployments without downtime.",
                ],
                [
                  "Secure Infrastructure",
                  "Enterprise-grade security with encrypted networking and isolated runtimes.",
                ],
                [
                  "Developer API",
                  "Powerful REST APIs and SDKs for every deployment workflow.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-zinc-900 bg-[#050505] p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-700"
                >
                  <div className="mb-6 sm:mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black">
                    <div className="h-2 w-2 rounded-full bg-white transition group-hover:scale-125" />
                  </div>
                  <h3 className="text-lg font-medium sm:text-xl">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
            <div className="overflow-hidden rounded-[32px] border border-zinc-900 bg-[#050505]">
              <div className="grid items-center gap-12 p-6 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-16">
                <div>
                  <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Get Started
                  </p>
                  <h2 className="max-w-lg text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                    Build.
                    <br />
                    Deploy.
                    <br />
                    Scale globally.
                  </h2>
                  <p className="mt-8 max-w-md text-base leading-8 text-zinc-500 sm:text-lg">
                    NeuralShip gives developers a modern deployment platform
                    built specifically for AI applications. Deploy models,
                    monitor health and scale effortlessly.
                  </p>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <button className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200 active:bg-zinc-300">
                      Deploy Now
                    </button>
                    <Link
                      to="/docs"
                      className="rounded-full border border-zinc-800 px-7 py-3.5 text-center text-sm transition hover:border-zinc-600 active:border-zinc-400"
                    >
                      Documentation
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="rounded-3xl border border-zinc-900 bg-black p-5 sm:p-6">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-500">
                        Deployment Status
                      </span>
                      <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                        LIVE
                      </span>
                    </div>
                    <div className="mb-6">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-500">Build</span>
                        <span>100%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-500">Deployment</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-full w-[92%] rounded-full bg-white" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-zinc-500">Health Checks</span>
                        <span>Complete</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-900">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="mt-8 rounded-2xl border border-zinc-900 bg-[#050505] p-4 sm:p-5">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <span className="text-sm text-zinc-500">Endpoint</span>
                        <span className="shrink-0 text-xs text-zinc-600">
                          HTTPS
                        </span>
                      </div>
                      <code className="block break-all text-xs text-zinc-300 sm:text-sm">
                        https:
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
