import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-2xl md:text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-2">Sorry, the page you're looking for doesn't exist.</p>
            <Link
            to={'/'}

                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;