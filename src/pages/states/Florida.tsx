import React from 'react';
import StateDetailPage from '../../components/StateDetailPage';
import { getStateBySlug } from '../../data/stateData';

const Florida = () => {
  const stateData = getStateBySlug('florida');
  
  if (!stateData) {
    return <div>State not found</div>;
  }

  return <StateDetailPage stateData={stateData} />;
};

export default Florida;