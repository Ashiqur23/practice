import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    {
      id: 1,
      name: "John",
      math: 85,
      physics: 70,
      chemistry: 90,
    },
    {
      id: 2,
      name: "Mary",
      math: 90,
      physics: 75,
      chemistry: 80,
    },
    {
      id: 3,
      name: "Bob",
      math: 70,
      physics: 80,
      chemistry: 75,
    },
    {
      id: 4,
      name: "Alice",
      math: 95,
      physics: 90,
      chemistry: 85,
    },
    {
      id: 5,
      name: "Tom",
      math: 80,
      physics: 85,
      chemistry: 70,
    },
    {
      id: 6,
      name: "Sara",
      math: 75,
      physics: 70,
      chemistry: 80,
    },
    {
      id: 7,
      name: "David",
      math: 85,
      physics: 80,
      chemistry: 85,
    },
    {
      id: 8,
      name: "Emily",
      math: 90,
      physics: 95,
      chemistry: 90,
    },
    {
      id: 9,
      name: "Kevin",
      math: 80,
      physics: 75,
      chemistry: 80,
    },
    {
      id: 10,
      name: "Lucy",
      math: 85,
      physics: 85,
      chemistry: 90,
    },
    {
      id: 11,
      name: "Ben",
      math: 75,
      physics: 90,
      chemistry: 75,
    },
    {
      id: 12,
      name: "Lisa",
      math: 80,
      physics: 80,
      chemistry: 85,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey="chemistry" stroke="#ffbb00"></Line>
        <Line dataKey="physics" stroke="#003ffc"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
