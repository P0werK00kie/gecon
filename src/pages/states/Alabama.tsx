import React from 'react';
import StateDetailPage from '../../components/StateDetailPage';
import { getStateBySlug } from '../../data/stateData';

const Alabama = () => {
  const stateData = getStateBySlug('alabama');
  
  if (!stateData) {
    return <div>State not found</div>;
  }

  return <StateDetailPage stateData={stateData} />;
};

export default Alabama;