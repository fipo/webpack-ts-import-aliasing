import * as React from 'react';

import './style.css';

interface ILayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const layout: React.SFC<ILayoutProps> = ({ sidebar, main }) => (
  <div className="l-layout">
    <div className="l-sidebar">{sidebar}</div>
    <div className="l-main">{main}</div>
  </div>
);

export default layout;
