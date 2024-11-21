import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Preview profile</title>
            </Helmet>
            <div className="my-4 md:my-8">
                <h2 className="text-xl md:text-3xl font-medium text-center text-gray-700 mb-2">Welcome To Your Profile Dashboard</h2>
                <p className="md:text-xl font-light text-center text-gray-600 mb-6">
                    Here, you can view and update your personal information to keep your account up-to-date and secure.
                </p>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MyProfile;