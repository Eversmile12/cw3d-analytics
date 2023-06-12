"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useDateRange from "../../context/useDateRange";

const InstallGraph: React.FC = () => {
  const { sessionData } = useDateRange();

  const data = sessionData?.reduce((result, session) => {
    const date = session.timestamp;

    if (result[date]) {
      result[date] += 1;
    } else {
      result[date] = 1;
    }

    return result;
  }, {} as { [date: string]: number });
  if (data) {
  }

  const chartData = Object.keys(data || {}).map((date) => ({
    date,
    sessions: data![date] || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sessions" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default InstallGraph;
