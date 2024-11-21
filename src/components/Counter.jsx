import { GiGiftOfKnowledge, GiGraduateCap, GiSuitcase, GiClockwork, GiTeacher } from "react-icons/gi";
import React from "react";
import CountUp from "react-countup";
import ChartStats from "./ChartStats";

const Counter = () => {
    return (
        <div>
            <h1 className="text-xl sm:text-2xl md:text-5xl text-center font-light mb-8">
                Statistics of Career Path
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {/* Users Enrolled */}
                <div className="border bg-white p-5 shadow-lg rounded-lg">
                    <GiGiftOfKnowledge className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-blue-500 mx-auto mb-4" />
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-800">
                        <CountUp start={0} end={3000} duration={5} />
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-xl font-medium mt-2">Users Enrolled</h3>
                </div>

                {/* Specialists */}
                <div className="border bg-white p-5 shadow-lg rounded-lg">
                    <GiTeacher className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-red-500 mx-auto mb-4" />
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-800">
                        <CountUp start={0} end={42} duration={15} />+
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-xl font-medium mt-2">Specialists</h3>
                </div>

                {/* 95% Positive Feedback */}
                <div className="border bg-white p-5 shadow-lg rounded-lg">
                    <GiSuitcase className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-green-500 mx-auto mb-4" />
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-800">
                        <CountUp start={0} end={95} duration={5} />%
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-xl font-medium mt-2">Positive Feedback</h3>
                </div>

                {/* Total Success Stories */}
                <div className="border bg-white p-5 shadow-lg rounded-lg">
                    <GiClockwork className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-yellow-500 mx-auto mb-4" />
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-800">
                        <CountUp start={0} end={1500} duration={10} />+
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-xl font-medium mt-2">Total Success Stories</h3>
                </div>
            </div>
            <div>
               <ChartStats></ChartStats>
            </div>
        </div>
    );
};

export default Counter;
