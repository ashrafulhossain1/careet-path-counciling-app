import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast'

const Edit = () => {
    const { updateProfileData, user, unknownImage, updateUser, setUpdateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value || user.displayName;
        const photo = e.target.photo.value || user.photoURL;

        // if (displayName) {
        //     console.log(displayName)
        // }
        // if (photoURL) {
        //     console.log(photoURL)
        // }

        // const updatedData = { displayName, photoURL }

        updateProfileData(name, photo)
            .then(() => {
                // console.log("Profile Updated")
                setUpdateUser(user)
                toast.success("Profile Update Successfully")
                navigate('/profile')
            })
            .catch((error) => {
                // console.log("Mistake Ho Gaya", error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Edit Profile</title>
            </Helmet>
            <div className="flex items-center mb-4 md:mb-10">
                {/* form */}
                <div className="card mx-auto bg-base-100 w-full max-w-lg shrink-0 py-2 md:py-4 bg-[#1a494220] rounded-lg">
                    <h1 className="text-2xl text-center font-semibold">Update Your Profile</h1>
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
                        {/* submit */}
                        <div className="form-control mt-2  grid grid-cols-2 gap-4 flex-row">
                            <Link to={'/profile'} className='btn btn-neutral  rounded-lg'>Go Back</Link>
                            <button type='submit' className="btn btn-neutral  rounded-lg">Save Changes</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Edit;