export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 21, prefix: "UGX ", suffix: "B+", label: "Donor funding mobilised" },
  { value: 10, label: "Countries trained in gender-responsive pedagogy" },
  { value: 23, label: "Schools supported in Ntoroko District (2024)" },
];

export function formatStat(stat: Stat): string {
  return `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`;
}
