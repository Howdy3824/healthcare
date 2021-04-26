import React from 'react';
import HospitalList from './HospitalList';
import Summary from './Summary';
import Search from './Search';

const HospitalDashboardPage = () => (
  <div>
    <Summary />
    <Search />
    <HospitalList />
  </div>
);

export default HospitalDashboardPage;
