import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Episode from '../components/Episodes/Episode.jsx';
import useEpisodes from '../hooks/useEpisodes'
import AppContext from './../context/AppContext';
const Episodes = () => {
  const { state } = useContext(AppContext);
  const { episodes } = state;
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
