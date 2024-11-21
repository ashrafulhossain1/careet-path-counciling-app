import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const ChartStats = () => {
    const marksData = [
        { month: "First", previous: 20, running: 5 },
        { month: "Second", previous: 30, running: 55 },
        { month: "Third", previous: 15, running: 65 },
        { month: "Fourth", previous: 40, running: 60 },
        { month: "Fifth", previous: 20, running: 75 },
    ];

    return (
        <div className="text-black my-6 px-4">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-center">PRODUCTIVITY CHART</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                    <div className="flex justify-center items-center">
                        <button className="h-4 w-4 border bg-green-600"></button>
                        <span className="text-gray-600 ml-2">- Present Time</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="h-4 w-4 border bg-red-600"></button>
                        <span className="text-gray-600 ml-2">- Previous Time</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <LineChart
                    width={window.innerWidth > 768 ? 600 : 300}
                    height={window.innerWidth > 768 ? 300 : 200}
                    data={marksData}
                >
                    <XAxis
                        dataKey="month"
                        label={{
                            value: "--------------Month---------------",
                            position: "insideBottom",
                            dy: 10,
                        }}
                    />
                    <YAxis
                        label={{
                            value: "Productivity Level",
                            angle: -90,
                            position: "insideCenter",
                            dx: -10,
                        }}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line
                        type="monotone"
                        dataKey={"previous"}
                        stroke="red"
                        name="Previous Productivity"
                    />
                    <Line
                        type="monotone"
                        dataKey={"running"}
                        stroke="green"
                        name="Current Productivity"
                    />
                </LineChart>
            </div>
        </div>
    );
};

export default ChartStats;
