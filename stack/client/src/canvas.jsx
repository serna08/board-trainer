import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';
import JsButton from './jsclick.jsx';

class Canvas extends React.Component {
   render() {
      return (
        <div>
          <h4>canvas goes here</h4>



          <Tabs bsStyle={'pills'} defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">

            <JsButton />

            </Tab>
            <Tab eventKey={2} title="Tab 2">
<Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>

</Grid>;

  </Tab>
  <Tab eventKey={3} title="Tab 3" disabled>



<Grid>;
  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
    </Col>
  </Row>
</Grid>;


</Tab>
</Tabs>;
          <h4>canvas ends here</h4>
        </div>
      );
   }
}
export default Canvas;
