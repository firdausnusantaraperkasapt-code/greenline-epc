import type { clients } from "@/lib/company";

type Client = (typeof clients)[number];

export function ClientMark({ client }: { client: Client }) {
  return (
    <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border bg-muted px-3 text-center transition hover:border-primary hover:shadow-elegant">
      <span
        className="grid h-9 w-9 place-items-center rounded-md font-display text-sm font-extrabold"
        style={{ backgroundColor: client.color, color: "#fff" }}
        aria-hidden
      >
        {client.short}
      </span>
      <span className="text-xs font-bold leading-tight text-primary-deep">{client.name}</span>
    </div>
  );
}
