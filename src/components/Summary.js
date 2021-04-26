import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/profile">Username</Link>
          <Link className="button" to="/experience">Experiences</Link>
        </div>
      </div>
    </div>
  );
};
