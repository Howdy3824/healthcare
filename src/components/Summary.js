import React from 'react';
import { Link , NavLink} from 'react-router-dom';

export default () => {
  
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <NavLink className="button" to="/experience" activeClassName="selected">Experiences</NavLink>
          <NavLink className="button" to="/pdonor" activeClassName="selected">Plasma Donors</NavLink>
          <NavLink className="button" to="/profile" activeClassName="selected">Profile</NavLink>
          <NavLink className="button" to="/faq" activeClassName="selected">FAQ</NavLink>
        </div>
      </div>
    </div>
  );
};
