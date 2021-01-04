import React, { useContext } from 'react';
import AppContext from './../context/AppContext';
import SocialNetwork from './SocialNetworks/SocialNetwork.jsx';
const AboutMe = () => {
  const { state } = useContext(AppContext);
  const { social_networks } = state;
  return (
    <div className="flex flex-row flex-wrap my-2">
      {social_networks.map((social_network) => (
        <SocialNetwork
          social_network={social_network}
          key={social_network.id}
        />
      ))}
    </div>
  );
};

export default AboutMe;
