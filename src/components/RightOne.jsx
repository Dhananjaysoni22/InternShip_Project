import React from "react";

const Right_1 = () => {
  return (
    <div>
      <div className=" lg:pl-0 md:pl-0">
      <p className="font-bold lg:pb-4 lg:pl-0 md:pl-0 pl-2">Delete information from your organization</p> 
        <p className="lg:w-[760px] lg:pb-2 md:w-[550px] lg:pl-0 md:pl-0 pl-2">
          When anyone in your organization schedules an event with an invitee,
          information about the event and everyone part of it is saved in
          Calendly If you need to delete this information from Calendly and its
          vendors for compliance reasons, you can do so without contacting
          support
        </p>
        <div className="relative">
          <button className=" lg:rounded-[6px] lg:p-3 border lg:text-[20px] border-gray-500 lg:-rotate-90 lg:absolute lg:top-0 lg:right-0 text-gray-500 shadow-lg shadow-gray-500 lg:-mt-2 lg:-mr-[320px]  md:rounded-[6px] md:p-3 md:text-[20px] md:top-0 md:right-[438px] md:absolute md:-rotate-90 md:-mt-2 md:-mr-[320px] absolute top-0 right-[-26px] -rotate-90">
            Feedback
          </button>
        </div>
        <p className="bg-[#FEF2F4] lg:w-[760px] font-bold lg:h-[40px] lg:pl-4 lg:pt-2 md:h-[40px] md:pl-4 md:pt-2 md:w-[550px] w-[380px] pl-2"> 
            Once you delete information, you won't be able to recover it
          </p>
        <p className="pt-8 pb-3 lg:pl-0 md:pl-0 pl-2">
          Invitee data will be deleted 7 days from the date you make the
          request.
        </p>
        <hr className="w-[760px]" />
      </div>
    </div>
  );
};

export default Right_1;
