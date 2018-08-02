import React from 'react';
import Menus from './menus.jsx';
import Canvas from './canvas.jsx';
import Status from './status.jsx';

class Full_UI extends React.Component {
   render() {
      return (
        <div  >
          <Menus />
          <Canvas />
          <Status />
        </div>
      );
   }
}
export default Full_UI;
