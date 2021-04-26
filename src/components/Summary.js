import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/experience">Experiences</Link>
          <Link className="button" to="/pdonor">Plasma Donors</Link>
          <Link className="button" to="/profile">Profile</Link>
          <Link className="button" to="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  );
};
