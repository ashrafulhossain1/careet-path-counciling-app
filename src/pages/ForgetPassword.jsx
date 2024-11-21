import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {

    const navigate = useNavigate()
    const { forgetPassword, forgetEmail, setForgetEmail } = useContext(AuthContext)

    // console.log("YES", forgetEmail)

    const handleSubmit = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;


        forgetPassword(forgetEmail)
            .then((result) => {
                // console.log('get code', result)
                window.open("https://mail.google.com/", "_blank")
                navigate("/signin")
            })
            .catch((error) => {
                // console.log(error.message)
            })
    }

    return (
        <div className="flex justify-center items-center my-6 p-2 md:p-4">
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            {/* form */}
            <div className="card bg-base-100 w-full max-w-lg shrink-0 py-2 md:py-4 bg-[#1a494220] rounded-lg">
                <h1 className="text-2xl text-center font-semibold">Send recovery email</h1>
                <form onSubmit={handleSubmit} className="card-body ">
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
                        <input value={forgetEmail} onChange={(e) => setForgetEmail(e.target.value)} type="email" placeholder="Email Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-neutral rounded-lg">Send Reset Email</button>
                    </div>
                    <p>Don't have Account? <Link to='/signUp' className="text-[#227165] font-bold">Sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;