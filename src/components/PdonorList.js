import React from 'react';
import { connect } from 'react-redux';
import PdonorListItem from './PdonorListItem';
//import selectExpenses from '../selectors/expenses';

export const PdonorList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Plasma Donors</div>
      <div className="show-for-desktop">Name</div>
      <div className="show-for-desktop">Details</div>
    </div>
    <div className="list-body">
      {
        props.profiles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No plasma donors registered currently.</span>
          </div>
        ) : (
            props.profiles.map((profile) => {
              return <PdonorListItem key={profile.phone} {...profile} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles
  };
};

export default connect(mapStateToProps)(PdonorList);