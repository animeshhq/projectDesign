import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const items = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },

    {
      label: "Deployments",
      path: "/deployments",
    },

    {
      label: "Analytics",
      path: "#",
    },

    {
      label: "Settings",
      path: "#",
    },
  ];

  return (
    <aside className="w-64 border-r border-zinc-900 bg-black">
      <div className="p-6">
        <h2 className="text-lg font-semibold">DeployAI</h2>
      </div>

      <nav className="space-y-2 px-4">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`block rounded-xl px-4 py-3 text-sm transition-all ${
              location.pathname === item.path
                ? "bg-zinc-900 text-white"
                : "text-zinc-500 hover:bg-zinc-950 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
