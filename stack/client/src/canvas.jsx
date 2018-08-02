import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';
import JsButton from './jsclick.jsx';

class Canvas extends React.Component {
   render() {
      return (
        <div >
          <h4>layout1</h4>



          <Tabs bsStyle={'pills'} defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="game1">

            <JsButton />

            </Tab>
            <Tab eventKey={2} title="board2">
<Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>game 1 goes here</code>
              </Col>
              <Col xs={6} md={4}>
                <code>game 2</code>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae dui tempor, pretium nibh non, suscipit eros. Sed congue luctus lectus ac viverra. Vivamus tempor lorem id lectus volutpat, laoreet malesuada lacus luctus. Vestibulum aliquet lectus mauris, at venenatis nulla condimentum ac. Praesent eleifend, dolor non euismod hendrerit, nisi ipsum imperdiet lectus, ac placerat lacus neque nec felis. Maecenas felis ex, malesuada nec odio at, interdum tempus felis. Phasellus posuere purus sit amet nisi varius sodales. In varius dignissim dui, sit amet lobortis enim ornare in. Proin ut faucibus tortor. </p>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>

</Grid>;

  </Tab>
  <Tab eventKey={3} title="#todo: move tabs down" >



<Grid>;
  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>push: col to the right</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>pull: col to the left</code>
    </Col>
  </Row>
</Grid>;


</Tab>
</Tabs>;
          <h4>___________________</h4>
        </div>
      );
   }
}
export default Canvas;
