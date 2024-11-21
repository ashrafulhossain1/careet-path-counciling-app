import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleModal from '../AuthProvider/ScheduleModal';

const BookCard = ({ service }) => {
    const { id, image, serviceName, category, description, pricing, duration, counselor, counselorPhoto, rating, coreFeatures } = service;
    return (
        <div className="bg-white shadow-lg rounded-lg p-4  w-full mx-auto">
            <img src={counselorPhoto} alt="" className='w-10 h-10 rounded-full object-cover p-[2px] bg-teal-100' />
            <p className="text-gray-600 mt-2">
                Counselor: <span className="font-medium">{counselor}</span>
            </p>
            <h3 className="text-xl font-semibold text-gray-800">{serviceName}</h3>

            <div className="flex justify-between items-center mt-4">
                {/* Details Button */}
                <Link
                    to={`/details/${id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Details
                </Link>

                {/* Schedule Button */}
                <button
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Schedule
                </button>
            </div>
            <ScheduleModal service={service} key={id}></ScheduleModal>
        </div>
    );
};

export default BookCard;