//src/componentes/Card/index.tsx

import React from 'react';

import './style.css';

const Card: React.FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
