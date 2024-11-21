import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
                {/* About Section */}
                <div className="bg-white rounded shadow-md p-6 max-w-2xl w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
                    <p className="text-gray-600 mb-6">
                        Welcome to our website! We value your feedback and are always here to help. If you have any questions, suggestions, or need support, please don't hesitate to reach out. Use the form below to send us a message, and we will get back to you as soon as possible. You can also contact us through the details provided in the section below.
                    </p>

                    {/* Form Section */}
                    <form className="space-y-4">
                        <h1 className='text-lg md:text-xl font-light'>If You have any Inquiry, please contact with us.</h1>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 w-full border rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full border rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                className="mt-1 w-full border rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                rows="4"
                                placeholder="Write your message here"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;