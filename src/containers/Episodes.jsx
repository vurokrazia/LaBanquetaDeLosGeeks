import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Episode from '../components/Episodes/Episode.jsx';
import useEpisodes from '../hooks/useEpisodes'

const Episodes = () => {
  const episodes =  useEpisodes("http://localhost:3007/api/v1/episodes/");
  return (
    <>
      <Helmet>
        <title>List of episodes</title>
      </Helmet>
      <div id="episodes" className="pt-6 pb-12 ">
        <div id="card" className="">
          {episodes.map((episode) => (
            <Episode episode={episode} key={episode.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Episodes;
