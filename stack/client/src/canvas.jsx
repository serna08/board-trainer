import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {Tabs, Tab, Button, } from 'react-bootstrap';
import App1 from './boardsimple.jsx'
import JsButton from './jsclick.jsx';
import JsGroupBs from './jsgroup.jsx';
import TWorking from './tttworking.jsx';
import TTT11 from './ttt1.jsx';
import PyButton from './pythonclick.jsx';
import Status from './status.jsx';

const tabStyle ={
  backgroundColor: 'white',

};

const titleStyle ={
  color: 'smokewhite',
};



class Canvas extends React.Component {
   render() {
      return (
        <div>
          <br/><br/>
          <h3 style={titleStyle}> >_$ arena</h3>

          <JsGroupBs />
          <br/>
          <TTT11 />
          <br/>

          <Tabs bsStyle={'secondary'} bsStyle={'tabs'} defaultActiveKey={3} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="reqs">

            <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <code>push: col to the right</code>

              </Col>
              <Col md={6} mdPull={6}>
                <code>pull: col to the left</code>
                <JsButton />
              </Col>
              <Col md={6} mdPush={6}>
                <code>push: col to the right</code>
                <JsButton />
              </Col>
              <Col md={6} mdPull={6}>
                <code>pull: col to the left</code>
                <Button bsStyle="info">nothing</Button>
              </Col>

              <Button bsStyle="info">nothing</Button>

              <Button bsStyle="info">nothing</Button>
            </Row>
          </Grid>;


            </Tab>
            <Tab   eventKey={2} title="info">
<Grid>
            <Row className="show-grid">
              <Col md={8}>
                <App1 />
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>

</Grid>;

  </Tab>
  <Tab eventKey={3} title="dev">

<Grid>;
  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>offset</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>copyright</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>status</code><Status />
      <PyButton />
    </Col>
  </Row>
</Grid>;


</Tab>
</Tabs>;
        </div>
      );
   }
}
export default Canvas;
