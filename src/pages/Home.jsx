import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Counter from '../components/Counter';
import FAQ from '../components/FAQ';
import { Helmet } from 'react-helmet-async';
import ChartStats from '../components/ChartStats';

const Home = () => {
    const allServices = useLoaderData()
    // console.log(allServices)

    // className="card w-80 bg-base-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl"

    return (
        <div className=' mx-auto'>
            <Helmet>
                <title>Career Path | Home</title>
            </Helmet>
            <div className='max-w-screen-2xl mx-auto'>
                <Banner></Banner>
            </div>

            {/* services sectiopn */}
            <section id="services" className='max-w-screen-xl mx-auto'>
                <div className=" pt-12 px-6 md:pt-20 md:px-12 text-center">
                    <h1 className="text-2xl lg:text-5xl  font-bold text-gray-700 drop-shadow-lg">
                        Empowering Your Journey <span className="text-[#115E59]">-Personalized Counseling Services</span>
                    </h1>
                    <p className="mt-3 text-base md:text-xl lg:text-2xl md:w-2/3 mx-auto text-gray-600">
                        Expert guidance for careers, mental health, and personal growth—tailored to your needs, one session at a time.
                    </p>
                </div>
                {/* cards */}
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16 py-10'>
                    {
                        allServices.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </section>
            {/* count */}
            <section className='bg-white  '>
                <div className='bg-gray-200 py-10 md:py-24 rounded-[40px]'>
                    <div className='max-w-screen-xl mx-auto'>
                        <Counter></Counter>
                    </div>
                </div>
                <div className='bg-white'>
                    <div>
                        <ChartStats></ChartStats>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className='py-10 bg-slate-100'>
                <div className='max-w-screen-xl mx-auto'>
                    <FAQ></FAQ>
                </div>
            </section>
        </div>
    );
};

export default Home;