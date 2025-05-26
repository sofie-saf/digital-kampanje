// src/pages/StatsPage.js

import React, { useEffect, useState } from 'react';
import { fetchInternetUsageData } from '../utils/api';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

function StatsPage() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInternetUsageData()
      .then((data) => {
        const values = data.value;
        const activities = data.dimension.ContentsCode.category.label;
        const years = data.dimension.Tid.category.label;

        const activityKeys = Object.keys(activities);
        const yearKeys = Object.keys(years);

        // Build chart-friendly data format
        const result = yearKeys.map((year, yearIndex) => {
          const yearLabel = years[year];
          const entry = { year: yearLabel };

          activityKeys.forEach((actKey, actIndex) => {
            const index = actIndex * yearKeys.length + yearIndex;
            entry[activities[actKey]] = values[index];
          });

          return entry;
        });

        setChartData(result);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (chartData.length === 0) return <p>Loading chart...</p>;

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f1f7fc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#003366' }}>📊 Digital Behavior of Youth (16–24)</h1>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 40, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Used the internet to share or publish self-created content" stroke="#0077cc" strokeWidth={2} />
          <Line type="monotone" dataKey="Used the internet for reading or downloading online news" stroke="#00aa88" strokeWidth={2} />
          <Line type="monotone" dataKey="Used the internet to participate in social networks" stroke="#ff6600" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatsPage;
