import React from 'react';
const Distribution = ({ distribution }) => {
  const { banner, name, description, link } = distribution;
  return (
    <div className="flex flex-row sm:w-full md:w-1/5 my-1">
      <div className="flex flex-row bg-white  overflow-hidden rounded-lg shadow-xl w-full mx-1">
        <div className=" w-auto  md:w-1/2">
          <a target="_blank" href={link}>
            <img
              className="inset-0 h-full w-full object-cover object-center"
              src={banner}
            />
          </a>
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <a target="_blank" href={link}>
            <h3 className="font-semibold text-lg leading-tight truncate">
              {name}
            </h3>
            <p className="mt-2">{description}</p>
            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
