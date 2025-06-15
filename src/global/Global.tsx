import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Global = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header isCollapsed={isCollapsed} toggle={handleToggle} />
      <Sidebar isCollapsed={isCollapsed} />
    </>
  );
};

export default Global;
