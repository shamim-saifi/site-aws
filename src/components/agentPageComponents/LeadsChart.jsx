import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { server } from "../../redux/store";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeadsChart = ({ url1, url2 }) => {
  const [labels, setLabels] = useState([]);
  const [leadCounts, setLeadCounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [weekType, setWeekType] = useState("last"); // 'last' or 'current'

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url =
        weekType === "current"
          ? `${server}/${url1}`
          : `${server}/${url2}`;

      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
        }
      });
      setLabels(res.data.labels);
      setLeadCounts(res.data.data);
    } catch (err) {
      console.error("Failed to fetch chart data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [weekType]);

  const data = {
    labels,
    datasets: [
      {
        label: "Leads Sold",
        data: leadCounts,
        backgroundColor: "#F97316",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Leads Sold (${weekType === "current" ? "This" : "Last"} Week)`,
        color: "#F97316",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#4B5563" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#4B5563" },
        grid: { color: "#E5E7EB" },
      },
    },
  };

  return (
    <div className="bg-orange-50 rounded-xl shadow border border-orange-200 p-4 mx-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-orange-600">Leads Chart</h2>
        <div className="space-x-2">
          <button
            onClick={() => setWeekType("last")}
            className={`px-3 py-1 rounded text-sm font-medium border ${weekType === "last"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 border-orange-300"
              }`}
          >
            Last Week
          </button>
          <button
            onClick={() => setWeekType("current")}
            className={`px-3 py-1 rounded text-sm font-medium border ${weekType === "current"
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 border-orange-300"
              }`}
          >
            This Week
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center text-sm text-orange-600 py-10">Loading chart…</div>
      ) : (
        <div className="relative w-full" style={{ minHeight: "300px" }}>
          <Bar data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default LeadsChart;
