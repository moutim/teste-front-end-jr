import React from 'react';
import './stylizedTitle.scss';

interface StylizedTitleProps {
  title: string;
}

const StylizedTitle: React.FC<StylizedTitleProps> = ({ title }) => {
  return (
    <h3 className='stylized-title limiter'>{title}</h3>
  );
};

export default StylizedTitle;