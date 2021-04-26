import React from 'react';
import { connect } from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
//import selectExpenses from '../selectors/expenses';

export const ExperienceList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Experiences</div>
      <div className="show-for-desktop">Experience</div>
      <div className="show-for-desktop">Details</div>
    </div>
    <div className="list-body">
      {
        props.profiles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No experiences to share.</span>
          </div>
        ) : (
            props.profiles.map((profile) => {
              console.log(profile);
              return <ExperienceListItem key={profile.phone} {...profile} />;
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

export default connect(mapStateToProps)(ExperienceList);