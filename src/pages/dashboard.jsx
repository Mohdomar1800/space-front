import SideNavBar from "../components/dashboard/sideNavBar";
import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const cargoData = [
  { status: "Delivered", count: 30 },
  { status: "In Transit", count: 12 },
  { status: "Delayed", count: 5 },
  { status: "Pending", count: 8 },
];

const cargoArrivals = [
  { month: "Jan", count: 10 },
  { month: "Feb", count: 15 },
  { month: "Mar", count: 18 },
  { month: "Apr", count: 25 },
];

const weightTrends = [
  { month: "Jan", weight: 1000 },
  { month: "Feb", weight: 1200 },
  { month: "Mar", weight: 950 },
  { month: "Apr", weight: 1100 },
];

function Dashboard() {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
      <div className="flex-1 p-6 ml-64">
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {cargoData.map((item) => (
            <Card key={item.status} className="p-4">
              <CardContent>
                <Typography variant="h6">{item.status}</Typography>
                <Typography variant="h4">{item.count}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h6" className="mb-2">Cargo Status Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={cargoData} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h6" className="mb-2">Monthly Cargo Arrivals</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cargoArrivals}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <Typography variant="h6" className="mb-2">Cargo Weight Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weightTrends}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
