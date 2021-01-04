import React from 'react';
import SocialNetworks from '../SocialNetworks/index.jsx';
const Guest = ({ guest }) => {
  return (
    <div>
      <div className="text-sm font-medium">
        <h2 className="mt-2 mb-1">{`Invitad@: ${guest.name}`}</h2>
        <SocialNetworks social_networks={guest.social_networks} />
      </div>
    </div>
  );
};
export default Guest;
