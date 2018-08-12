import React from 'react';
import {Button, bootstrapUtils} from 'react-bootstrap';



const customButtonStyle = (

  <div>

    <style type="text/css">{`
    .btn-custom {
        background-color: purple;
        color: white;
    }
    `}</style>
    <Button bsStyle="link">Custom</Button>
  </div>
);

react.render(customButtonStyle);


export default customButtonStyle;
