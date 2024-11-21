import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Feedback = () => {
  const { user, unknownImage } = useContext(AuthContext)
  console.log(user)
  const [textarea, setTextarea] = useState("")
  const [feedback, setFeedback] = useState([])
  console.log(textarea)

  console.log(textarea.trim())

  const handleSubmit = () => {
    const textareaTrim = textarea.trim()
    if (textareaTrim) {
      setFeedback([...feedback, textareaTrim])
      setTextarea('')
    }
    else {
      console.log('else')
    }
  }

  console.log(feedback)

  return (
    <div className=''>
      {/* input comment*/}
      <div className='flex flex-col items-center gap-2'>
        <textarea
          value={textarea}
          placeholder='Write your feedback here'
          onChange={(e) => setTextarea(e.target.value)}
          className='border w-full md:w-1/2 border-gray-400 rounded-lg bg-white p-2 outline-none h-20 md:h-24'
        ></textarea>
        <div>
          <button onClick={handleSubmit} className='px-4 btn hover:bg-teal-800 mb-4 bg-teal-700 text-white font-bold rounded-lg'>Submit Feedback</button>
        </div>
      </div>
      {/* comment display */}
      {
        feedback.length > 0 ? (
          <div className="space-y-4">
            {feedback.map((feed, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white shadow-lg rounded-lg p-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
              >
                {/* User Image */}
                <img
                  src={user?.photoURL || unknownImage}
                  alt="User"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-teal-500"
                />

                {/* Feedback Content */}
                <div className="">
                  <h4 className="text-teal-700 font-medium text-sm sm:text-base md:text-lg">
                    {user?.displayName || "Anonymous"}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words">
                    {feed}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center text-gray-500 font-light text-sm sm:text-base md:text-lg">
            No one has given feedback yet.
          </h1>
        )
      }

    </div>
  );
};

export default Feedback;