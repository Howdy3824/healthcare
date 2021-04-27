import React from 'react';
import PdonorList from './PdonorList';
import PdonorListFilter from './PdonorListFilter';
import Summary from './Summary';

const PdonorDashboardPage = () => (
  <div>
    <Summary />
    <PdonorListFilter />
    <PdonorList />
  </div>
);

export default PdonorDashboardPage;
