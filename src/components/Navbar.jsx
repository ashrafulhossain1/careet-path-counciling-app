import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { split } from 'postcss/lib/list';

const Navbar = () => {
    const { user, logOut, unknownImage, loader, appointment } = useContext(AuthContext)

    console.log(user)

    const handleLogOut = () => {
        logOut()
    }

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/profile">My Profile</NavLink>
            </li>
            {user && (
                <>
                    <li className="relative">
                        <NavLink to="/appointment">Appointment</NavLink>
                        {appointment?.length > 0 && (
                            <p className="absolute -top-3 right-14 text-[10px] text-white rounded-full px-1">
                                {appointment.length}
                            </p>
                        )}
                    </li>
                </>
            )}
        </>
    );


    return (
        <div className="navbar text-white font-medium max-w-screen-xl mx-auto sticky top-0" >
            <div className="navbar-start w-4/12 md:w-1/2">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-green-900/60 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link to='/' className=" text-xl btn btn-ghost">Lifezy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end flex-grow md:w-4/12">
                <div className='flex items-center gap-2 justify-center mr-4'>
                    {
                        user && <img title={user.displayName} src={user?.photoURL || unknownImage} alt="" className='h-8 md:h-10 w-8 md:w-10 rounded-full border-2 border-teal-600' />
                    }
                    {
                        user && <span className='text-slate-200 font-light text-xs md:text-base 
                        border-l border-b pl-1'>{user.displayName}</span>
                    }
                </div>
                {
                    user ? <button onClick={handleLogOut} className='text-xs btn btn-ghost md:text-base'>Log out</button> : <>

                        <NavLink to='/signIn' className='text-xs btn btn-ghost  md:text-base'>Sign In</NavLink>
                        <NavLink to='/signup' className='text-xs  btn btn-ghost md:text-base ml-3'>Sign Up</NavLink>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;