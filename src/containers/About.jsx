import React, { useContext } from 'react';
import AppContext from './../context/AppContext';
import Distribution from './../components/Distributions/Distribution.jsx';
import { Helmet } from 'react-helmet';
const AboutMe = () => {
  const { state } = useContext(AppContext);
  const { about, distributions } = state;
  const { banner, title, description, published_at } = about;
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div id="episodes" className="pt-6 pb-12 ">
        <div id="card" className="">
          <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">
            {title}
          </h2>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              <div className="h-64 w-auto md:w-1/2">
                <img
                  className="inset-0 h-full w-full object-cover object-center"
                  src={banner}
                />
              </div>
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 className="font-semibold text-lg leading-tight truncate">
                  {title}
                </h3>
                <p className="mt-2">{description}</p>
                <p className="text-sm text-gray-700 capitalize tracking-wide font-semibold mt-2">
                  {`🍅lo con calma tkm`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap my-2">
          {distributions.map((distribution) => (
            <Distribution distribution={distribution} key={distribution.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
// {about.distribution.map((distribution) => (
//   <p key={distribution.id} className="text-sm font-medium w-full">
//     <a  href={distribution.link} target="blank" className="text-blue-700 px-1 " >
//       {distribution.name}
//     </a>
//   </p>)
// )
// }
