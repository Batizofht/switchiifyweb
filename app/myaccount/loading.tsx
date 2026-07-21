export default function AccountLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-3 w-24 bg-zinc-900 rounded-sm mb-4" />
      <div className="h-8 w-64 bg-zinc-900 rounded-sm mb-2" />
      <div className="h-4 w-80 bg-zinc-900 rounded-sm mb-10" />

      <div className="h-24 bg-zinc-900 rounded-md mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="h-24 bg-zinc-900 rounded-md" />
        <div className="h-24 bg-zinc-900 rounded-md" />
        <div className="h-24 bg-zinc-900 rounded-md" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="h-16 bg-zinc-900 rounded-md" />
        <div className="h-16 bg-zinc-900 rounded-md" />
        <div className="h-16 bg-zinc-900 rounded-md" />
      </div>
    </div>
  );
}
