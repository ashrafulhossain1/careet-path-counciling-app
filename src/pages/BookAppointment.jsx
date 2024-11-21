import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookCard from '../components/BookCard';
import { Helmet } from 'react-helmet-async';

const BookAppointment = () => {

    const { appointment } = useContext(AuthContext)
    const [bookAppointment, setBookAppointment] = useState([])

    const services = useLoaderData()
    // console.log(services, appointment)
    useEffect(() => {
        const filteredData = [...services].filter((service) => appointment.includes(service.id))
        // console.log(filteredData, appointment)
        setBookAppointment(filteredData)
    }, [])

    const navigate = useNavigate();
    return (
        <div className='p-4'>
            <Helmet>
                <title>Book Appointment | Career Path</title>
            </Helmet>
            <div className='my-4 md:my-8 max-w-screen-xl mx-auto'>
                <h1 className="text-center test-2xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
                <p className="text-center text-sm md:text-base mb-8">Select a service below to book your appointment with our expert counselors.</p>
                <div className="divider"></div>
            </div>
            {
                bookAppointment.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 md:w-2/3 lg:grid-cols-3 mx-auto md:gap-10 space-y-4'>
                        {bookAppointment.map((item) => (
                            <BookCard service={item} key={item.id}></BookCard>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center space-y-6 mt-10'>
                        <p className="text-xl md:text-3xl font-bold text-red-500 text-center">
                            No appointments available.
                        </p>
                        <button
                            onClick={() => navigate('/#services')}
                            className="btn btn-md md:btn-lg px-6  bg-teal-700 hover:bg-teal-800 rounded-lg text-white text-lg shadow-lg hover:scale-105 transform transition-transform"
                        >
                            Go to Services
                        </button>
                    </div>
                )
            }
        </div>
    );

};

export default BookAppointment;