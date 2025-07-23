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

const PerformanceTrendChart = ({ data }) => {
    return (<div className="w-full max-w-4xl bg-emerald-100 rounded-xl shadow-md p-4 mt-8">
        <h3 className="text-2xl font-bold mb-2 text-center text-emerald-700">RECENT PERFORMANCE</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 15, bottom: 15, left: 5 }}>
                <CartesianGrid stroke="white" strokeDasharray="2 2" strokeOpacity={0.9} />
                <XAxis dataKey="round" stroke="green" />
                <YAxis stroke="green" domain={['auto', 'auto']} label={{ value: 'SCORE', position: 'insideLeft', angle: -90 }} />
                <Legend align="center" />
                <Tooltip contentStyle={{ backgroundColor: "white", border: "none", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="score" stroke="#34d399" strokeWidth={2} dot={{ r: 3 }} name="Recent Scores" />
            </LineChart>
        </ResponsiveContainer>
    </div>);
}

export default PerformanceTrendChart;