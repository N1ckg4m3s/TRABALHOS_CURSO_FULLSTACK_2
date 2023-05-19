import React from 'react';
import { Menu } from './Menu';
const Layout: React.FC = (props) => (
  <div>
    <nav>
      <Menu />
    </nav>
    <main>{props.children}</main>

    {/*language=CSS*/}
    <style jsx global>
      {`
        a {
          font-family: Arial;
        }
      `}
    </style>
  </div>
);

export default Layout;
