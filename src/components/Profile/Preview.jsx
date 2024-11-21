import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Preview = () => {
    const { user, unknownImage , updateUser, setUpdateUser} = useContext(AuthContext)
    // console.log("Preview PAGE",user)
    

    return (
        <div>
            <div>
                <img className='w-36 h-36 border-4 border-purple-600 mt-10 rounded-full mx-auto '
                    src={user?.photoURL || unknownImage} alt="" />
                <div className='text-center my-5 space-y-1'>
                    <h3 className='text-xl md:text-3xl font-bold'>{user?.displayName || 'Unknown User'} </h3>
                    <p className='text-lg font-light'>Email: {user?.email ? `${user.email}` : "NOT FOUND"}</p>
                    <p className='text-lg font-light'>Verification Status: {user?.emailVerified ? "Verified" : "Not Verified"}</p>
                    <Link to='/profile/edit'>
                        <button className='border px-4 mt-6 py-2 rounded-xl text-white font-medium bg-[#1a4942]'>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Preview;