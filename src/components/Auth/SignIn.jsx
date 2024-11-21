import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'

const SignIn = () => {
    const { emailPasswordSignIn, setForgetEmail } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location.state)
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        emailPasswordSignIn(email, password)
            .then((result) => {
                // console.log(result.user)
                notifySuccess()
                navigate(location?.state ? location.state : '/')

            })
            .catch((error) => {
                // toast.error(error.message)
                return toast.error("Please input correct email and password")
            })
    }
    const handleForgetPassword = () => {
        const emailValue = emailRef.current.value;
        console.log(emailValue)
        setForgetEmail(emailValue)
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
        <div className="flex gap-4 md:gap-10 flex-col md:flex-row md:justify-center md:my-6 p-2 md:p-4">
            <Helmet>
                <title>Sign In User</title>
            </Helmet>
            {/* sign in with social media */}
            <div>
                <SocialSignIn location={location} navigate={navigate} user={'new'} pageName={'Log In'}></SocialSignIn>
            </div>
            <div className="border-r-2"></div>
            {/* sign in with */}
            <div>
                <div className="flex justify-center items-center">
                    {/* form */}
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 py-2 md:py-4 bg-[#1a494220] rounded-lg">
                        <h1 className="text-2xl text-center font-semibold">Login your account</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {/* error */}
                                <label onClick={handleForgetPassword} className="label">
                                    <Link to='/signIn/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-neutral rounded-lg">Login</button>
                            </div>
                            <p>Don't have Account? <Link to='/signUp' className="text-[#227165] font-bold">Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;