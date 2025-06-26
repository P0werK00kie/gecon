import React from 'react';
import StateDetailPage from '../../components/StateDetailPage';
import { getStateBySlug } from '../../data/stateData';

const Mississippi = () => {
  const stateData = getStateBySlug('mississippi');
  
  if (!stateData) {
    return <div>State not found</div>;
  }

  return <StateDetailPage stateData={stateData} />;
};

export default Mississippi;