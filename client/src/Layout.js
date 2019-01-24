import React from 'react';
import Header from './Header';

const componentWithLayout = PrevComponent => {
  const newComponent = () => (
    <div>
      <Header  />
      <PrevComponent />
      
    </div>
  );

  return newComponent;
};

export default componentWithLayout;