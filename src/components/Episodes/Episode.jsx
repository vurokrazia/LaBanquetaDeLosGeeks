import React from 'react';
import Guest from '../Guests/Guest.jsx';
const Episode = ({ episode }) => {
  let { published_at, test, banner, title, description, link } = episode;
  console.log(banner);
  return (
    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div className="h-64 w-auto md:w-1/2">
          <img
            className="inset-0 h-full w-full object-cover object-center"
            src={banner ? banner : "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/10716574/10716574-1608736009913-94f4dc120874.jpg"}
          />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 className="font-semibold text-lg leading-tight truncate">
            {title}
          </h3>
          <p className="mt-2">{description}</p>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            {false ? `Invitad@: ${published_at}` : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Episode;
