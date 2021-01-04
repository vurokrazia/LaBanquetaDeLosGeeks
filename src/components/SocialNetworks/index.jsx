import React from 'react';
import SocialNetwork from './SocialNetwork.jsx';
const SocialNetworks = ({ social_networks }) => {
  return (
    <div className="flex flex-wrap">
      {social_networks.map((social_network) => (
        <SocialNetwork
          social_network={social_network}
          key={social_network.id}
        />
      ))}
    </div>
  );
};
export default SocialNetworks;
