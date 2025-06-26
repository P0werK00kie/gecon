import React from 'react';
import StateDetailPage from '../../components/StateDetailPage';
import { getStateBySlug } from '../../data/stateData';

const NorthCarolina = () => {
  const stateData = getStateBySlug('north-carolina');
  
  if (!stateData) {
    return <div>State not found</div>;
  }

  return <StateDetailPage stateData={stateData} />;
};

export default NorthCarolina;