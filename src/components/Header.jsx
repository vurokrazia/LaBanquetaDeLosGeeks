import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Header = () => {
  const { state } = useContext(AppContext);
  const { social_networks } = state;
  return (
    <div className="relative bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Inicio
            </Link>
            <Link
              to="/episodes"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Episodes
            </Link>

            {social_networks.map((social_network) => (
              <a
                target="_blank"
                key={social_network.id}
                href={social_network.link}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {social_network.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
