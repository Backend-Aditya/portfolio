type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionResponse = {
  contributions: ContributionDay[];
};

const LEVEL_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function buildWeeks(days: ContributionDay[]) {
  const weeks: (ContributionDay | null)[][] = [];
  let week: (ContributionDay | null)[] = new Array(7).fill(null);

  days.forEach((day) => {
    const dow = new Date(day.date + "T00:00:00Z").getUTCDay();
    week[dow] = day;
    if (dow === 6) {
      weeks.push(week);
      week = new Array(7).fill(null);
    }
  });
  if (week.some((d) => d)) weeks.push(week);

  return weeks;
}

export async function ContributionGraph({ username }: { username: string }) {
  let days: ContributionDay[] = [];

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } },
    );
    if (res.ok) {
      const data: ContributionResponse = await res.json();
      days = data.contributions ?? [];
    }
  } catch {
    days = [];
  }

  if (days.length === 0) return null;

  const weeks = buildWeeks(days);
  const total = days.reduce((sum, d) => sum + d.count, 0);

  let lastMonth = -1;
  const monthMarkers = weeks.map((week) => {
    const firstDay = week.find((d) => d);
    if (!firstDay) return null;
    const month = new Date(firstDay.date + "T00:00:00Z").getUTCMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_LABELS[month];
    }
    return null;
  });

  return (
    <div className="w-full">
      <div className="flex w-full gap-[2px]">
        {monthMarkers.map((label, i) => (
          <span key={i} className="flex-1 text-[10px] text-muted-foreground">
            {label}
          </span>
        ))}
      </div>
      <div className="mt-1 flex w-full gap-[2px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-1 flex-col gap-[2px]">
            {week.map((day, di) => (
              <div
                key={di}
                className="aspect-square w-full rounded-[1px]"
                style={{
                  backgroundColor: day ? LEVEL_COLORS[day.level] : "transparent",
                }}
                title={day ? `${day.count} contributions on ${day.date}` : undefined}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {total.toLocaleString()} contributions in the last year
      </p>
    </div>
  );
}
