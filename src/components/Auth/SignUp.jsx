import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import React, { useContext, useState } from 'react';
import SocialSignIn from './SocialSignIn';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'


const SignUp = () => {
   const { emailPasswordSignUp, updateProfileData } = useContext(AuthContext)

   const [showPassword, setShowPassword] = useState(false)

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      // console.log(name, photo, email, password)

      if (!/[A-Z]/.test(password)) {
         return toast.error('Must have an Uppercase letter in the password!')
      }
      if (!/[a-z]/.test(password)) {
         return toast.error("Must have a Lowercase letter in the password");
      }
      if (password.length < 6) {
         return toast.error("Length must be at least 6 character");
      }

      emailPasswordSignUp(email, password)
         .then((result) => {
            // console.log(result)
            notifySuccess()

            updateProfileData(name, photo)
               .then(() => {
                  // console.log("Name and Photo Update")
                  // navigate('/')
               })
               .catch(updateError => {
                  // console.log(updateError.message)
               })
            navigate('/')
         })
         .catch((error => {
            return toast.error(error.message)
            // return toast.error("Length must be at least 6 character")
         }))
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
      <div className='flex gap-10 flex-col md:flex-row md:justify-center my-6 p-2 md:p-4'>
         <Helmet>
            <title>Sign Up User</title>
         </Helmet>
         {/* social sign in */}
         <div>
            <SocialSignIn user={'old'} pageName={'Sign Up'}></SocialSignIn>
         </div>
         <div className="border-r-2"></div>
         {/* sign up name email and password email and pass */}
         <div>
            <div className="flex items-center">
               {/* form */}
               <div className="card bg-base-100 w-full max-w-lg shrink-0 py-2 md:py-4 bg-[#1a494220] rounded-lg">
                  <h1 className="text-2xl text-center font-semibold">Register your account</h1>
                  <form onSubmit={handleSubmit} className="card-body ">
                     {/* name */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="name" placeholder="Name" className="input input-bordered" />
                     </div>
                     {/* photo */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo URL" className="input input-bordered" />
                     </div>
                     {/* email */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                     </div>

                     {/* password */}
                     <div className="form-control relative">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={`${showPassword ? "text" : "password"}`} placeholder="password" className="input input-bordered" required />
                        <span
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-2 top-[54px]">
                           {
                              showPassword ? <IoEye /> : <IoMdEyeOff />
                           }
                        </span>
                     </div>
                     <div className="form-control mt-2 ">
                        <button className="btn btn-neutral  rounded-lg">Register</button>
                     </div>
                     <p>Already Have Account? <Link to='/signIn' className="text-[#227165] font-bold" >Login</Link></p>
                  </form>
               </div>

            </div>
         </div>

      </div>
   );
};

export default SignUp;