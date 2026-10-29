import { Flame, Factory, Fuel, Zap, Mountain, Building2 } from "lucide-react";
import { cycle, disciplines, industries } from "@/lib/company";

const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

const ringSegment = (cx: number, cy: number, rOut: number, rIn: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, rOut, a0);
  const [x1, y1] = polar(cx, cy, rOut, a1);
  const [x2, y2] = polar(cx, cy, rIn, a1);
  const [x3, y3] = polar(cx, cy, rIn, a0);
  return `M${x0} ${y0} A${rOut} ${rOut} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${rIn} ${rIn} 0 0 0 ${x3} ${y3} Z`;
};

function Teeth({ cx, cy, r, count, w, h, fill }: { cx: number; cy: number; r: number; count: number; w: number; h: number; fill: string }) {
  return (
    <g fill={fill}>
      {Array.from({ length: count }, (_, i) => {
        const a = (360 / count) * i;
        const [x, y] = polar(cx, cy, r, a);
        return <rect key={i} x={x - w / 2} y={y - h / 2} width={w} height={h} rx={3} transform={`rotate(${a} ${x} ${y})`} />;
      })}
    </g>
  );
}

const segmentColors = ["#7fb069", "#e8c468", "#e8927c", "#7ca8d9", "#9b8ed9", "#6bc5b8"];

export function CycleGear() {
  const cx = 200, cy = 200;
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md drop-shadow-2xl" role="img" aria-label="Project cycle gear">
      <Teeth cx={cx} cy={cy} r={182} count={12} w={34} h={36} fill="oklch(1 0 0)" />
      <circle cx={cx} cy={cy} r={168} fill="oklch(1 0 0)" />
      {cycle.map((c, i) => {
        const a0 = i * 60 + 2, a1 = (i + 1) * 60 - 2;
        const mid = (a0 + a1) / 2;
        const [lx, ly] = polar(cx, cy, 131, mid);
        return (
          <g key={c}>
            <path d={ringSegment(cx, cy, 162, 98, a0, a1)} fill={segmentColors[i]} opacity="0.9" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill="oklch(0.3 0.08 155)" transform={`rotate(${mid} ${lx} ${ly})`}>
              {c}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={92} fill="oklch(1 0 0)" />
      <circle cx={cx} cy={cy} r={66} fill="oklch(0.52 0.15 150)" />
      <circle cx={cx} cy={cy} r={66} fill="none" stroke="oklch(0.72 0.17 145)" strokeWidth="3" strokeDasharray="6 5" />
      <text x={cx} y={cy - 10} textAnchor="middle" fontSize="19" fontWeight="800" fill="oklch(1 0 0)">Project</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontSize="19" fontWeight="800" fill="oklch(1 0 0)">Cycle</text>
    </svg>
  );
}

export function DisciplineGear() {
  const cx = 150, cy = 150;
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs drop-shadow-2xl" role="img" aria-label="Scope of disciplines gear">
      <Teeth cx={cx} cy={cy} r={138} count={10} w={26} h={28} fill="oklch(1 0 0)" />
      <circle cx={cx} cy={cy} r={126} fill="oklch(1 0 0)" />
      <circle cx={cx} cy={cy} r={112} fill="oklch(0.96 0.03 150)" />
      <text x={cx} y={cy - 78} textAnchor="middle" fontSize="12" fontWeight="800" letterSpacing="2" fill="oklch(0.52 0.15 150)">DISCIPLINES</text>
      {disciplines.map((d, i) => (
        <text key={d} x={cx} y={cy - 52 + i * 21} textAnchor="middle" fontSize="13.5" fontWeight="600" fill="oklch(0.3 0.08 155)">
          {d}
        </text>
      ))}
      <text x={cx} y={cy + 82} textAnchor="middle" fontSize="10.5" fill="oklch(0.48 0.03 155)">Integrated in every project</text>
    </svg>
  );
}

const industryIcons = [Flame, Factory, Fuel, Zap, Mountain, Building2];

export function IndustryFlow() {
  return (
    <div className="relative mt-14">
      <div className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-primary-glow/50 md:block" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {industries.map((ind, i) => {
          const I = industryIcons[i] ?? Factory;
          return (
            <div key={ind} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-glow bg-primary-deep">
                <I className="h-5 w-5 text-primary-glow" />
              </span>
              <p className="mt-3 text-sm font-bold text-primary-foreground">{ind}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
