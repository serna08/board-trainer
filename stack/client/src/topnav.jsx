import React from 'react';
import NavigationMenu from './navigation.jsx';
import Alerts from './alerts.jsx';


class TopNav extends React.Component {
   render() {
      return (
        <div>
          <NavigationMenu />
          <Alerts />
        </div>
      );
   }
}
export default TopNav;
