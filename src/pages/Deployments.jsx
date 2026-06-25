import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import DeploymentCard from "../components/DeploymentCard";
import { deployments } from "../data/deployments";
import { Link } from "react-router-dom";

export default function Deployments() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredDeployments = useMemo(() => {
    let data = [...deployments];

    data = data.filter((deployment) =>
      deployment.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (filter !== "All") {
      data = data.filter(
        (deployment) =>
          deployment.status.toLowerCase() === filter.toLowerCase(),
      );
    }

    if (sortBy === "Name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "Newest") {
      data.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "Oldest") {
      data.sort((a, b) => a.id - b.id);
    }

    return data;
  }, [search, filter, sortBy]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-zinc-900">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Deployments
              </p>

              <h1 className="text-5xl font-medium tracking-tight lg:text-6xl">
                All Deployments
              </h1>

              <p className="mt-4 max-w-xl text-zinc-500">
                Browse, monitor and manage every AI deployment across your
                organization.
              </p>
            </div>

            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              New Deployment
            </Link>
          </div>
        </section>

        <section className="border-b border-zinc-900">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search deployments..."
                className="w-full rounded-xl border border-zinc-900 bg-[#050505] px-5 py-3 outline-none transition focus:border-zinc-700 lg:max-w-md"
              />

              <div className="flex flex-wrap items-center gap-3">
                {["All", "Running", "Failed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`rounded-full px-5 py-2 text-sm transition ${
                      filter === status
                        ? "bg-white text-black"
                        : "border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                    }`}
                  >
                    {status}
                  </button>
                ))}

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-full border border-zinc-800 bg-black px-4 py-2 text-sm outline-none"
                >
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Name</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-medium">Deployments</h2>

              <p className="mt-2 text-sm text-zinc-500">
                {filteredDeployments.length} deployment
                {filteredDeployments.length !== 1 && "s"} found
              </p>
            </div>
          </div>

          {filteredDeployments.length === 0 ? (
            <div className="rounded-3xl border border-zinc-900 bg-[#050505] py-20 text-center">
              <h3 className="text-2xl font-medium">No deployments found</h3>

              <p className="mt-4 text-zinc-500">
                Try changing the filters or search term.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredDeployments.map((deployment) => (
                <DeploymentCard key={deployment.id} deployment={deployment} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-zinc-900">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <p className="text-sm text-zinc-500">Running</p>

              <h3 className="mt-4 text-5xl font-medium">
                {deployments.filter((d) => d.status === "Running").length}
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                Deployments currently serving traffic.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <p className="text-sm text-zinc-500">Failed</p>

              <h3 className="mt-4 text-5xl font-medium">
                {deployments.filter((d) => d.status === "Failed").length}
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                Deployments requiring attention.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <p className="text-sm text-zinc-500">Total Requests</p>

              <h3 className="mt-4 text-5xl font-medium">1.24M</h3>

              <p className="mt-3 text-sm text-zinc-500">
                Requests processed this month.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 pb-20">
            <div className="rounded-3xl border border-zinc-900 bg-[#050505] p-8">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-medium">Recent Activity</h2>

                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  LIVE
                </span>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-white" />

                  <div>
                    <h3 className="font-medium">
                      Customer Support Agent deployed
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Production deployment completed successfully.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-white" />

                  <div>
                    <h3 className="font-medium">Health checks completed</h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      All deployments are responding normally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-white" />

                  <div>
                    <h3 className="font-medium">Research Assistant updated</h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      Version v2.1.0 rolled out globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
