import React from 'react';
import TopNav from './topnav.jsx';
import QuickNav from './quicknav.jsx';

class Menus extends React.Component {
   render() {
      return (
        <div>
          <TopNav />
          <QuickNav />
        </div>
      );
   }
}
export default Menus;
