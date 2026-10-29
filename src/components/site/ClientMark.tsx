import type { clients } from "@/lib/company";

type Client = (typeof clients)[number];

export function ClientMark({ client }: { client: Client }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-lg border bg-card px-4 transition hover:border-primary hover:shadow-elegant">
      <img
        src={client.logo}
        alt={`Logo ${client.name}`}
        loading="lazy"
        className="max-h-14 w-auto max-w-full object-contain"
      />
    </div>
  );
}
