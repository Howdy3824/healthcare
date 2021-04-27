import React from 'react';
import { connect } from 'react-redux';
import HospitalListItem from './HospitalListItem';
//import selectExpenses from '../selectors/expenses';

export const HospitalList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Hospitals near your location</div>
      <div className="show-for-desktop">Hospitals near your location</div>
      <div className="show-for-desktop">Distance</div>
    </div>
    <div className="list-body">
      {
        props.hospitals.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No hospitals</span>
          </div>
        ) : (
            props.hospitals.map((hospital) => {
              return <HospitalListItem key={hospital.pital.id} {...hospital} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    hospitals: state.hospitals
  };
};

export default connect(mapStateToProps)(HospitalList);