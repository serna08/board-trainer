import React from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class GameForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.state = {
      value: ''
    };
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 25) return 'success';
    else if (length > 20) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleCreate(e) {
    console.log('create field req ', e);
    fetch("/", {
      method: 'POST',
      headers:
        {'hash': '0x99'},
        body: { deal: e, auth: 'midnight'}
    })
  .then(function (data) {
  console.log('post success: ', data);
  })
  .catch(function (error) {
  console.log('post failure: ', error);
  });
  console.log('complete: ',e);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleCreate(this.props.state)}>
          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
            <FormControl type="text" value={this.state.value} placeholder="field_id" onChange={this.handleChange}/>
            <FormControl.Feedback />
            <Button bsStyle={'info'}  type="submit">join</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
export default GameForm;
