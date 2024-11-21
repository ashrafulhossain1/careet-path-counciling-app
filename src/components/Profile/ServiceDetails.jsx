import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Feedback from '../Feedback';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const { appointment, setAppointment } = useContext(AuthContext)
    const service = useLoaderData()
    // console.log(service)
    const { id, image, serviceName, category, description, pricing, duration, counselor, counselorPhoto, rating, coreFeatures } = service;


    const handleBookAppointment = (serviceId) => {

        console.log('book appointment', id)
        if (appointment.includes(serviceId)) {
            // notifyError()
            toast.error('Already Booked Of This Appointment!')
        }
        else {
            setAppointment([...appointment, serviceId])
            notifySuccess()
        }
    }

    
    const notifySuccess = () => {
        Swal.fire({
            title: 'Welcome!',
            text: 'You Have Successfully Book Appointment',
            icon: 'success',
            confirmButtonText: 'okay'
        })
    }


    return (
        <div className="my-10 px-4 max-w-screen-xl mx-auto">
            <Helmet>
                <title>Product Details</title>
            </Helmet>
            <span className='text-teal-700 font-bold text-2xl text-center flex justify-center'>Lifezy</span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8">
                Information and Guidance
            </h1>
            <div className="flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-8 ">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-3 md:p-6 shadow-lg rounded-lg bg-white ">
                    <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        {serviceName}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        {description}
                    </p>
                    <div>
                        <h3 className="text-gray-700 font-bold border-l-2 border-gray-700 pl-1">
                            Core Features:
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {coreFeatures.map((features, index) => (
                                <li key={index} className="text-gray-600">
                                    {features.feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm md:text-base font-medium text-gray-700">Category:</span>
                            <span className="text-sm md:text-base text-gray-500">{category}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm md:text-base font-medium text-gray-700">Pricing:</span>
                            <span className="text-sm md:text-base text-gray-500">${pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm md:text-base font-medium text-gray-700">Duration:</span>
                            <span className="text-sm md:text-base text-gray-500">{duration}</span>
                        </div>
                        <div className='flex space-y-2  flex-col md:flex-row md:items-center md:justify-between my-3 md:my-4'>
                            <div className="flex items-center">
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-gray-300 mr-4"
                                    src={counselorPhoto}
                                    alt={counselor}
                                />
                                <div>
                                    <p className="text-sm md:text-base font-medium text-gray-800">{counselor}</p>
                                    <p className="text-sm text-gray-500">Rating: {rating}⭐</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleBookAppointment(id)} className='border btn px-4 rounded-lg bg-teal-700 font-medium text-white hover:bg-teal-800 w-full md:w-auto'>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full md:md:w-1/2 p-2 bg-white">
                    <img
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        src={image}
                        alt={serviceName}
                    />
                </div>
            </div>
            <div className='text-center my-2 '>
                <Link to={'/'} className='btn btn-warning'>Back to Services</Link>
            </div>
            <div className='border-t-2 mt-10'>
                <h3 className='text-base md:text-lg font-bold text-center my-4 text-gray-600 mx-auto md:w-3/12 border-b pb-2'>Write Your Feedback</h3>
                <Feedback></Feedback>
            </div>
        </div>

    );
};

export default ServiceDetails;