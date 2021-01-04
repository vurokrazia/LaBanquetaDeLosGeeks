import { useState, useEffect } from 'react';

const useEpisodes = url => {
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    fetch(url)
      .then(response => response ? response.json() : [])
      .then(data => setEpisodes(data))
  }, [url])
  return episodes;
}

export default useEpisodes;