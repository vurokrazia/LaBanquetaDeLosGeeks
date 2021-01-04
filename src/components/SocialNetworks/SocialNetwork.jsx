import React from 'react';

const SocialNetwork = ({ social_network }) => {
  const { name, banner, link } = social_network;
  return (
    <div className="flex flex-row sm:w-full md:w-1/4 my-1 h-10">
      <div className="flex flex-row bg-white  overflow-hidden rounded-lg shadow-xl w-full mx-1">
        <div className=" w-auto  md:w-1/2">
          <img
            className="inset-0 h-10 w-10 object-cover object-center"
            src={banner}
          />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-wrap content-start text-center ">
          <h3 className="font-semibold text-lg leading-tight truncate ">
            {name}
          </h3>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"></p>
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
