import React from 'react';
import GridDistortion from './GridDistortion';

const Project = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <GridDistortion
        imageSrc="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg"
        grid={15}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="custom-class"
      />
    </div>
  );
};

export default Project;
