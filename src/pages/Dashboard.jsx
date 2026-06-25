import { useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [deployments, setDeployments] = useState([
    {
      id: 1,
      name: "Customer Support Agent",
      version: "v1.0.0",
      status: "Running",
      environment: "Production",
      model: "GPT-4o",
      created: "2 min ago",
    },
    {
      id: 2,
      name: "Research Assistant",
      version: "v2.1.0",
      status: "Running",
      environment: "Preview",
      model: "Claude 4",
      created: "1 hour ago",
    },
    {
      id: 3,
      name: "Medical Diagnosis",
      version: "v1.3.1",
      status: "Failed",
      environment: "Production",
      model: "Gemini",
      created: "Yesterday",
    },
  ]);

  const [formData, setFormData] = useState({
    projectName: "",
    model: "",
    version: "",
    environment: "Production",
  });

  const [deploying, setDeploying] = useState(false);
  const [progress, setProgress] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.projectName || !formData.model || !formData.version) return;

    setDeploying(true);
    setProgress("Preparing deployment...");

    setTimeout(() => {
      setProgress("Building project...");
    }, 700);

    setTimeout(() => {
      setProgress("Deploying globally...");
    }, 1600);

    setTimeout(() => {
      setProgress("Deployment successful.");

      setDeployments((prev) => [
        {
          id: Date.now(),
          name: formData.projectName,
          model: formData.model,
          version: formData.version,
          environment: formData.environment,
          status: "Running",
          created: "Just now",
        },
        ...prev,
      ]);

      setFormData({
        projectName: "",
        model: "",
        version: "",
        environment: "Production",
      });

      setTimeout(() => {
        setDeploying(false);
        setProgress("");
      }, 900);
    }, 2800);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Dashboard
                </p>

                <h1 className="text-4xl font-medium tracking-tight lg:text-5xl">
                  Manage Deployments
                </h1>

                <p className="mt-3 max-w-xl text-zinc-500">
                  Create new AI deployments, monitor performance and manage
                  every project from one dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Deployments" value={deployments.length} />

            <StatCard title="Requests" value="1.24M" />

            <StatCard title="Success Rate" value="99.94%" />

            <StatCard title="Latency" value="128ms" />
          </div>

          <section className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-medium">Create Deployment</h2>

              <p className="mt-2 text-sm text-zinc-500">
                Configure a new deployment for your AI project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <input
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                className="rounded-xl border border-zinc-900 bg-black px-4 py-3 outline-none transition focus:border-zinc-700"
              />

              <input
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Model Name"
                className="rounded-xl border border-zinc-900 bg-black px-4 py-3 outline-none transition focus:border-zinc-700"
              />

              <input
                name="version"
                value={formData.version}
                onChange={handleChange}
                placeholder="Version"
                className="rounded-xl border border-zinc-900 bg-black px-4 py-3 outline-none transition focus:border-zinc-700"
              />

              <select
                name="environment"
                value={formData.environment}
                onChange={handleChange}
                className="rounded-xl border border-zinc-900 bg-black px-4 py-3 outline-none transition focus:border-zinc-700"
              >
                <option>Production</option>
                <option>Preview</option>
                <option>Development</option>
              </select>

              <div className="md:col-span-2 flex flex-col gap-4">
                <button
                  disabled={deploying}
                  className="w-fit rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:opacity-60"
                >
                  {deploying ? "Deploying..." : "Deploy Model"}
                </button>

                {progress && (
                  <div className="rounded-xl border border-zinc-900 bg-black px-4 py-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-zinc-400">{progress}</span>

                      <span className="text-xs text-zinc-600">LIVE</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-zinc-900">
                      <div
                        className={`h-full bg-white transition-all duration-700 ${
                          progress === "Preparing deployment..."
                            ? "w-1/4"
                            : progress === "Building project..."
                              ? "w-2/4"
                              : progress === "Deploying globally..."
                                ? "w-3/4"
                                : "w-full"
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>
          </section>

          <section className="rounded-3xl border border-zinc-900 bg-[#050505]">
            <div className="flex items-center justify-between border-b border-zinc-900 px-8 py-6">
              <div>
                <h2 className="text-xl font-medium">Recent Deployments</h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Latest deployments across your projects.
                </p>
              </div>

              <button className="text-sm text-zinc-500 hover:text-white transition">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead className="text-left text-sm text-zinc-500">
                  <tr>
                    <th className="px-8 py-4 font-normal">Project</th>

                    <th className="px-8 py-4 font-normal">Model</th>

                    <th className="px-8 py-4 font-normal">Version</th>

                    <th className="px-8 py-4 font-normal">Status</th>

                    <th className="px-8 py-4 font-normal">Environment</th>

                    <th className="px-8 py-4 font-normal">Created</th>
                  </tr>
                </thead>

                <tbody>
                  {deployments.map((deployment) => (
                    <tr
                      key={deployment.id}
                      className="border-t border-zinc-900 transition hover:bg-zinc-950/60"
                    >
                      <td className="px-8 py-5">
                        <div>
                          <p className="font-medium">{deployment.name}</p>

                          <p className="mt-1 text-xs text-zinc-500">
                            AI Deployment
                          </p>
                        </div>
                      </td>

                      <td className="px-8 py-5 text-zinc-300">
                        {deployment.model}
                      </td>

                      <td className="px-8 py-5 text-zinc-300">
                        {deployment.version}
                      </td>

                      <td className="px-8 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            deployment.status === "Running"
                              ? "bg-white text-black"
                              : "bg-red-950 text-red-300"
                          }`}
                        >
                          {deployment.status}
                        </span>
                      </td>

                      <td className="px-8 py-5 text-zinc-500">
                        {deployment.environment}
                      </td>

                      <td className="px-8 py-5 text-zinc-500">
                        {deployment.created}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-medium">Activity</h2>

                <span className="text-xs text-zinc-600">LIVE</span>
              </div>

              <div className="space-y-6">
                <div className="border-l border-zinc-700 pl-4">
                  <h3 className="font-medium">Deployment Created</h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Customer Support Agent deployed successfully.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-4">
                  <h3 className="font-medium">Health Check Passed</h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    All endpoints are responding normally.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-4">
                  <h3 className="font-medium">New Version Published</h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Research Assistant updated to version v2.1.0.
                  </p>
                </div>

                <div className="border-l border-zinc-700 pl-4">
                  <h3 className="font-medium">Global Edge Sync</h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Deployment synchronized across all regions.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <h2 className="mb-8 text-xl font-medium">Platform Overview</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Active Projects</span>

                  <span className="font-medium">{deployments.length}</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Regions</span>

                  <span className="font-medium">24</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Total Requests</span>

                  <span className="font-medium">1.24M</span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <span className="text-zinc-500">Average Latency</span>

                  <span className="font-medium">128ms</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Platform Status</span>

                  <span className="rounded-full bg-white px-3 py-1 text-xs text-black">
                    Operational
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
