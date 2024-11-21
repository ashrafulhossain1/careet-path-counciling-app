import React from "react";

const ScheduleModal = ({ service }) => {
  if (!service) return null; 


  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle p-2">
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
              src={service.counselorPhoto}
              alt={service.serviceName}
              className="w-full h-64 object-cover rounded-md shadow-md"
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
