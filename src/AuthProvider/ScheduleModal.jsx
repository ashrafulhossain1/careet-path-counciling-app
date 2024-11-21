import React from "react";

const ScheduleModal = ({ service }) => {
  if (!service) return null; 

//   {
//     "id": 3,
//     "image": "https://i.ibb.co/p1qmMnT/paranting.jpg",
//     "serviceName": "Resume Review",
//     "category": "Offline",
//     "description": "Get detailed feedback on your resume’s structure and content to make it stand out in your job search.",
//     "pricing": 30,
//     "duration": "06-12-24 10am-11am",
//     "counselor": "Mr. John Doe",
//     "counselorPhoto": "https://i.ibb.co/DQSnsQw/psychologist.jpg",
//     "rating": 4.7,
//     "coreFeatures": [
//       {
//         "feature": "Detailed feedback on resume structure"
//       },
//       {
//         "feature": "Suggestions for content optimization"
//       },
//       {
//         "feature": "Guidance on tailoring resumes for job roles"
//       }
//     ],
//     "study": "Stanford University (Non-PhD) US",
//     "schedule": [
//       {
//         "day": "Monday",
//         "time": "10am-11am"
//       },
//       {
//         "day": "Wednesday",
//         "time": "10am-11am"
//       },
//       {
//         "day": "Friday",
//         "time": "9am-10am"
//       }
//     ],
//     "contactNumber": "+1 650 723 1234"
//   },



  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* Modal Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">{service.serviceName} ({service.category})</h2>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </button>
          </div>

          {/* Modal Content */}
          <div className="mt-4">
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-52 object-cover rounded-md shadow-md"
            />

            {/* Details Section */}
            <div className="mt-4">
              <p className="font-medium text-orange-500"> {service.counselor}
              </p>
              <p className="text-gray-500">{service.study}</p>
              <p className="text-gray-500"><span className="text-gray-600 font-medium">Contact</span> {service.contactNumber}</p>
              <p className="font-medium">
                <span className="text-blue-600">Service Costing:</span> ${service.pricing}
              </p>
            </div>

            {/* Schedule Section */}
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-gray-800">Weekly Schedule</h3>
              <ul className="list-disc ml-5 text-gray-600">
                {service.schedule.map((item, index) => (
                  <li key={index}>
                    <span className="font-medium text-gray-800">{item.day}:</span>{" "}
                    {item.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          {/* <div className="modal-action mt-4">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default ScheduleModal;
