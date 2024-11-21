import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Extra from "../pages/Extra";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import ForgetPassword from "../pages/ForgetPassword";
import ProtectedRoute from "../Protected/ProtectedRoute";
import Preview from "../components/Profile/Preview";
import Edit from "../components/Profile/Edit";
import ServiceDetails from "../components/Profile/ServiceDetails";
import BookAppointment from "../pages/BookAppointment";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/services.json")
            },
            {
                path: '/profile',
                element: <ProtectedRoute><MyProfile></MyProfile></ProtectedRoute>,
                children: [
                    {
                        path: '/profile',
                        element: <Preview></Preview>
                    },
                    {
                        path: '/profile/edit',
                        element: <Edit></Edit>
                    }
                ]
            },
            {
                path: '/details/:id',
                element: <ProtectedRoute><ServiceDetails></ServiceDetails></ProtectedRoute>,
                loader: async ({ params }) => {
                    // console.log(params)
                    const res = await fetch("/services.json")
                    const data = await res.json()
                    const singleService = data.find(service => service.id == params.id)
                    return singleService
                }
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/signIn/reset',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/appointment',
                element: <ProtectedRoute><BookAppointment></BookAppointment></ProtectedRoute>,
                loader: () => fetch("/services.json")
            },
        ]
    }
])

export default routes;