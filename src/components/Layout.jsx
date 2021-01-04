import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
