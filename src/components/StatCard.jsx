export default function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-900 bg-[#050505] p-6">
      <p className="mb-3 text-sm text-zinc-500">{title}</p>

      <h3 className="text-3xl font-semibold">{value}</h3>
    </div>
  );
}
