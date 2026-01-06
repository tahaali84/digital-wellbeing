import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function UsageChart({ data }) {
  return (
    <>
      <div className="chart-title">Weekly Usage (hours)</div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar
            dataKey="hours"
            fill="#6366f1"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default UsageChart;
