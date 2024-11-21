import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import React, { useContext } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const SocialSignIn = ({ pageName, user }) => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("SOCIAL SIGN IN", location)

    const { googleSignIn, githubSignIn } = useContext(AuthContext)


    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                notifySuccess()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('google Login error', error.message)
            })

    }

    const handleGithub = () => {
        githubSignIn()
            .then((result) => {
                notifySuccess()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('google Login error', error.message)
            })
    }


    const notifySuccess = () => {
        Swal.fire({
            title: 'Welcome',
            text: 'You are Login | Career Path',
            icon: 'success',
            confirmButtonText: 'Okay'
        })
    }
    return (
        <div>
            <h2 className="text-xl font-light">Career Path</h2>
            <h3 className="text-5xl font-semibold mb-4">{pageName}</h3>
            <button onClick={handleGoogle} className="flex items-center text-2xl border gap-2 px-4 py-2 rounded-xl w-full">
                <FcGoogle />
                <p className="text-xl">{pageName} With Google</p>
            </button>
            <button onClick={handleGithub} className="flex items-center text-2xl border gap-2 px-4 py-2 rounded-xl w-full mt-2">
                <IoLogoGithub />
                <p className="text-xl">{pageName} With Github</p>
            </button>
            {/* 
            <div className="mt-4 text-gray-600 text-lg">
                {user === "old" && <p>Already Have Account? <Link to='/signIn' className="text-[#227165] font-bold" font-bold>Login</Link></p>}
                {user === "new" && <p>Don't have Account? <Link to='/signUp' className="text-[#227165] font-bold">Sign up now!</Link></p>}
            </div> */}

        </div>
    );
};




export default SocialSignIn;


