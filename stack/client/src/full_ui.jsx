import React from 'react';
import Menus from './menus.jsx';
import Canvas from './canvas.jsx';
import Statics from './statics.jsx';

class Full_UI extends React.Component {
   render() {
      return (
        <div  >
          <Canvas />
          <Menus />
          <Statics />
        </div>
      );
   }
}
export default Full_UI;
