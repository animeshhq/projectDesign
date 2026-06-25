import { Link } from "react-router-dom";

export default function DeploymentCard({ deployment }) {
  const running = deployment.status === "Running";

  return (
    <Link to={`/deployment/${deployment.id}`} className="group block">
      <article className="h-full rounded-3xl border border-zinc-900 bg-[#050505] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black text-lg font-semibold">
              {deployment.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-medium tracking-tight">{deployment.name}</h3>

              <p className="mt-1 text-xs text-zinc-500">AI Deployment</p>
            </div>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              running ? "bg-white text-black" : "bg-red-950 text-red-300"
            }`}
          >
            {deployment.status}
          </span>
        </div>

        <div className="mb-6 rounded-2xl border border-zinc-900 bg-black p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
            Model
          </p>

          <p className="font-medium">{deployment.model || "GPT-4o"}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Version</span>

            <span className="font-medium">{deployment.version}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Environment</span>

            <span className="rounded-full border border-zinc-800 px-2 py-1 text-xs">
              {deployment.environment || "Production"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Requests</span>

            <span>{deployment.requests || "12.4K"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500">Latency</span>

            <span>{deployment.latency || "121ms"}</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-5">
          <div>
            <p className="text-xs text-zinc-600">Last updated</p>

            <p className="mt-1 text-sm text-zinc-400">
              {deployment.created || "2 minutes ago"}
            </p>
          </div>

          <div className="rounded-full border border-zinc-800 px-4 py-2 text-sm transition group-hover:border-zinc-600">
            View →
          </div>
        </div>
      </article>
    </Link>
  );
}
