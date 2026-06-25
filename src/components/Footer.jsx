import { Link } from "react-router-dom";

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <polygon points="10,2 18,18 2,18" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <Logo />

              <span className="font-semibold tracking-tight">NeuralShip</span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Deploy, monitor and manage AI models through a modern deployment
              platform inspired by today's best cloud developer tools.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-5 text-sm font-medium">Product</h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/"
                className="block text-zinc-500 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/deployments"
                className="block text-zinc-500 transition hover:text-white"
              >
                Deployments
              </Link>

              <Link
                to="/dashboard"
                className="block text-zinc-500 transition hover:text-white"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-sm font-medium">Resources</h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/docs"
                className="block text-zinc-500 transition hover:text-white"
              >
                Documentation
              </Link>

              <span className="block text-zinc-500">API Reference</span>

              <span className="block text-zinc-500">Guides</span>
            </div>
          </div>

          {/* Project */}

          <div>
            <h3 className="mb-5 text-sm font-medium">Built With</h3>

            <div className="space-y-3 text-sm text-zinc-500">
              <p>React</p>

              <p>Tailwind CSS</p>

              <p>React Router</p>

              <p>Educational Project</p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NeuralShip. Built for educational purposes.</p>

          <div className="flex flex-wrap gap-6">
            <span>Version 1.0</span>

            <span>React</span>

            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
