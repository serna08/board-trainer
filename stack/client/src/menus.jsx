import React from 'react';
import TopNav from './topnav.jsx';
import Messages from './messages.jsx';
import Statics from './statics.jsx';

class Menus extends React.Component {
   render() {
      return (
        <div>
          <TopNav />
          <Messages />
          <Statics />
        </div>
      );
   }
}
export default Menus;
