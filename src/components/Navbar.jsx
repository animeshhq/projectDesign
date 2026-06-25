import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <polygon points="10,2 18,18 2,18" fill="white" />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Deployments",
      path: "/deployments",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Docs",
      path: "/docs",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo />

          <span className="text-sm font-semibold tracking-tight">
            NeuralShip
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-500 hover:bg-zinc-950 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Deploy Now
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 md:hidden"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14" strokeLinecap="round" />
                <path d="M3 10h14" strokeLinecap="round" />
                <path d="M3 14h14" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-zinc-900 bg-black transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-6 py-5">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm transition ${
                  active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-500 hover:bg-zinc-950 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
          >
            Deploy Now
          </Link>
        </div>
      </div>
    </header>
  );
}
