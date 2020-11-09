import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Form} from 'react-formio';

const FormImportedJson = class extends Component {

  onSubmit() {
    alert('Form submitted!')
  }

  render() {
    const formJson = require("./forms.json")
    

    return (
      <div>
        <Form src={formJson} onSubmit={(data) => {
                                      console.log("DATA", data.data);
                                      }}/>
        </div>
    );
  }
}

export default connect(
)(FormImportedJson)
