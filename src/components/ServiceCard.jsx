import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, image, serviceName, category, description, pricing, duration, counselor, counselorPhoto, rating } = service;

    return (
        <>
            <div className='p-4 bg-white rounded-md shadow-lg transform transition-transform hover:scale-105'>
                <div className='flex gap-2 items-center mb-2'>
                    <img src={counselorPhoto} alt={`${counselor} councilor photo`} className='w-10 h-10 rounded-full object-cover  border-2 border-teal-600' />
                    <div>
                        <h3 className='text-lg font-medium text-gray-600'>{serviceName}</h3>
                        <p className='text-sm text-gray-600 font-light'>{counselor}</p>
                    </div>
                </div>
                <div>
                    <img src={image} alt={`${serviceName} image`} className='h-56 w-full object-cover' />
                    <p className='px-2 text-gray-600 my-2'>Session Type: <span className='font-semibold'>{category}</span></p>
                    <button className='px-2 py-1 rounded-tr-xl rounded-br-xl bg-slate-100 text-gray-600 font-semibold border'>Appointment Fee: <span>{pricing}</span></button>
                    <p className='text-teal-600 font-bold mt-2'>
                        <Link to={`/details/${id}`}>
                            <button className='btn btn-sm border bg-teal-700 hover:bg-teal-800 text-white rounded-lg'>
                                Learn More
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
