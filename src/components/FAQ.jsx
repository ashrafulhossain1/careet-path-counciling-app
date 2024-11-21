import React from 'react';
import FAQimg from '../assets/imgFAQ.jpeg'

const FAQ = () => {
    return (
        <div className="px-4 py-8  mx-auto">
            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>

            <div className='flex flex-col-reverse md:flex-row-reverse'>
                <div className="w-full md:w-[48%] mx-auto border bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Start Your Journey with Confidence
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                        Discover how counseling can transform your life. Explore our services and find the support you need to thrive.
                    </p>
                    <div className="flex items-end justify-end">
                        <img
                            src={FAQimg}
                            alt="Counseling Illustration"
                            className="h-[320px] md:h-[550px] lg:h-[550px] w-1/2 rounded-lg object-cover  flex-grow"
                        />
                    </div>
                </div>

                <div className="w-full md:w-[48%] mx-auto">
                    {/* FAQ Item 1 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How do I book an appointment?</div>
                        <div className="collapse-content">
                            <p>You can book an appointment by visiting the "Services" section of our website. Choose the service you need and select an available time slot.</p>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What services do you offer?</div>
                        <div className="collapse-content">
                            <p>We offer a variety of services including career counseling, resume review, mental health support, and more. You can view all available services in the "Services" section.</p>
                        </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I book an appointment with a specific counselor?</div>
                        <div className="collapse-content">
                            <p>Yes! When booking an appointment, you can choose the counselor you would like to work with from a list of available experts.</p>
                        </div>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Do you offer virtual appointments?</div>
                        <div className="collapse-content">
                            <p>Yes! We offer virtual appointments for all our services, allowing you to book and attend sessions from the comfort of your home.</p>
                        </div>
                    </div>

                    {/* FAQ Item 5 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How can I cancel or reschedule my appointment?</div>
                        <div className="collapse-content">
                            <p>If you need to cancel or reschedule, simply go to your appointment page and click the "Cancel" or "Reschedule" option before the session time.</p>
                        </div>
                    </div>

                    {/* FAQ Item 6 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Are your services confidential?</div>
                        <div className="collapse-content">
                            <p>Absolutely! All services, including counseling and career advice, are confidential. Your privacy is our top priority.</p>
                        </div>
                    </div>

                    {/* FAQ Item 7 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
                        <div className="collapse-content">
                            <p>We accept payments through credit/debit cards, PayPal, and other secure online payment methods.</p>
                        </div>
                    </div>

                    {/* FAQ Item 8 */}
                    <div className="collapse collapse-arrow join-item border-base-300 border mb-4 bg-slate-50">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I get a refund if I cancel my appointment?</div>
                        <div className="collapse-content">
                            <p>If you cancel your appointment within the allowed time frame, you can receive a full refund. Please refer to our cancellation policy for more details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
